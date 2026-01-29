#!/usr/bin/env python3
"""
取得 Blippi 歌唱影片的字幕
注意：加入延遲避免被 YouTube 封鎖
"""

import json
import time
import random
from youtube_transcript_api import YouTubeTranscriptApi

# Blippi 歌曲影片清單 - 使用 yt-dlp 搜尋確認的正確 ID
BLIPPI_VIDEOS = {
    "excavator_song": {
        "video_id": "2UgOg6PzyFY",  # Excavator Song! | BLIPPI
        "title": "Excavator Song (挖土機歌)",
        "description": "挖土機歌曲 - Blippi 最經典的歌"
    },
    "excavator_song_new": {
        "video_id": "A65YUhlkXwQ",  # I'm an Excavator! | Brand New BLIPPI Excavator Song
        "title": "I'm an Excavator (新版挖土機歌)",
        "description": "新版挖土機歌曲"
    },
    "garbage_truck": {
        "video_id": "fysFwSfdQzc",  # The Garbage Truck Song by Blippi
        "title": "The Garbage Truck Song (垃圾車歌)",
        "description": "垃圾車歌曲"
    },
    "monster_truck": {
        "video_id": "bflhzGveiu4",  # Monster Trucks for Children with Blippi
        "title": "Monster Truck Song (怪獸卡車歌)",
        "description": "怪獸卡車歌曲"
    },
    "fire_truck": {
        "video_id": "BvOiDVnQo7Y",  # Fire Truck song! | Educational vehicle Songs
        "title": "Fire Truck Song (消防車歌)",
        "description": "消防車歌曲"
    }
}


def get_transcript_safe(api, video_id, title, delay_range=(5, 10)):
    """
    安全地取得字幕，加入延遲和錯誤處理

    Args:
        api: YouTubeTranscriptApi 實例
        video_id: YouTube 影片 ID
        title: 影片標題（用於顯示）
        delay_range: 延遲範圍（秒），預設 5-10 秒（更保守的設定）

    Returns:
        dict: 包含字幕資料的字典，失敗時返回 None
    """
    print(f"\n{'='*50}")
    print(f"正在取得: {title}")
    print(f"影片 ID: {video_id}")
    print(f"連結: https://youtube.com/watch?v={video_id}")

    # 隨機延遲，模擬人類行為
    delay = random.uniform(*delay_range)
    print(f"等待 {delay:.1f} 秒避免被封鎖...")
    time.sleep(delay)

    try:
        # 使用新版 API: 先創建實例，再用 .list() 方法
        transcript_list = api.list(video_id)

        # 優先取得手動字幕，其次自動產生的
        transcript = None
        for t in transcript_list:
            if t.language_code.startswith('en'):
                if not t.is_generated:
                    transcript = t
                    print(f"✓ 找到手動英文字幕")
                    break
                elif transcript is None:
                    transcript = t

        if transcript is None:
            # 嘗試找任何英文相關的字幕
            try:
                transcript = transcript_list.find_transcript(['en', 'en-US', 'en-GB'])
                print(f"✓ 找到英文字幕 (自動產生)")
            except:
                print(f"⚠ 找不到英文字幕，嘗試其他語言...")
                for t in transcript_list:
                    transcript = t
                    print(f"✓ 使用 {t.language} 字幕")
                    break

        if transcript:
            captions = transcript.fetch()
            print(f"✓ 成功取得 {len(captions)} 條字幕")

            # 顯示前幾條字幕預覽
            print("\n字幕預覽 (前5條):")
            for cap in list(captions)[:5]:
                text = cap.text.replace('\n', ' ')[:50]
                print(f"  [{cap.start:.1f}s] {text}...")

            return {
                "video_id": video_id,
                "title": title,
                "url": f"https://youtube.com/watch?v={video_id}",
                "language": transcript.language_code,
                "is_generated": transcript.is_generated,
                "captions": [
                    {
                        "text": cap.text,
                        "start": round(cap.start, 2),
                        "duration": round(cap.duration, 2)
                    }
                    for cap in captions
                ]
            }
        else:
            print(f"✗ 完全找不到字幕")
            return None

    except Exception as e:
        print(f"✗ 錯誤: {type(e).__name__}: {e}")
        return None


def main():
    """主程式"""
    print("\n" + "=" * 60)
    print("   Blippi 歌曲字幕取得器")
    print("=" * 60)
    print("\n⚠️  每次請求之間會有 5-10 秒延遲，避免被封鎖")
    print("⚠️  如果被封鎖，請等待 10-30 分鐘後再試")
    print("⚠️  總共需要約 30-45 秒完成\n")

    # 創建 API 實例
    api = YouTubeTranscriptApi()

    # 選擇要取得的影片：挖土機、卡車、另一首
    videos_to_fetch = [
        ("excavator_song", BLIPPI_VIDEOS["excavator_song"]),       # 挖土機歌
        ("garbage_truck", BLIPPI_VIDEOS["garbage_truck"]),         # 垃圾車 (卡車)
        ("fire_truck", BLIPPI_VIDEOS["fire_truck"]),               # 消防車 (另一首)
    ]

    results = {}
    success_count = 0
    fail_count = 0

    for key, video_info in videos_to_fetch:
        result = get_transcript_safe(
            api,
            video_info["video_id"],
            video_info["title"],
            delay_range=(5, 10)  # 保守的延遲設定
        )

        if result:
            results[key] = result
            success_count += 1
        else:
            fail_count += 1
            results[key] = {
                "video_id": video_info["video_id"],
                "title": video_info["title"],
                "url": f"https://youtube.com/watch?v={video_info['video_id']}",
                "error": "無法取得字幕"
            }

    # 儲存結果
    output_file = "blippi_subtitles.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print("\n" + "=" * 60)
    print(f"   完成！")
    print(f"   成功: {success_count} 個影片")
    print(f"   失敗: {fail_count} 個影片")
    print(f"   結果已儲存到: {output_file}")
    print("=" * 60)

    # 顯示摘要
    print("\n📋 字幕摘要:")
    for key, data in results.items():
        if "captions" in data:
            total_duration = sum(cap["duration"] for cap in data["captions"])
            print(f"  ✓ {data['title']}")
            print(f"    - {len(data['captions'])} 條字幕")
            print(f"    - 總時長: {total_duration:.0f} 秒")
            print(f"    - 連結: {data['url']}")
        else:
            print(f"  ✗ {data['title']}: {data.get('error', '未知錯誤')}")

    return results


if __name__ == "__main__":
    main()
