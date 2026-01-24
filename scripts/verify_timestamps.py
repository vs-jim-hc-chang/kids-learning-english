#!/usr/bin/env python3
"""
驗證 sentences.ts 中的時間戳是否與 YouTube 字幕匹配
使用方式: pipx run --spec youtube-transcript-api python3 scripts/verify_timestamps.py
"""

import re
import json
import time
from pathlib import Path
from difflib import SequenceMatcher

try:
    from youtube_transcript_api import YouTubeTranscriptApi
except ImportError:
    print("請使用以下指令執行此腳本：")
    print("pipx run --spec youtube-transcript-api python3 scripts/verify_timestamps.py")
    exit(1)


def parse_sentences_ts(file_path: str) -> list[dict]:
    """解析 sentences.ts 檔案，提取句子資料"""
    content = Path(file_path).read_text(encoding='utf-8')

    # 使用正則表達式提取每個句子物件
    pattern = r'\{\s*id:\s*(\d+),\s*english:\s*"([^"]+)",\s*chinese:\s*"([^"]+)",\s*videoId:\s*"([^"]+)",\s*startTime:\s*([\d.]+),\s*endTime:\s*([\d.]+)'

    sentences = []
    for match in re.finditer(pattern, content):
        sentences.append({
            'id': int(match.group(1)),
            'english': match.group(2),
            'chinese': match.group(3),
            'videoId': match.group(4),
            'startTime': float(match.group(5)),
            'endTime': float(match.group(6))
        })

    return sentences


def get_cache_path(video_id: str) -> Path:
    """取得字幕快取路徑"""
    cache_dir = Path(__file__).parent / '.cache'
    cache_dir.mkdir(exist_ok=True)
    return cache_dir / f'{video_id}.json'


def fetch_transcript(video_id: str, use_cache: bool = True) -> list[dict] | None:
    """取得 YouTube 影片字幕（支援快取）"""
    cache_path = get_cache_path(video_id)

    # 嘗試從快取讀取
    if use_cache and cache_path.exists():
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                print(f"   📦 使用快取")
                return json.load(f)
        except Exception:
            pass

    # 從 YouTube 取得
    try:
        ytt_api = YouTubeTranscriptApi()
        transcript = ytt_api.fetch(video_id)
        result = [{'start': item.start, 'text': item.text} for item in list(transcript)]

        # 儲存到快取
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"   💾 已快取字幕")

        return result
    except Exception as e:
        print(f"  ❌ 無法取得字幕: {e}")
        return None


def normalize_text(text: str) -> str:
    """正規化文字以便比較"""
    # 移除標點符號和多餘空格，轉小寫
    text = re.sub(r'[^\w\s]', '', text.lower())
    return ' '.join(text.split())


def find_best_match(sentence: str, transcript: list[dict], expected_start: float) -> dict | None:
    """在字幕中找到最匹配的片段，優先選擇靠近預期時間的"""
    sentence_normalized = normalize_text(sentence)
    sentence_words = set(sentence_normalized.split())
    word_count = len(sentence_words)

    # 對於短句（少於 4 個字），時間接近度權重更高
    is_short_sentence = word_count < 4

    candidates = []

    for i, item in enumerate(transcript):
        # 組合當前和接下來幾個字幕
        combined_text = item['text']
        for j in range(1, 5):
            if i + j < len(transcript):
                combined_text += ' ' + transcript[i + j]['text']

        combined_normalized = normalize_text(combined_text)
        combined_words = set(combined_normalized.split())

        # 計算文字相似度
        similarity = SequenceMatcher(None, sentence_normalized, combined_normalized).ratio()

        # 計算關鍵詞匹配率（忽略常見詞）
        common_words = {'i', 'a', 'the', 'is', 'it', 'to', 'and', 'in', 'my', 'you', 'we'}
        important_words = sentence_words - common_words
        if important_words:
            keyword_matches = len(important_words & combined_words)
            keyword_ratio = keyword_matches / len(important_words)
        else:
            keyword_ratio = 0.5  # 如果沒有重要字詞，給中等分數

        # 與預期時間的距離
        time_diff = abs(item['start'] - expected_start)

        # 時間權重：越接近預期時間分數越高
        if time_diff <= 3:
            time_score = 1.0
        elif time_diff <= 10:
            time_score = 1.0 - (time_diff - 3) / 14  # 3-10秒：0.5-1.0
        elif time_diff <= 20:
            time_score = 0.5 - (time_diff - 10) / 40  # 10-20秒：0.25-0.5
        else:
            time_score = max(0, 0.25 - (time_diff - 20) / 80)

        # 對於短句，時間接近度權重更高 (50%)
        if is_short_sentence:
            score = similarity * 0.25 + keyword_ratio * 0.25 + time_score * 0.50
        else:
            # 長句：文字相似度 40% + 關鍵詞 30% + 時間接近度 30%
            score = similarity * 0.4 + keyword_ratio * 0.3 + time_score * 0.3

        # 如果句子完全包含在字幕中且時間非常接近，大幅加分
        if sentence_normalized in combined_normalized:
            if time_diff <= 5:
                score = max(score, 0.95)
            elif time_diff <= 10:
                score = max(score, 0.85)
            elif time_diff <= 20:
                score = max(score, 0.75)

        if score > 0.35:
            candidates.append({
                'start': item['start'],
                'text': combined_text[:100],
                'score': score,
                'time_diff': time_diff,
                'text_similarity': similarity,
                'keyword_ratio': keyword_ratio
            })

    if not candidates:
        return None

    # 按組合分數排序，然後按時間差排序
    candidates.sort(key=lambda x: (-x['score'], x['time_diff']))

    return candidates[0]


