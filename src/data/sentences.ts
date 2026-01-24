export interface Sentence {
  id: number;
  english: string;
  chinese: string;
  videoId: string;
  startTime: number; // 秒
  endTime: number; // 秒
  difficulty: 'easy' | 'medium' | 'hard';
  chineseGuide: string; // 車上模式：媽媽般的中文引導說明
}

// 佩佩豬經典句子 - 使用 PeppaPigSubtitled 頻道的 Muddy Puddles 影片
// 影片連結: https://www.youtube.com/watch?v=z9wHUokAyvI
// 時間戳已加上緩衝：開始前 0.5 秒，結束後 0.8 秒，避免句子被截斷
export const sentences: Sentence[] = [
  {
    id: 1,
    english: "I'm Peppa Pig!",
    chinese: "我是佩佩豬！",
    videoId: "z9wHUokAyvI",
    startTime: 0,
    endTime: 3.8,
    difficulty: 'easy',
    chineseGuide: "牧誠、奕荷，Peppa 要跟大家自我介紹囉！她說「我是佩佩豬」，聽聽看她怎麼說，等一下跟著說一遍喔！"
  },
  {
    id: 2,
    english: "This is my little brother George.",
    chinese: "這是我弟弟喬治。",
    videoId: "z9wHUokAyvI",
    startTime: 4.5,
    endTime: 8,
    difficulty: 'easy',
    chineseGuide: "Peppa 要介紹她的弟弟喬治，她說「這是我的弟弟喬治」，little brother 就是小弟弟的意思喔！"
  },
  {
    id: 3,
    english: "This is Mummy Pig.",
    chinese: "這是豬媽咪。",
    videoId: "z9wHUokAyvI",
    startTime: 8,
    endTime: 10,
    difficulty: 'easy',
    chineseGuide: "現在 Peppa 要介紹豬媽咪！Mummy 就是媽咪的意思，聽聽看！"
  },
  {
    id: 4,
    english: "This is Daddy Pig.",
    chinese: "這是豬爸爸。",
    videoId: "z9wHUokAyvI",
    startTime: 9,
    endTime: 12,
    difficulty: 'easy',
    chineseGuide: "接下來是豬爸爸登場！Daddy 就是爸爸的意思喔，跟著說說看！"
  },
  {
    id: 5,
    english: "Peppa Pig!",
    chinese: "佩佩豬！",
    videoId: "z9wHUokAyvI",
    startTime: 13,
    endTime: 16,
    difficulty: 'easy',
    chineseGuide: "片頭曲的結尾！大家一起叫 Peppa Pig！"
  },
  {
    id: 6,
    english: "Muddy Puddles!",
    chinese: "泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 19,
    endTime: 23,
    difficulty: 'easy',
    chineseGuide: "這集的主題是泥巴水坑！Muddy 是泥巴的意思，puddles 是水坑，聽聽看怎麼說！"
  },
  {
    id: 7,
    english: "It is raining today.",
    chinese: "今天下雨了。",
    videoId: "z9wHUokAyvI",
    startTime: 24,
    endTime: 27,
    difficulty: 'easy',
    chineseGuide: "哇，外面下雨了耶！Peppa 說「今天在下雨」，raining 就是下雨的意思，聽聽看！"
  },
  {
    id: 8,
    english: "So Peppa and George cannot play outside.",
    chinese: "所以佩佩和喬治不能在外面玩。",
    videoId: "z9wHUokAyvI",
    startTime: 26,
    endTime: 30,
    difficulty: 'medium',
    chineseGuide: "下雨天不能出去玩，好可惜！cannot 是「不能」的意思，outside 是外面，聯聽看這句怎麼說！"
  },
  {
    id: 9,
    english: "Daddy, it's stopped raining!",
    chinese: "爸爸，雨停了！",
    videoId: "z9wHUokAyvI",
    startTime: 33,
    endTime: 37,
    difficulty: 'easy',
    chineseGuide: "耶！雨停了！Peppa 好開心地告訴爸爸，stopped raining 就是「雨停了」的意思喔！"
  },
  {
    id: 10,
    english: "Can we go out to play?",
    chinese: "我們可以出去玩嗎？",
    videoId: "z9wHUokAyvI",
    startTime: 35,
    endTime: 39,
    difficulty: 'easy',
    chineseGuide: "Peppa 想出去玩，用 Can we 來問「我們可以嗎」，go out 是出去的意思，牧誠、奕荷一起問問看！"
  },
  {
    id: 11,
    english: "Alright, run along you two.",
    chinese: "好的，你們兩個去吧。",
    videoId: "z9wHUokAyvI",
    startTime: 38,
    endTime: 42,
    difficulty: 'medium',
    chineseGuide: "豬爸爸說「好的，你們兩個去吧」！run along 是「去吧、跑去玩」的意思，聽聽看！"
  },
  {
    id: 12,
    english: "Peppa loves jumping in muddy puddles!",
    chinese: "佩佩喜歡跳泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 51,
    endTime: 55,
    difficulty: 'medium',
    chineseGuide: "Peppa 最喜歡做什麼呢？loves 是「很愛」，jumping 是跳，她超愛跳水坑！聽聽看！"
  },
  {
    id: 13,
    english: "I love muddy puddles!",
    chinese: "我喜歡泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 54,
    endTime: 58,
    difficulty: 'easy',
    chineseGuide: "Peppa 最喜歡跳泥巴水坑了！她開心地說「我愛泥巴水坑」，love 就是愛的意思喔！"
  },
  {
    id: 14,
    english: "Peppa, if you jump in muddy puddles, you must wear your boots.",
    chinese: "佩佩，如果你要跳泥巴水坑，必須穿靴子。",
    videoId: "z9wHUokAyvI",
    startTime: 58,
    endTime: 65,
    difficulty: 'hard',
    chineseGuide: "豬媽咪提醒 Peppa，must 是「必須」，boots 是靴子。跳水坑要穿靴子才不會弄濕腳喔！這句比較長，慢慢聽！"
  },
  {
    id: 15,
    english: "Sorry, Mummy.",
    chinese: "對不起，媽咪。",
    videoId: "z9wHUokAyvI",
    startTime: 65,
    endTime: 69,
    difficulty: 'easy',
    chineseGuide: "Peppa 說對不起！Sorry 是道歉的時候說的話，當我們做錯事也要說 Sorry 喔！"
  },
  {
    id: 16,
    english: "George, let's find some more puddles!",
    chinese: "喬治，我們去找更多水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 100,
    endTime: 106,
    difficulty: 'medium',
    chineseGuide: "Peppa 想找更多水坑！Let's 是「我們一起」的意思，find 是找，more 是更多喔！"
  },
  {
    id: 17,
    english: "Look, George!",
    chinese: "看，喬治！",
    videoId: "z9wHUokAyvI",
    startTime: 129,
    endTime: 134,
    difficulty: 'easy',
    chineseGuide: "Peppa 發現什麼了！Look 就是「看」的意思，想要別人看的時候就說 Look！"
  },
  {
    id: 18,
    english: "There's a really big puddle!",
    chinese: "那裡有一個超大的水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 130,
    endTime: 136,
    difficulty: 'medium',
    chineseGuide: "哇！好大的水坑！really big 是「真的很大」，There's 是「那裡有」的意思喔！"
  },
  {
    id: 19,
    english: "Good. It is safe for you.",
    chinese: "好，對你來說是安全的。",
    videoId: "z9wHUokAyvI",
    startTime: 147,
    endTime: 152,
    difficulty: 'easy',
    chineseGuide: "Peppa 確認水坑安全了！safe 是「安全」的意思，It is safe 是「這是安全的」喔！"
  },
  {
    id: 20,
    english: "Everyone loves jumping in muddy puddles!",
    chinese: "大家都喜歡跳泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 253,
    endTime: 258,
    difficulty: 'medium',
    chineseGuide: "大家都愛跳水坑！Everyone 是「每個人」的意思，原來不只 Peppa，大家都喜歡呢！"
  },

  // === Mr Dinosaur Is Lost (恐龍先生不見了) ===
  // 影片連結: https://www.youtube.com/watch?v=8t1WdjVZbiE
  // 影片長度: 4:56 (296秒)
  // 時間戳已根據實際影片校正 (2024-01)
  {
    id: 21,
    english: "George's favourite toy is Mr Dinosaur.",
    chinese: "喬治最喜歡的玩具是恐龍先生。",
    videoId: "8t1WdjVZbiE",
    startTime: 24,
    endTime: 30,
    difficulty: 'medium',
    chineseGuide: "喬治有一個最愛的玩具，就是恐龍先生！favourite 就是「最喜歡的」意思，聽聽看！"
  },
  {
    id: 22,
    english: "Where's Mr Dinosaur?",
    chinese: "恐龍先生在哪裡？",
    videoId: "8t1WdjVZbiE",
    startTime: 88,
    endTime: 92,
    difficulty: 'easy',
    chineseGuide: "喬治找不到恐龍先生了！Where's 是「在哪裡」的意思，想問東西在哪就用這個字喔！"
  },
  {
    id: 23,
    english: "George, don't cry.",
    chinese: "喬治，不要哭。",
    videoId: "8t1WdjVZbiE",
    startTime: 98,
    endTime: 102,
    difficulty: 'easy',
    chineseGuide: "喬治哭了！Peppa 安慰他說「不要哭」，don't cry 就是不要哭的意思喔！"
  },
  {
    id: 24,
    english: "We'll find Mr Dinosaur.",
    chinese: "我們會找到恐龍先生的。",
    videoId: "8t1WdjVZbiE",
    startTime: 102,
    endTime: 107,
    difficulty: 'easy',
    chineseGuide: "Peppa 說「我們會找到的」！We'll 是「我們會」，find 是找，好溫暖的話喔！"
  },
  {
    id: 25,
    english: "Maybe the dinosaur is in the garden.",
    chinese: "也許恐龍在花園裡。",
    videoId: "8t1WdjVZbiE",
    startTime: 150,
    endTime: 156,
    difficulty: 'medium',
    chineseGuide: "Maybe 是「也許」的意思，garden 是花園。大家在猜恐龍先生在哪裡呢！"
  },
  {
    id: 26,
    english: "There it is! In the tree!",
    chinese: "在那裡！在樹上！",
    videoId: "8t1WdjVZbiE",
    startTime: 232,
    endTime: 238,
    difficulty: 'easy',
    chineseGuide: "找到了！There it is 是「就在那裡」，tree 是樹。恐龍先生在樹上耶！"
  },

  // === Best Friend (好朋友) ===
  // 影片連結: https://www.youtube.com/watch?v=-qjzaeBNNOs
  // 影片長度: 4:56 (296秒)
  // 時間戳已根據實際影片校正 (2024-01)
  {
    id: 27,
    english: "Suzy Sheep is Peppa's best friend.",
    chinese: "蘇西羊是佩佩最好的朋友。",
    videoId: "-qjzaeBNNOs",
    startTime: 21,
    endTime: 28,
    difficulty: 'medium',
    chineseGuide: "Peppa 有一個最好的朋友叫蘇西！best friend 就是「最好的朋友」，牧誠、奕荷有 best friend 嗎？"
  },
  {
    id: 28,
    english: "Hello, Suzy!",
    chinese: "哈囉，蘇西！",
    videoId: "-qjzaeBNNOs",
    startTime: 40,
    endTime: 45,
    difficulty: 'easy',
    chineseGuide: "Peppa 跟蘇西打招呼！Hello 是「哈囉」，見到朋友要開心地說 Hello 喔！"
  },
  {
    id: 29,
    english: "Let's play in my bedroom.",
    chinese: "我們去我房間玩吧。",
    videoId: "-qjzaeBNNOs",
    startTime: 58,
    endTime: 64,
    difficulty: 'easy',
    chineseGuide: "Peppa 邀請蘇西去房間玩！Let's play 是「我們一起玩」，bedroom 是臥室喔！"
  },
  {
    id: 30,
    english: "I'm a doctor!",
    chinese: "我是醫生！",
    videoId: "-qjzaeBNNOs",
    startTime: 168,
    endTime: 173,
    difficulty: 'easy',
    chineseGuide: "她們在玩扮家家酒！doctor 是醫生，I'm a 是「我是一個」，你想當什麼呢？"
  },
  {
    id: 31,
    english: "And I'm a nurse!",
    chinese: "我是護士！",
    videoId: "-qjzaeBNNOs",
    startTime: 173,
    endTime: 178,
    difficulty: 'easy',
    chineseGuide: "蘇西說她要當護士！nurse 是護士，And 是「而且」的意思，醫生和護士一起照顧病人喔！"
  },

  // === Hide and Seek (捉迷藏) ===
  // 影片連結: https://www.youtube.com/watch?v=z0JlpI0KfVU
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 32,
    english: "Peppa and George are playing hide and seek.",
    chinese: "佩佩和喬治在玩捉迷藏。",
    videoId: "z0JlpI0KfVU",
    startTime: 28,
    endTime: 33,
    difficulty: 'easy',
    chineseGuide: "來玩捉迷藏囉！hide and seek 就是捉迷藏喔！"
  },
  {
    id: 33,
    english: "One, two, three, four, five!",
    chinese: "一、二、三、四、五！",
    videoId: "z0JlpI0KfVU",
    startTime: 38,
    endTime: 46,
    difficulty: 'easy',
    chineseGuide: "來數數字囉！one 是一，two 是二，three 是三，four 是四，five 是五！牧誠、奕荷跟著數！"
  },
  {
    id: 34,
    english: "Ready or not, here I come!",
    chinese: "準備好了沒，我來了！",
    videoId: "z0JlpI0KfVU",
    startTime: 51,
    endTime: 56,
    difficulty: 'medium',
    chineseGuide: "數完了要去找人囉！Ready or not 是「準備好了沒」，here I come 是「我來了」！"
  },
  {
    id: 35,
    english: "Found you!",
    chinese: "找到你了！",
    videoId: "z0JlpI0KfVU",
    startTime: 61,
    endTime: 65,
    difficulty: 'easy',
    chineseGuide: "找到了！Found 是「找到」的意思，玩捉迷藏找到人就大喊 Found you！"
  },
  {
    id: 36,
    english: "Where can he be?",
    chinese: "他在哪裡呢？",
    videoId: "z0JlpI0KfVU",
    startTime: 227,
    endTime: 233,
    difficulty: 'easy',
    chineseGuide: "喬治躲起來了！Where can he be 是「他在哪裡呢」的意思，你猜他躲在哪？"
  },

  // === The Playgroup (幼兒園) ===
  // 影片連結: https://www.youtube.com/watch?v=4cKnoK2KYPc
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 37,
    english: "It is George's first day.",
    chinese: "這是喬治的第一天。",
    videoId: "4cKnoK2KYPc",
    startTime: 27,
    endTime: 32,
    difficulty: 'easy',
    chineseGuide: "喬治今天第一次去幼兒園！first day 是「第一天」，好興奮喔！"
  },
  {
    id: 38,
    english: "Hello, this is my little brother George.",
    chinese: "你好，這是我弟弟喬治。",
    videoId: "4cKnoK2KYPc",
    startTime: 95,
    endTime: 101,
    difficulty: 'easy',
    chineseGuide: "Peppa 介紹她的弟弟！Hello 是打招呼，little brother 是小弟弟！"
  },
  {
    id: 39,
    english: "George is my brother. He's brilliant!",
    chinese: "喬治是我弟弟，他很棒！",
    videoId: "4cKnoK2KYPc",
    startTime: 141,
    endTime: 148,
    difficulty: 'easy',
    chineseGuide: "Peppa 很驕傲她的弟弟！brilliant 是「很棒」的意思喔！"
  },
  {
    id: 40,
    english: "I will show him how to paint a flower.",
    chinese: "我會教他怎麼畫花。",
    videoId: "4cKnoK2KYPc",
    startTime: 163,
    endTime: 170,
    difficulty: 'medium',
    chineseGuide: "Peppa 要教喬治畫畫！paint 是畫，flower 是花喔！"
  },

  // === Bicycles (腳踏車) ===
  // 影片連結: https://www.youtube.com/watch?v=HqYNifbUzzY
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 41,
    english: "George is riding his tricycle.",
    chinese: "喬治在騎三輪車。",
    videoId: "HqYNifbUzzY",
    startTime: 54,
    endTime: 59,
    difficulty: 'easy',
    chineseGuide: "喬治騎三輪車！tricycle 是三輪車，tri 是三的意思喔！"
  },
  {
    id: 42,
    english: "Let's race to Daddy Pig's pumpkin!",
    chinese: "我們來比賽跑到豬爸爸的南瓜那裡！",
    videoId: "HqYNifbUzzY",
    startTime: 61,
    endTime: 67,
    difficulty: 'medium',
    chineseGuide: "要比賽了！race 是比賽，pumpkin 是南瓜喔！"
  },
  {
    id: 43,
    english: "Ready, steady, go!",
    chinese: "預備，開始！",
    videoId: "HqYNifbUzzY",
    startTime: 173,
    endTime: 178,
    difficulty: 'easy',
    chineseGuide: "比賽要開始了！Ready 是準備好，steady 是穩住，go 是開始！"
  },
  {
    id: 44,
    english: "Peppa is riding on her own!",
    chinese: "佩佩自己在騎車！",
    videoId: "HqYNifbUzzY",
    startTime: 190,
    endTime: 196,
    difficulty: 'easy',
    chineseGuide: "Peppa 學會自己騎車了！on her own 是「靠自己」的意思喔！"
  },

  // === Pancakes (鬆餅) ===
  // 影片連結: https://www.youtube.com/watch?v=hpBDNzokIdg
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 45,
    english: "I love pancakes!",
    chinese: "我愛鬆餅！",
    videoId: "hpBDNzokIdg",
    startTime: 33,
    endTime: 39,
    difficulty: 'easy',
    chineseGuide: "好吃的鬆餅！pancakes 是鬆餅，I love 是「我愛」喔！"
  },
  {
    id: 46,
    english: "Everyone loves pancakes!",
    chinese: "大家都愛鬆餅！",
    videoId: "hpBDNzokIdg",
    startTime: 38,
    endTime: 43,
    difficulty: 'easy',
    chineseGuide: "大家都喜歡吃鬆餅！Everyone 是「每個人」的意思！"
  },
  {
    id: 47,
    english: "Peppa loves stirring.",
    chinese: "佩佩喜歡攪拌。",
    videoId: "hpBDNzokIdg",
    startTime: 83,
    endTime: 89,
    difficulty: 'easy',
    chineseGuide: "Peppa 在幫忙做鬆餅！stirring 是攪拌的意思喔！"
  },

  // === Camping (露營) ===
  // 影片連結: https://www.youtube.com/watch?v=J2DrjpYPjo4
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 48,
    english: "I love camping!",
    chinese: "我愛露營！",
    videoId: "J2DrjpYPjo4",
    startTime: 19,
    endTime: 25,
    difficulty: 'easy',
    chineseGuide: "要去露營囉！camping 是露營，好好玩喔！"
  },
  {
    id: 49,
    english: "I'm an expert at camping.",
    chinese: "我是露營專家。",
    videoId: "J2DrjpYPjo4",
    startTime: 40,
    endTime: 46,
    difficulty: 'medium',
    chineseGuide: "豬爸爸說他是專家！expert 是「專家」的意思喔！"
  },
  {
    id: 50,
    english: "Collecting sticks is fun!",
    chinese: "撿樹枝很好玩！",
    videoId: "J2DrjpYPjo4",
    startTime: 96,
    endTime: 103,
    difficulty: 'easy',
    chineseGuide: "露營要撿樹枝生火！sticks 是樹枝，fun 是好玩！"
  },
  {
    id: 51,
    english: "Listen to the sounds of nature.",
    chinese: "聽聽大自然的聲音。",
    videoId: "J2DrjpYPjo4",
    startTime: 145,
    endTime: 151,
    difficulty: 'medium',
    chineseGuide: "露營可以聽到大自然！nature 是大自然，sounds 是聲音喔！"
  },

  // === At The Beach (在海灘) ===
  // 影片連結: https://www.youtube.com/watch?v=cu6xvXv-YTU
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 52,
    english: "Peppa and George love going to the beach.",
    chinese: "佩佩和喬治喜歡去海邊。",
    videoId: "cu6xvXv-YTU",
    startTime: 22,
    endTime: 30,
    difficulty: 'easy',
    chineseGuide: "去海邊玩囉！beach 是海邊，牧誠、奕荷喜歡去海邊嗎？"
  },
  {
    id: 53,
    english: "Is the water cold?",
    chinese: "水冷嗎？",
    videoId: "cu6xvXv-YTU",
    startTime: 117,
    endTime: 122,
    difficulty: 'easy',
    chineseGuide: "問問看水冷不冷！cold 是冷的意思喔！"
  },
  {
    id: 54,
    english: "I love being at the beach.",
    chinese: "我喜歡在海邊。",
    videoId: "cu6xvXv-YTU",
    startTime: 141,
    endTime: 147,
    difficulty: 'easy',
    chineseGuide: "Peppa 好開心！being at 是「待在」的意思喔！"
  },
  {
    id: 55,
    english: "George, let's make sand castles!",
    chinese: "喬治，我們來蓋沙堡！",
    videoId: "cu6xvXv-YTU",
    startTime: 205,
    endTime: 212,
    difficulty: 'easy',
    chineseGuide: "來蓋沙堡！sand castles 是沙堡，sand 是沙，castle 是城堡喔！"
  },

  // === Shopping (購物) ===
  // 影片連結: https://www.youtube.com/watch?v=EL6rvG9qVAc
  // 時間戳已根據實際影片校正 (2025-01)
  {
    id: 56,
    english: "Peppa and George like shopping.",
    chinese: "佩佩和喬治喜歡購物。",
    videoId: "EL6rvG9qVAc",
    startTime: 27,
    endTime: 34,
    difficulty: 'easy',
    chineseGuide: "去購物囉！shopping 是購物，牧誠、奕荷有跟爸爸媽媽去過超市嗎？"
  },
  {
    id: 57,
    english: "First, we need tomatoes.",
    chinese: "首先，我們需要番茄。",
    videoId: "EL6rvG9qVAc",
    startTime: 68,
    endTime: 74,
    difficulty: 'easy',
    chineseGuide: "要買番茄！First 是「首先」，tomatoes 是番茄喔！"
  },
  {
    id: 58,
    english: "I can see it! This way!",
    chinese: "我看到了！這邊！",
    videoId: "EL6rvG9qVAc",
    startTime: 111,
    endTime: 117,
    difficulty: 'easy',
    chineseGuide: "Peppa 找到東西了！This way 是「這邊」的意思喔！"
  },
  {
    id: 59,
    english: "Here's the spaghetti!",
    chinese: "義大利麵在這裡！",
    videoId: "EL6rvG9qVAc",
    startTime: 115,
    endTime: 121,
    difficulty: 'easy',
    chineseGuide: "找到義大利麵了！spaghetti 是義大利麵喔！"
  },
];

// 以下影片已確認不可用（影片被移除或設為私人），無法加入句子：
// - Swimming (0zrqVJg7O1g)
// - Cleaning the Car (6oTlZnpYRgQ)
// - The Sleepy Princess (wvh8tIXOcCo)
// - The Tooth Fairy (kHBzs5wXNtc)
// - Flying a Kite (hSl7_8VdLyY)
// - Snow (LYD3GK0YKxE)
// - George's Birthday (qH2TPP0a3Pg)
// - The Balloon Ride (gVVz9NpcQoY)
// - Grandpa Pig's Boat (5oFjR71ynqM)
// - Sports Day (6ovfyaHlGLs)
// - Pizza (9g1SQxS0hD4)
// - The Rainbow (RNHyNQzOaug)
// - Polly Parrot (j5OG-hKSlbY)
// - Daddy Gets Fit (n-oLhJyV8vE)


