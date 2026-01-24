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
    startTime: 26,
    endTime: 29,
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
    startTime: 60,
    endTime: 66,
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
    startTime: 25,
    endTime: 30,
    difficulty: 'medium',
    chineseGuide: "喬治有一個最愛的玩具，就是恐龍先生！favourite 就是「最喜歡的」意思，聽聽看！"
  },
  {
    id: 22,
    english: "George has lost Mr Dinosaur!",
    chinese: "喬治把恐龍先生弄丟了！",
    videoId: "8t1WdjVZbiE",
    startTime: 129,
    endTime: 134,
    difficulty: 'easy',
    chineseGuide: "糟糕！喬治把恐龍先生弄丟了！lost 是「弄丟」的意思喔！"
  },
  {
    id: 23,
    english: "Don't worry, George. We'll find Mr Dinosaur.",
    chinese: "別擔心，喬治。我們會找到恐龍先生的。",
    videoId: "8t1WdjVZbiE",
    startTime: 133,
    endTime: 138,
    difficulty: 'medium',
    chineseGuide: "Peppa 安慰喬治！Don't worry 是「別擔心」，we'll find 是「我們會找到」的意思喔！"
  },
  {
    id: 24,
    english: "Where's Mr Dinosaur?",
    chinese: "恐龍先生在哪裡？",
    videoId: "8t1WdjVZbiE",
    startTime: 169,
    endTime: 174,
    difficulty: 'easy',
    chineseGuide: "喬治找不到恐龍先生了！Where's 是「在哪裡」的意思，想問東西在哪就用這個字喔！"
  },
  {
    id: 25,
    english: "Maybe we should try the garden.",
    chinese: "也許我們應該去花園找找。",
    videoId: "8t1WdjVZbiE",
    startTime: 212,
    endTime: 218,
    difficulty: 'medium',
    chineseGuide: "Maybe 是「也許」的意思，garden 是花園。大家在猜恐龍先生在哪裡呢！"
  },
  {
    id: 26,
    english: "There he is! There he is!",
    chinese: "在那裡！在那裡！",
    videoId: "8t1WdjVZbiE",
    startTime: 245,
    endTime: 250,
    difficulty: 'easy',
    chineseGuide: "找到了！There he is 是「他在那裡」的意思，找到東西的時候可以這樣說喔！"
  },

  // === Best Friend (好朋友) ===
  // 影片連結: https://www.youtube.com/watch?v=-qjzaeBNNOs
  // 影片長度: 4:56 (296秒)
  // 時間戳已根據實際影片校正 (2024-01)
  {
    id: 27,
    english: "Peppa is waiting for her best friend, Suzy Sheep.",
    chinese: "佩佩正在等她最好的朋友蘇西羊。",
    videoId: "-qjzaeBNNOs",
    startTime: 25,
    endTime: 30,
    difficulty: 'medium',
    chineseGuide: "Peppa 有一個最好的朋友叫蘇西！best friend 就是「最好的朋友」，牧誠、奕荷有 best friend 嗎？"
  },
  {
    id: 28,
    english: "Hello, Suzy! Hello, Peppa!",
    chinese: "哈囉，蘇西！哈囉，佩佩！",
    videoId: "-qjzaeBNNOs",
    startTime: 35,
    endTime: 40,
    difficulty: 'easy',
    chineseGuide: "Peppa 跟蘇西互相打招呼！Hello 是「哈囉」，見到朋友要開心地說 Hello 喔！"
  },
  {
    id: 29,
    english: "Why don't you and Suzy go and play in your bedroom?",
    chinese: "妳和蘇西何不去妳房間玩呢？",
    videoId: "-qjzaeBNNOs",
    startTime: 55,
    endTime: 61,
    difficulty: 'medium',
    chineseGuide: "豬媽咪建議她們去房間玩！Why don't you 是「你何不...」，bedroom 是臥室喔！"
  },
  {
    id: 30,
    english: "I want to be a nurse!",
    chinese: "我想當護士！",
    videoId: "-qjzaeBNNOs",
    startTime: 157,
    endTime: 162,
    difficulty: 'easy',
    chineseGuide: "她們在玩扮家家酒！nurse 是護士，I want to be 是「我想當」的意思喔！"
  },
  {
    id: 31,
    english: "I want to be a doctor!",
    chinese: "我想當醫生！",
    videoId: "-qjzaeBNNOs",
    startTime: 160,
    endTime: 165,
    difficulty: 'easy',
    chineseGuide: "doctor 是醫生！I want to be 是「我想當」，你想當什麼呢？"
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

  // ========================================
  // 小朋友實用句子 (20句)
  // ========================================

  // --- Muddy Puddles ---
  {
    id: 60,
    english: "Sorry, Mommy.",
    chinese: "對不起，媽咪。",
    videoId: "z9wHUokAyvI",
    startTime: 65,
    endTime: 69,
    difficulty: 'easy',
    chineseGuide: "做錯事要說對不起！Sorry 是道歉的話，Mommy 是媽咪，牧誠、奕荷做錯事也要說 Sorry 喔！"
  },
  {
    id: 61,
    english: "Look, George, there's a really big puddle!",
    chinese: "看，喬治，有一個超大的水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 130,
    endTime: 136,
    difficulty: 'medium',
    chineseGuide: "Peppa 發現好東西要跟弟弟分享！Look 是「看」，really big 是「真的很大」喔！"
  },

  // --- Best Friend ---
  {
    id: 62,
    english: "George wants to play too!",
    chinese: "喬治也想玩！",
    videoId: "-qjzaeBNNOs",
    startTime: 120,
    endTime: 126,
    difficulty: 'easy',
    chineseGuide: "George 想加入遊戲！wants to 是「想要」，too 是「也」的意思喔！"
  },
  {
    id: 63,
    english: "Can I help?",
    chinese: "我可以幫忙嗎？",
    videoId: "-qjzaeBNNOs",
    startTime: 216,
    endTime: 222,
    difficulty: 'easy',
    chineseGuide: "想幫忙的時候可以這樣問！Can I 是「我可以嗎」，help 是幫忙喔！"
  },

  // --- Hide and Seek ---
  {
    id: 64,
    english: "Ready or not, here I come!",
    chinese: "準備好了沒，我來了！",
    videoId: "z0JlpI0KfVU",
    startTime: 51,
    endTime: 57,
    difficulty: 'medium',
    chineseGuide: "玩捉迷藏數完數說這句！Ready or not 是「準備好沒」，here I come 是「我來囉」！"
  },
  {
    id: 65,
    english: "Found you!",
    chinese: "找到你了！",
    videoId: "z0JlpI0KfVU",
    startTime: 61,
    endTime: 65,
    difficulty: 'easy',
    chineseGuide: "玩捉迷藏找到人的時候大喊！Found you 是「找到你了」喔！"
  },
  {
    id: 66,
    english: "Where can he be?",
    chinese: "他到底在哪裡呢？",
    videoId: "z0JlpI0KfVU",
    startTime: 227,
    endTime: 233,
    difficulty: 'easy',
    chineseGuide: "找不到人的時候可以這樣問！Where can he be 是「他到底在哪裡」喔！"
  },

  // --- Playgroup ---
  {
    id: 67,
    english: "I'm very good. I will show him how to paint a flower.",
    chinese: "我很厲害。我來教他怎麼畫一朵花。",
    videoId: "4cKnoK2KYPc",
    startTime: 163,
    endTime: 170,
    difficulty: 'hard',
    chineseGuide: "Peppa 很有自信要教弟弟！I'm very good 是「我很厲害」，show him how to 是「教他怎麼」喔！"
  },
  {
    id: 68,
    english: "George is my brother. He's brilliant!",
    chinese: "喬治是我弟弟，他很棒！",
    videoId: "4cKnoK2KYPc",
    startTime: 141,
    endTime: 148,
    difficulty: 'medium',
    chineseGuide: "Peppa 誇獎弟弟！brilliant 是「很棒、很聰明」的意思喔！"
  },

  // --- Bicycles ---
  {
    id: 69,
    english: "Look at me! Look at me!",
    chinese: "看我！看我！",
    videoId: "HqYNifbUzzY",
    startTime: 207,
    endTime: 213,
    difficulty: 'easy',
    chineseGuide: "想讓別人看的時候說！Look at me 是「看我」，可以用來展示自己喔！"
  },
  {
    id: 70,
    english: "I can do it!",
    chinese: "我可以的！",
    videoId: "HqYNifbUzzY",
    startTime: 155,
    endTime: 162,
    difficulty: 'easy',
    chineseGuide: "有自信的說法！I can do it 是「我做得到」，表示你很有信心喔！"
  },
  {
    id: 71,
    english: "Sorry, Daddy. I squashed your pumpkin.",
    chinese: "對不起，爸爸。我壓扁了你的南瓜。",
    videoId: "HqYNifbUzzY",
    startTime: 250,
    endTime: 258,
    difficulty: 'hard',
    chineseGuide: "做錯事要道歉！squashed 是「壓扁」，pumpkin 是南瓜喔！"
  },

  // --- Pancakes ---
  {
    id: 72,
    english: "Mommy, can we help make the pancakes please?",
    chinese: "媽咪，我們可以幫忙做鬆餅嗎？",
    videoId: "hpBDNzokIdg",
    startTime: 56,
    endTime: 64,
    difficulty: 'hard',
    chineseGuide: "有禮貌地請求幫忙！Can we help 是「我們可以幫忙嗎」，最後說 please 更有禮貌喔！"
  },
  {
    id: 73,
    english: "Can I stir?",
    chinese: "我可以攪拌嗎？",
    videoId: "hpBDNzokIdg",
    startTime: 79,
    endTime: 85,
    difficulty: 'easy',
    chineseGuide: "想參與的時候問！stir 是攪拌的意思喔！"
  },

  // --- Camping ---
  {
    id: 74,
    english: "What is that sound?",
    chinese: "那是什麼聲音？",
    videoId: "J2DrjpYPjo4",
    startTime: 147,
    endTime: 153,
    difficulty: 'easy',
    chineseGuide: "聽到聲音好奇的問！What is that 是「那是什麼」，sound 是聲音喔！"
  },
  {
    id: 75,
    english: "Look, there it is!",
    chinese: "看，在那裡！",
    videoId: "J2DrjpYPjo4",
    startTime: 156,
    endTime: 162,
    difficulty: 'easy',
    chineseGuide: "發現東西的時候說！Look 是「看」，there it is 是「在那裡」喔！"
  },

  // --- Beach ---
  {
    id: 76,
    english: "My turn!",
    chinese: "換我了！",
    videoId: "cu6xvXv-YTU",
    startTime: 100,
    endTime: 107,
    difficulty: 'easy',
    chineseGuide: "輪到自己的時候說！My turn 是「換我了」，玩遊戲排隊時可以用喔！"
  },
  {
    id: 77,
    english: "Yes please, Daddy!",
    chinese: "好的，謝謝爸爸！",
    videoId: "cu6xvXv-YTU",
    startTime: 156,
    endTime: 162,
    difficulty: 'easy',
    chineseGuide: "有禮貌地答應！Yes please 是很有禮貌的說「好，謝謝」喔！"
  },

  // --- Shopping ---
  {
    id: 78,
    english: "I can see it! This way!",
    chinese: "我看到了！這邊！",
    videoId: "EL6rvG9qVAc",
    startTime: 111,
    endTime: 117,
    difficulty: 'easy',
    chineseGuide: "找到東西的時候說！I can see it 是「我看到了」，This way 是「這邊」喔！"
  },
  {
    id: 79,
    english: "Daddy, can I sit in the trolley too?",
    chinese: "爸爸，我也可以坐在購物車裡嗎？",
    videoId: "EL6rvG9qVAc",
    startTime: 36,
    endTime: 44,
    difficulty: 'medium',
    chineseGuide: "有禮貌地請求！trolley 是購物推車，too 是「也」的意思喔！"
  },

  // ========================================
  // 爸爸媽媽實用句子 (20句)
  // ========================================

  // --- Muddy Puddles ---
  {
    id: 80,
    english: "All right, run along, you two.",
    chinese: "好的，你們兩個去玩吧。",
    videoId: "z9wHUokAyvI",
    startTime: 38,
    endTime: 44,
    difficulty: 'medium',
    chineseGuide: "爸爸允許小朋友去玩！run along 是「去吧、去玩吧」，you two 是「你們兩個」喔！爸爸媽媽可以這樣說！"
  },
  {
    id: 81,
    english: "Peppa, if you jump in muddy puddles, you must wear your boots.",
    chinese: "佩佩，如果你要跳泥巴水坑，必須穿靴子。",
    videoId: "z9wHUokAyvI",
    startTime: 60,
    endTime: 66,
    difficulty: 'hard',
    chineseGuide: "媽媽提醒規則！If... you must... 是「如果...你必須...」，boots 是靴子。這句很適合爸媽學起來提醒小朋友喔！"
  },
  {
    id: 82,
    english: "Let's clean up quickly before Mommy sees the mess.",
    chinese: "趁媽咪看到之前趕快清理乾淨。",
    videoId: "z9wHUokAyvI",
    startTime: 222,
    endTime: 228,
    difficulty: 'hard',
    chineseGuide: "爸爸說要趕快清理！clean up 是「清理」，quickly 是「快速地」，mess 是「亂」喔！"
  },
  {
    id: 83,
    english: "And look at the mess you're in!",
    chinese: "看看你們弄得多髒！",
    videoId: "z9wHUokAyvI",
    startTime: 215,
    endTime: 222,
    difficulty: 'medium',
    chineseGuide: "看到小朋友弄髒的時候說！mess 是「亂、髒」的意思喔！"
  },

  // --- Mr Dinosaur Is Lost ---
  {
    id: 84,
    english: "Don't worry, George. We'll find Mr Dinosaur.",
    chinese: "別擔心，喬治。我們會找到恐龍先生的。",
    videoId: "8t1WdjVZbiE",
    startTime: 133,
    endTime: 140,
    difficulty: 'medium',
    chineseGuide: "安慰小朋友的話！Don't worry 是「別擔心」，We'll find 是「我們會找到」。爸媽可以用這句安慰小朋友喔！"
  },
  {
    id: 85,
    english: "Good night, Peppa. Good night, George.",
    chinese: "晚安，佩佩。晚安，喬治。",
    videoId: "8t1WdjVZbiE",
    startTime: 76,
    endTime: 84,
    difficulty: 'easy',
    chineseGuide: "睡前說晚安！Good night 是「晚安」，每天睡前都可以說喔！"
  },
  {
    id: 86,
    english: "Well done, Peppa! You really are a very good detective.",
    chinese: "做得好，佩佩！你真的是個很棒的偵探。",
    videoId: "8t1WdjVZbiE",
    startTime: 250,
    endTime: 260,
    difficulty: 'hard',
    chineseGuide: "稱讚小朋友！Well done 是「做得好」，detective 是「偵探」。爸媽誇獎小朋友的時候可以說！"
  },

  // --- Best Friend ---
  {
    id: 87,
    english: "Why don't you go and play in your bedroom?",
    chinese: "妳們何不去房間玩呢？",
    videoId: "-qjzaeBNNOs",
    startTime: 55,
    endTime: 62,
    difficulty: 'medium',
    chineseGuide: "媽媽建議去房間玩！Why don't you 是「你何不...」，bedroom 是臥室。這是很客氣的建議方式喔！"
  },

  // --- Hide and Seek ---
  {
    id: 88,
    english: "Have you thought of looking upstairs?",
    chinese: "你有想過往樓上找嗎？",
    videoId: "z0JlpI0KfVU",
    startTime: 113,
    endTime: 120,
    difficulty: 'hard',
    chineseGuide: "給提示的說法！Have you thought of 是「你有想過嗎」，upstairs 是樓上喔！"
  },
  {
    id: 89,
    english: "Close your eyes and start counting.",
    chinese: "閉上眼睛開始數數。",
    videoId: "z0JlpI0KfVU",
    startTime: 179,
    endTime: 186,
    difficulty: 'medium',
    chineseGuide: "玩捉迷藏的指令！Close your eyes 是「閉上眼睛」，start counting 是「開始數數」喔！"
  },

  // --- Playgroup ---
  {
    id: 90,
    english: "He'll be fine.",
    chinese: "他會沒事的。",
    videoId: "4cKnoK2KYPc",
    startTime: 70,
    endTime: 76,
    difficulty: 'easy',
    chineseGuide: "安慰別人的話！He'll be fine 是「他會沒事的」，可以用來安慰擔心的人喔！"
  },
  {
    id: 91,
    english: "You must be very proud of your brother.",
    chinese: "你一定很以弟弟為榮。",
    videoId: "4cKnoK2KYPc",
    startTime: 237,
    endTime: 244,
    difficulty: 'hard',
    chineseGuide: "稱讚的話！proud of 是「以...為榮」，爸媽可以說 I'm proud of you（我以你為榮）喔！"
  },

  // --- Bicycles ---
  {
    id: 92,
    english: "Would you like some help?",
    chinese: "你需要幫忙嗎？",
    videoId: "HqYNifbUzzY",
    startTime: 166,
    endTime: 173,
    difficulty: 'medium',
    chineseGuide: "主動提供幫助！Would you like 是「你想要嗎」，這是很有禮貌的問法喔！"
  },
  {
    id: 93,
    english: "Don't worry, I've got you.",
    chinese: "別擔心，我扶著你。",
    videoId: "HqYNifbUzzY",
    startTime: 179,
    endTime: 185,
    difficulty: 'medium',
    chineseGuide: "扶著小朋友的時候說！I've got you 是「我抓著你」，讓小朋友安心喔！"
  },
  {
    id: 94,
    english: "Never mind the pumpkin. The important thing is that you are okay.",
    chinese: "南瓜沒關係。重要的是你沒事。",
    videoId: "HqYNifbUzzY",
    startTime: 258,
    endTime: 268,
    difficulty: 'hard',
    chineseGuide: "安慰小朋友！Never mind 是「沒關係」，important thing 是「重要的事」。爸媽可以用這句告訴小朋友你最重要！"
  },
  {
    id: 95,
    english: "In future, you really must look where you are going.",
    chinese: "以後你真的要看路。",
    videoId: "HqYNifbUzzY",
    startTime: 260,
    endTime: 268,
    difficulty: 'hard',
    chineseGuide: "提醒小朋友注意安全！In future 是「以後」，look where you are going 是「看路」喔！"
  },

  // --- Pancakes ---
  {
    id: 96,
    english: "Okay, that's enough. Sit at the table while I cook.",
    chinese: "好了，夠了。坐在桌子旁邊，我來煮。",
    videoId: "hpBDNzokIdg",
    startTime: 100,
    endTime: 108,
    difficulty: 'hard',
    chineseGuide: "媽媽下指令！That's enough 是「夠了」，Sit at the table 是「坐在桌子旁」。做飯時可以這樣說喔！"
  },

  // --- Camping ---
  {
    id: 97,
    english: "Come on, children. Into the tent. It's bedtime.",
    chinese: "來吧，孩子們。進帳篷。該睡覺了。",
    videoId: "J2DrjpYPjo4",
    startTime: 189,
    endTime: 198,
    difficulty: 'hard',
    chineseGuide: "叫小朋友睡覺！Come on 是「來吧」，It's bedtime 是「該睡覺了」。爸媽每晚都可以用喔！"
  },
  {
    id: 98,
    english: "Listen to the sounds of nature.",
    chinese: "聽聽大自然的聲音。",
    videoId: "J2DrjpYPjo4",
    startTime: 142,
    endTime: 150,
    difficulty: 'medium',
    chineseGuide: "欣賞大自然！Listen to 是「聽」，nature 是大自然。帶小朋友出去玩的時候可以說喔！"
  },

  // --- Beach ---
  {
    id: 99,
    english: "Before you start playing, you need some sun cream on.",
    chinese: "在你開始玩之前，要擦防曬乳。",
    videoId: "cu6xvXv-YTU",
    startTime: 43,
    endTime: 52,
    difficulty: 'hard',
    chineseGuide: "去海邊要擦防曬！Before you 是「在你...之前」，sun cream 是防曬乳喔！"
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


