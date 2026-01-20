# 兒童英文跟讀練習網頁 - 資源整理

> 最後更新：2026-01-20

## 專案目標

建立一個手機版 SPA 網頁，讓 3-5 歲幼兒可以透過 YouTube 兒童動畫影片練習英文跟讀。

---

## YouTube 字幕 MCP 伺服器

### 已安裝
```json
// ~/.claude.json 中的設定
"youtube-transcript": {
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@kimtaeyoon83/mcp-server-youtube-transcript"],
  "env": {}
}
```

### 其他可用的 MCP 伺服器
| 名稱 | 連結 | 說明 |
|------|------|------|
| @kimtaeyoon83/mcp-server-youtube-transcript | [npm](https://www.npmjs.com/package/@kimtaeyoon83/mcp-server-youtube-transcript) / [GitHub](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript) | 主要使用的 MCP |
| @sinco-lab/mcp-youtube-transcript | [npm](https://www.npmjs.com/package/@sinco-lab/mcp-youtube-transcript) | 替代方案 |
| jkawamoto/mcp-youtube-transcript | [GitHub](https://github.com/jkawamoto/mcp-youtube-transcript) | Python 版本，有 Docker 支援 |

---

## 有字幕的佩佩豬 YouTube 資源

### 專門字幕頻道
| 頻道名稱 | 連結 | 說明 |
|----------|------|------|
| PeppaPigSubtitled | [YouTube](https://www.youtube.com/@peppapigsubtitled8981) | 16.3萬訂閱，提供硬字幕版本 |

### 有字幕的播放清單
| 播放清單 | 連結 | 集數 |
|----------|------|------|
| Peppa Pig - Series 1 All Episodes (with subtitles) | [YouTube](https://www.youtube.com/playlist?list=PL9H5wl7jyq4RW3I86ECokGqzESs4SrY0Z) | 第一季全集 |
| Peppa Pig - Series 2 All Episodes (with subtitles) | [YouTube](https://www.youtube.com/playlist?list=PL9H5wl7jyq4RwVmeT12DY06PHwACABzod) | 第二季全集 |
| Peppa Pig - Series 3 (with subtitles) | [YouTube](https://www.youtube.com/playlist?list=PL9H5wl7jyq4Qrko9ewCmatdZw7Jz-Y8VV) | 第三季 |
| Peppa Pig - Series 4 (with subtitles) | [YouTube](https://www.youtube.com/playlist?list=PL9H5wl7jyq4S1WzRP7rZpbaxiiTwKErPH) | 第四季 |

### 推薦的單集影片（有硬字幕）- 已使用於本專案
| 影片名稱 | Video ID | 連結 | 句子數 |
|----------|----------|------|--------|
| Muddy Puddles (泥巴水坑) | z9wHUokAyvI | [YouTube](https://www.youtube.com/watch?v=z9wHUokAyvI) | 20 句 |
| Mr Dinosaur Is Lost (恐龍先生不見了) | 8t1WdjVZbiE | [YouTube](https://www.youtube.com/watch?v=8t1WdjVZbiE) | 6 句 |
| Best Friend (好朋友) | -qjzaeBNNOs | [YouTube](https://www.youtube.com/watch?v=-qjzaeBNNOs) | 5 句 |
| Hide and Seek (捉迷藏) | z0JlpI0KfVU | [YouTube](https://www.youtube.com/watch?v=z0JlpI0KfVU) | 5 句 |
| The Playgroup (幼兒園) | 4cKnoK2KYPc | [YouTube](https://www.youtube.com/watch?v=4cKnoK2KYPc) | 5 句 |
| Bicycles (腳踏車) | HqYNifbUzzY | [YouTube](https://www.youtube.com/watch?v=HqYNifbUzzY) | 4 句 |
| Pancakes (鬆餅) | hpBDNzokIdg | [YouTube](https://www.youtube.com/watch?v=hpBDNzokIdg) | 4 句 |
| Camping (露營) | J2DrjpYPjo4 | [YouTube](https://www.youtube.com/watch?v=J2DrjpYPjo4) | 4 句 |
| At The Beach (在海灘) | cu6xvXv-YTU | [YouTube](https://www.youtube.com/watch?v=cu6xvXv-YTU) | 4 句 |
| Shopping (購物) | EL6rvG9qVAc | [YouTube](https://www.youtube.com/watch?v=EL6rvG9qVAc) | 3 句 |

### 其他推薦的單集影片（有硬字幕）- 可用於擴充
| 影片名稱 | Video ID | 連結 |
|----------|----------|------|
| Polly Parrot (波莉鸚鵡) | KQbHc9abYMI | [YouTube](https://www.youtube.com/watch?v=KQbHc9abYMI) |
| Mummy Pig At Work (媽咪在工作) | 2sv4-_tKHhY | [YouTube](https://www.youtube.com/watch?v=2sv4-_tKHhY) |
| Daddy Loses His Glasses (爸爸眼鏡不見了) | R1kC-fKzAhI | [YouTube](https://www.youtube.com/watch?v=R1kC-fKzAhI) |
| Gardening (園藝) | CTZJSVbzdyU | [YouTube](https://www.youtube.com/watch?v=CTZJSVbzdyU) |
| Hiccups (打嗝) | KYOWEC3Hx40 | [YouTube](https://www.youtube.com/watch?v=KYOWEC3Hx40) |
| Secrets (秘密) | 6MPWnMpLMcg | [YouTube](https://www.youtube.com/watch?v=6MPWnMpLMcg) |
| Flying a Kite (放風箏) | Sjo_PmX_pLc | [YouTube](https://www.youtube.com/watch?v=Sjo_PmX_pLc) |
| Picnic (野餐) | 7GCOGUeWaFA | [YouTube](https://www.youtube.com/watch?v=7GCOGUeWaFA) |
| Musical Instruments (樂器) | r1-3Cv2h23s | [YouTube](https://www.youtube.com/watch?v=r1-3Cv2h23s) |
| New Shoes (新鞋子) | 90xXHuliEEk | [YouTube](https://www.youtube.com/watch?v=90xXHuliEEk) |
| Snow (下雪) | _-diBexRvk0 | [YouTube](https://www.youtube.com/watch?v=_-diBexRvk0) |
| Thunderstorm (雷雨) | tm8nM_E3Ikc | [YouTube](https://www.youtube.com/watch?v=tm8nM_E3Ikc) |
| The Sleepy Princess (睡美人) | gNgs_utREUY | [YouTube](https://www.youtube.com/watch?v=gNgs_utREUY) |
| The Museum (博物館) | PpdIewQhnTo | [YouTube](https://www.youtube.com/watch?v=PpdIewQhnTo) |
| My Birthday Party (我的生日派對) | SQktwj7D3Po | [YouTube](https://www.youtube.com/watch?v=SQktwj7D3Po) |

### 官方頻道（部分有自動字幕）
| 頻道名稱 | 連結 | 訂閱數 |
|----------|------|--------|
| Peppa Pig - Official Channel | [YouTube](https://www.youtube.com/@PeppaPigOfficial) | 4290萬 |
| George Pig - Official Channel | [YouTube](https://www.youtube.com/@GeorgePigOfficial) | 官方 |

---

## 字幕下載網站

| 網站 | 連結 | 說明 |
|------|------|------|
| YouSubtitles | [Peppa Pig 頻道](https://www.yousubtitles.com/Peppa-Pig-Official-Channel-cd-943) | 可下載字幕檔 |
| OpenSubtitles | [Peppa Pig](https://www.opensubtitles.org/en/ssearch/sublanguageid-/idmovie-135898) | 10季 411集字幕 |
| VoiceTube | [Peppa Pig](https://www.voicetube.com/search?query=Peppa+Pig) | 英語學習平台，有中英字幕 |

---

## 經典佩佩豬句子（適合 3-5 歲跟讀）

### 開場白
| 英文 | 中文 | 難度 |
|------|------|------|
| I'm Peppa Pig! | 我是佩佩豬！ | 簡單 |
| This is my little brother George. | 這是我弟弟喬治。 | 簡單 |
| This is Mummy Pig. | 這是豬媽咪。 | 簡單 |
| This is Daddy Pig. | 這是豬爸爸。 | 簡單 |

### 常用句子
| 英文 | 中文 | 難度 |
|------|------|------|
| I love jumping in muddy puddles! | 我喜歡跳泥巴水坑！ | 中等 |
| Dinosaur! Grr! | 恐龍！吼！ | 簡單 |
| Let's go! | 走吧！ | 簡單 |
| Come on, George! | 來吧，喬治！ | 簡單 |
| Good morning! | 早安！ | 簡單 |
| Good night! | 晚安！ | 簡單 |
| Thank you! | 謝謝！ | 簡單 |
| Please! | 拜託！ | 簡單 |
| Yes, please! | 好的，謝謝！ | 簡單 |
| No, thank you! | 不用了，謝謝！ | 簡單 |
| I'm hungry! | 我餓了！ | 簡單 |
| It's bedtime! | 該睡覺了！ | 簡單 |
| Let's play! | 來玩吧！ | 簡單 |
| What's that? | 那是什麼？ | 簡單 |
| Look! | 看！ | 簡單 |
| Wow! | 哇！ | 簡單 |

### 進階句子
| 英文 | 中文 | 難度 |
|------|------|------|
| Mummy, can we go outside? | 媽咪，我們可以出去嗎？ | 中等 |
| Everyone loves jumping in muddy puddles! | 大家都喜歡跳泥巴水坑！ | 中等 |
| If you jump in muddy puddles, you must wear your boots. | 如果要跳泥巴水坑，必須穿靴子。 | 困難 |

---

## 其他兒童動畫資源

### 動物方城市 (Zootopia)
- 官方預告片有字幕
- 較適合年齡較大的兒童（5歲以上）

### 少年悍將 (Teen Titans Go!)
- 語速較快
- 適合 6 歲以上

### 其他推薦
| 動畫 | 適合年齡 | 說明 |
|------|----------|------|
| Bluey | 3-7 歲 | 澳洲口音，語速適中 |
| Paw Patrol | 3-6 歲 | 美式英語，簡單詞彙 |
| Cocomelon | 1-4 歲 | 兒歌為主，超級簡單 |

---

## 技術參考

### YouTube 嵌入播放器 API
- [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference)
- 支援 A-B 循環播放
- 可控制播放時間點

### 錄音 API
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
- 支援手機瀏覽器

---

## 待辦事項

- [x] 建立網頁框架 (Vite + React + TypeScript)
- [x] 實作 YouTube 嵌入播放器
- [x] 實作 A-B 循環功能
- [x] 實作 AI 語音朗讀功能 (Web Speech API)
- [x] 設計適合幼兒的 UI (粉紅色可愛風格)
- [x] 新增 60 句佩佩豬例句（來自 10 個不同集數）
- [ ] 測試 MCP 字幕抓取功能（目前回傳格式有問題）
- [ ] 繼續擴充更多集數的例句

---

## 注意事項

1. **版權問題**：YouTube 影片內容有版權，僅供教育用途
2. **硬字幕 vs 軟字幕**：PeppaPigSubtitled 頻道的字幕是燒錄在影片中的（硬字幕），無法用 MCP 抓取
3. **自動字幕**：部分官方影片有 YouTube 自動生成字幕，但準確度不一
