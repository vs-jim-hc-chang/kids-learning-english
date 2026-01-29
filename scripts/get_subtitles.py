#!/usr/bin/env python3
"""
下載 YouTube 影片字幕的腳本
"""

from youtube_transcript_api import YouTubeTranscriptApi
import json
import sys

# 現有影片 ID 列表
VIDEO_IDS = {
    'muddy_puddles': 'z9wHUokAyvI',
    'mr_dinosaur_lost': '8t1WdjVZbiE',
    'best_friend': '-qjzaeBNNOs',
    'hide_and_seek': 'z0JlpI0KfVU',
    'playgroup': '4cKnoK2KYPc',
    'bicycles': 'HqYNifbUzzY',
    'pancakes': 'hpBDNzokIdg',
    'camping': 'J2DrjpYPjo4',
    'beach': 'cu6xvXv-YTU',
    'shopping': 'EL6rvG9qVAc',
}

def get_transcript(video_id, video_name):
    """獲取影片字幕"""
    try:
        # 新版 API v1.x
        ytt_api = YouTubeTranscriptApi()
        captions = ytt_api.fetch(video_id, languages=['en', 'en-GB', 'en-US'])
        # 轉換為列表格式
        caption_list = list(captions)
        print(f"✅ {video_name}: 找到 {len(caption_list)} 條字幕")
        return caption_list
    except Exception as e:
        print(f"❌ {video_name}: {str(e)}")
        return None

def format_time(seconds):
    """格式化時間"""
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}:{secs:05.2f}"

def main():
    all_transcripts = {}

    print("=" * 50)
    print("開始下載佩佩豬影片字幕")
    print("=" * 50)

    for name, video_id in VIDEO_IDS.items():
        print(f"\n處理: {name} ({video_id})")
        transcript = get_transcript(video_id, name)
        if transcript:
            # 轉換 caption 對象為字典
            captions_data = []
            for cap in transcript:
                captions_data.append({
                    'text': cap.text,
                    'start': cap.start,
                    'duration': cap.duration
                })
            all_transcripts[name] = {
                'video_id': video_id,
                'captions': captions_data
            }

    # 儲存到 JSON 檔案
    output_file = 'scripts/subtitles_output.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_transcripts, f, ensure_ascii=False, indent=2)

    print(f"\n" + "=" * 50)
    print(f"字幕已儲存到: {output_file}")
    print("=" * 50)

    # 顯示每個影片的字幕摘要
    for name, data in all_transcripts.items():
        print(f"\n=== {name} ===")
        print(f"影片 ID: {data['video_id']}")
        print("字幕預覽:")
        for i, caption in enumerate(data['captions'][:20]):  # 只顯示前 20 條
            start = format_time(caption['start'])
            duration = caption.get('duration', 0)
            end = format_time(caption['start'] + duration)
            text = caption['text']
            print(f"  [{start} - {end}] {text}")
        if len(data['captions']) > 20:
            print(f"  ... 還有 {len(data['captions']) - 20} 條字幕")

if __name__ == '__main__':
    main()