def verify_sentences(sentences: list[dict], use_cache: bool = True) -> dict:
    """驗證所有句子的時間戳"""
    results = {
        'passed': [],
        'warning': [],
        'failed': [],
        'errors': []
    }

    # 按影片分組
    videos = {}
    for s in sentences:
        vid = s['videoId']
        if vid not in videos:
            videos[vid] = []
        videos[vid].append(s)

    print(f"\n📋 共有 {len(sentences)} 個句子，來自 {len(videos)} 個影片\n")

    video_count = 0
    for video_id, video_sentences in videos.items():
        # 避免 YouTube 封鎖，每個影片之間等待
        if video_count > 0:
            print("   ⏳ 等待 3 秒避免被封鎖...")
            time.sleep(3)
        video_count += 1

        print(f"🎬 驗證影片: {video_id}")
        print(f"   句子數: {len(video_sentences)}")

        transcript = fetch_transcript(video_id, use_cache=use_cache)
        if not transcript:
            for s in video_sentences:
                results['errors'].append({
                    'id': s['id'],
                    'english': s['english'],
                    'error': '無法取得字幕'
                })
            continue

        for s in video_sentences:
            match = find_best_match(s['english'], transcript, s['startTime'])

            if not match:
                results['failed'].append({
                    'id': s['id'],
                    'english': s['english'],
                    'expected_start': s['startTime'],
                    'issue': '在字幕中找不到匹配'
                })
                print(f"   ❌ ID {s['id']}: 找不到匹配 - \"{s['english'][:40]}...\"")
                continue

            time_diff = abs(match['start'] - s['startTime'])

            if time_diff <= 3:
                results['passed'].append({
                    'id': s['id'],
                    'english': s['english'],
                    'expected_start': s['startTime'],
                    'actual_start': match['start'],
                    'diff': time_diff,
                    'score': match['score']
                })
                print(f"   ✅ ID {s['id']}: OK (差異 {time_diff:.1f}s)")
            elif time_diff <= 10:
                results['warning'].append({
                    'id': s['id'],
                    'english': s['english'],
                    'expected_start': s['startTime'],
                    'actual_start': match['start'],
                    'diff': time_diff,
                    'score': match['score']
                })
                print(f"   ⚠️  ID {s['id']}: 時間差 {time_diff:.1f}s - 預期 {s['startTime']}s，實際 {match['start']:.1f}s")
            else:
                results['failed'].append({
                    'id': s['id'],
                    'english': s['english'],
                    'expected_start': s['startTime'],
                    'actual_start': match['start'],
                    'diff': time_diff,
                    'issue': f'時間差過大 ({time_diff:.1f}s)'
                })
                print(f"   ❌ ID {s['id']}: 時間差過大 {time_diff:.1f}s - 預期 {s['startTime']}s，實際 {match['start']:.1f}s")

        print()

    return results


