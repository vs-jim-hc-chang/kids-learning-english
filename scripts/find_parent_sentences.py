#!/usr/bin/env python3
"""
從字幕中找出爸爸媽媽說的實用句子
"""

import json

# 讀取字幕
with open('scripts/subtitles_output.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 爸爸媽媽常說的實用句子關鍵詞
PARENT_KEYWORDS = [
    # 日常叮嚀
    "be careful", "don't", "mustn't", "you must", "should",
    "time for", "time to", "it's time",
    "wash", "clean", "tidy",
    "eat", "drink", "finish",
    "come on", "hurry", "quick",
    "wait", "stop", "careful",
    "good", "well done", "brilliant", "very good", "excellent",
    "sorry", "please", "thank",
    "bed", "sleep", "wake",
    # 餐桌用語
    "dinner", "lunch", "breakfast", "supper", "tea time",
    "delicious", "yummy", "tasty",
    # 客廳用語
    "sit", "watch", "read", "play",
    # 問句
    "are you", "do you", "can you", "would you",
    "where is", "what is", "who is",
    # 回應
    "yes", "no", "ok", "alright", "all right",
    "of course", "certainly",
    # 安慰鼓勵
    "don't worry", "it's ok", "never mind",
    # 其他實用
    "let's", "shall we", "how about",
    "look", "see", "listen",
    "help", "try",
]

# 排除的字幕（音樂標記等）
EXCLUDE = ["[Music]", "[Laughter]", "dinosaur", "Peppa Pig", "I'm Peppa"]

def is_useful_sentence(text):
    """判斷是否為實用句子"""
    text_lower = text.lower()

    # 排除條件
    for exc in EXCLUDE:
        if exc.lower() in text_lower:
            return False

    # 太短的不要
    if len(text) < 10:
        return False

    # 包含關鍵詞
    for keyword in PARENT_KEYWORDS:
        if keyword.lower() in text_lower:
            return True

    return False

def format_time(seconds):
    """格式化時間"""
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}:{secs:05.2f}"

# 收集實用句子
useful_sentences = []

for video_name, video_data in data.items():
    video_id = video_data['video_id']
    captions = video_data['captions']

    print(f"\n=== {video_name} ({video_id}) ===")

    for i, cap in enumerate(captions):
        text = cap['text'].strip()
        start = cap['start']
        duration = cap.get('duration', 2)
        end = start + duration

        if is_useful_sentence(text):
            useful_sentences.append({
                'video_name': video_name,
                'video_id': video_id,
                'text': text,
                'start': start,
                'end': end
            })
            print(f"  [{format_time(start)} - {format_time(end)}] {text}")

print(f"\n\n總共找到 {len(useful_sentences)} 條實用句子")

# 輸出為 JSON 供手動篩選
with open('scripts/useful_sentences.json', 'w', encoding='utf-8') as f:
    json.dump(useful_sentences, f, ensure_ascii=False, indent=2)

print(f"已儲存到 scripts/useful_sentences.json")