def print_summary(results: dict):
    """印出驗證摘要"""
    total = len(results['passed']) + len(results['warning']) + len(results['failed']) + len(results['errors'])

    print("=" * 60)
    print("📊 驗證摘要")
    print("=" * 60)
    print(f"✅ 通過: {len(results['passed'])} / {total}")
    print(f"⚠️  警告: {len(results['warning'])} / {total}")
    print(f"❌ 失敗: {len(results['failed'])} / {total}")
    print(f"🚫 錯誤: {len(results['errors'])} / {total}")
    print()

    if results['warning']:
        print("⚠️  需要注意的句子:")
        for w in results['warning']:
            print(f"   ID {w['id']}: {w['english'][:50]}...")
            print(f"      預期 {w['expected_start']}s → 實際 {w['actual_start']:.1f}s (差 {w['diff']:.1f}s)")
        print()

    if results['failed']:
        print("❌ 需要修正的句子:")
        for f in results['failed']:
            print(f"   ID {f['id']}: {f['english'][:50]}...")
            if 'actual_start' in f:
                print(f"      預期 {f['expected_start']}s → 實際 {f['actual_start']:.1f}s")
            else:
                print(f"      問題: {f['issue']}")
        print()

    if results['errors']:
        print("🚫 發生錯誤的句子:")
        for e in results['errors']:
            print(f"   ID {e['id']}: {e['error']}")
        print()

    # 計算通過率
    if total > 0:
        pass_rate = (len(results['passed']) / total) * 100
        print(f"📈 通過率: {pass_rate:.1f}%")

    # 顯示建議修正（可複製貼上）
    fixes_needed = [*results['warning'], *results['failed']]
    fixes_with_time = [f for f in fixes_needed if 'actual_start' in f]
    if fixes_with_time:
        print("\n" + "=" * 60)
        print("📝 建議修正 (基於字幕時間戳):")
        print("=" * 60)
        print("注意：以下建議基於 YouTube 字幕 API 的時間戳")
        print("實際播放時間可能需要手動微調 (通常提前 1-2 秒)")
        print()
        for f in sorted(fixes_with_time, key=lambda x: x['id']):
            suggested_start = max(0, f['actual_start'] - 1)  # 提前 1 秒
            suggested_end = f['actual_start'] + 5  # 假設 5 秒長度
            print(f"ID {f['id']}: startTime: {suggested_start:.0f}, endTime: {suggested_end:.0f}")
            print(f"   句子: {f['english'][:60]}")
            print()

    return len(results['failed']) == 0 and len(results['errors']) == 0


def main():
    import argparse

    parser = argparse.ArgumentParser(description='驗證 sentences.ts 中的時間戳')
    parser.add_argument('--no-cache', action='store_true', help='不使用快取，強制重新取得字幕')
    parser.add_argument('--video', '-v', help='只驗證指定的影片 ID')
    parser.add_argument('--ids', help='只驗證指定的句子 ID (逗號分隔，如: 1,2,3)')
    args = parser.parse_args()

    print("🔍 YouTube 時間戳驗證工具")
    print("=" * 60)

    # 找到 sentences.ts 檔案
    script_dir = Path(__file__).parent
    sentences_file = script_dir.parent / 'src' / 'data' / 'sentences.ts'

    if not sentences_file.exists():
        print(f"❌ 找不到檔案: {sentences_file}")
        exit(1)

    print(f"📁 讀取: {sentences_file}")

    sentences = parse_sentences_ts(str(sentences_file))
    print(f"📝 解析到 {len(sentences)} 個句子")

    # 過濾句子
    if args.video:
        sentences = [s for s in sentences if s['videoId'] == args.video]
        print(f"🎯 過濾影片 {args.video}: {len(sentences)} 個句子")

    if args.ids:
        target_ids = set(int(x.strip()) for x in args.ids.split(','))
        sentences = [s for s in sentences if s['id'] in target_ids]
        print(f"🎯 過濾 ID {args.ids}: {len(sentences)} 個句子")

    if not sentences:
        print("❌ 沒有符合條件的句子")
        exit(1)

    results = verify_sentences(sentences, use_cache=not args.no_cache)
    success = print_summary(results)

    # 儲存結果
    results_file = script_dir / 'verification_results.json'
    with open(results_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"💾 結果已儲存到: {results_file}")

    exit(0 if success else 1)


if __name__ == '__main__':
    main()
