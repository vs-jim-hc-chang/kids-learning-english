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
    startTime: 2.5,
    endTime: 6.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 要介紹她的弟弟喬治，她說「這是我的弟弟喬治」，little brother 就是小弟弟的意思喔！"
  },
  {
    id: 3,
    english: "This is Mummy Pig.",
    chinese: "這是豬媽咪。",
    videoId: "z9wHUokAyvI",
    startTime: 5.5,
    endTime: 8.8,
    difficulty: 'easy',
    chineseGuide: "現在 Peppa 要介紹豬媽咪！Mummy 就是媽咪的意思，聽聽看！"
  },
  {
    id: 4,
    english: "This is Daddy Pig.",
    chinese: "這是豬爸爸。",
    videoId: "z9wHUokAyvI",
    startTime: 7.5,
    endTime: 11.8,
    difficulty: 'easy',
    chineseGuide: "接下來是豬爸爸登場！Daddy 就是爸爸的意思喔，跟著說說看！"
  },
  {
    id: 5,
    english: "Peppa!",
    chinese: "佩佩！",
    videoId: "z9wHUokAyvI",
    startTime: 10.5,
    endTime: 12.8,
    difficulty: 'easy',
    chineseGuide: "大家一起叫 Peppa 的名字！這是一個很簡單的單字，跟著大聲說！"
  },
  {
    id: 6,
    english: "Muddy Puddles!",
    chinese: "泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 11.5,
    endTime: 15.8,
    difficulty: 'easy',
    chineseGuide: "這集的主題是泥巴水坑！Muddy 是泥巴的意思，puddles 是水坑，聽聽看怎麼說！"
  },
  {
    id: 7,
    english: "It is raining today.",
    chinese: "今天下雨了。",
    videoId: "z9wHUokAyvI",
    startTime: 17.5,
    endTime: 21.8,
    difficulty: 'easy',
    chineseGuide: "哇，外面下雨了耶！Peppa 說「今天在下雨」，raining 就是下雨的意思，聽聽看！"
  },
  {
    id: 8,
    english: "So Peppa and George cannot play outside.",
    chinese: "所以佩佩和喬治不能在外面玩。",
    videoId: "z9wHUokAyvI",
    startTime: 20.5,
    endTime: 25.8,
    difficulty: 'medium',
    chineseGuide: "下雨天不能出去玩，好可惜！cannot 是「不能」的意思，outside 是外面，聽聽看這句怎麼說！"
  },
  {
    id: 9,
    english: "Daddy, it's stopped raining!",
    chinese: "爸爸，雨停了！",
    videoId: "z9wHUokAyvI",
    startTime: 34.5,
    endTime: 38.8,
    difficulty: 'easy',
    chineseGuide: "耶！雨停了！Peppa 好開心地告訴爸爸，stopped raining 就是「雨停了」的意思喔！"
  },
  {
    id: 10,
    english: "Can we go out to play?",
    chinese: "我們可以出去玩嗎？",
    videoId: "z9wHUokAyvI",
    startTime: 37.5,
    endTime: 41.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 想出去玩，用 Can we 來問「我們可以嗎」，go out 是出去的意思，牧誠、奕荷一起問問看！"
  },
  {
    id: 11,
    english: "Yes, run along you two.",
    chinese: "好的，你們兩個去吧。",
    videoId: "z9wHUokAyvI",
    startTime: 41.5,
    endTime: 45.8,
    difficulty: 'medium',
    chineseGuide: "豬爸爸說「好的，你們兩個去吧」！run along 是「去吧、跑去玩」的意思，聽聽看！"
  },
  {
    id: 12,
    english: "Peppa loves jumping in muddy puddles!",
    chinese: "佩佩喜歡跳泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 49.5,
    endTime: 54.8,
    difficulty: 'medium',
    chineseGuide: "Peppa 最喜歡做什麼呢？loves 是「很愛」，jumping 是跳，她超愛跳水坑！聽聽看！"
  },
  {
    id: 13,
    english: "I love muddy puddles!",
    chinese: "我喜歡泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 54.5,
    endTime: 58.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 最喜歡跳泥巴水坑了！她開心地說「我愛泥巴水坑」，love 就是愛的意思喔！"
  },
  {
    id: 14,
    english: "Peppa, if you jump in muddy puddles, you must wear your boots.",
    chinese: "佩佩，如果你要跳泥巴水坑，必須穿靴子。",
    videoId: "z9wHUokAyvI",
    startTime: 59.5,
    endTime: 66.8,
    difficulty: 'hard',
    chineseGuide: "豬媽咪提醒 Peppa，must 是「必須」，boots 是靴子。跳水坑要穿靴子才不會弄濕腳喔！這句比較長，慢慢聽！"
  },
  {
    id: 15,
    english: "Sorry, Mummy.",
    chinese: "對不起，媽咪。",
    videoId: "z9wHUokAyvI",
    startTime: 66.5,
    endTime: 69.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 說對不起！Sorry 是道歉的時候說的話，當我們做錯事也要說 Sorry 喔！"
  },
  {
    id: 16,
    english: "George, let's find some more puddles!",
    chinese: "喬治，我們去找更多水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 79.5,
    endTime: 84.8,
    difficulty: 'medium',
    chineseGuide: "Peppa 想找更多水坑！Let's 是「我們一起」的意思，find 是找，more 是更多喔！"
  },
  {
    id: 17,
    english: "Look, George!",
    chinese: "看，喬治！",
    videoId: "z9wHUokAyvI",
    startTime: 89.5,
    endTime: 92.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 發現什麼了！Look 就是「看」的意思，想要別人看的時候就說 Look！"
  },
  {
    id: 18,
    english: "There's a really big puddle!",
    chinese: "那裡有一個超大的水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 91.5,
    endTime: 96.8,
    difficulty: 'medium',
    chineseGuide: "哇！好大的水坑！really big 是「真的很大」，There's 是「那裡有」的意思喔！"
  },
  {
    id: 19,
    english: "Dinosaur! Grr!",
    chinese: "恐龍！吼！",
    videoId: "z9wHUokAyvI",
    startTime: 99.5,
    endTime: 103.8,
    difficulty: 'easy',
    chineseGuide: "喬治最愛恐龍了！Dinosaur 就是恐龍，Grr 是恐龍的叫聲，一起學恐龍吼吼叫！"
  },
  {
    id: 20,
    english: "Everyone loves jumping in muddy puddles!",
    chinese: "大家都喜歡跳泥巴水坑！",
    videoId: "z9wHUokAyvI",
    startTime: 259.5,
    endTime: 265.8,
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
  {
    id: 32,
    english: "Let's play hide and seek!",
    chinese: "我們來玩捉迷藏！",
    videoId: "z0JlpI0KfVU",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "來玩捉迷藏囉！Peppa 說「我們來玩捉迷藏吧」，hide and seek 就是捉迷藏喔！"
  },
  {
    id: 33,
    english: "One, two, three, four, five!",
    chinese: "一、二、三、四、五！",
    videoId: "z0JlpI0KfVU",
    startTime: 35.5,
    endTime: 42.8,
    difficulty: 'easy',
    chineseGuide: "來數數字囉！one 是一，two 是二，three 是三，four 是四，five 是五！牧誠、奕荷跟著數！"
  },
  {
    id: 34,
    english: "Ready or not, here I come!",
    chinese: "準備好了沒，我來了！",
    videoId: "z0JlpI0KfVU",
    startTime: 44.5,
    endTime: 49.8,
    difficulty: 'medium',
    chineseGuide: "數完了要去找人囉！Ready or not 是「準備好了沒」，here I come 是「我來了」！"
  },
  {
    id: 35,
    english: "Found you!",
    chinese: "找到你了！",
    videoId: "z0JlpI0KfVU",
    startTime: 65.5,
    endTime: 69.8,
    difficulty: 'easy',
    chineseGuide: "找到了！Found 是「找到」的意思，玩捉迷藏找到人就大喊 Found you！"
  },
  {
    id: 36,
    english: "Where is George hiding?",
    chinese: "喬治躲在哪裡？",
    videoId: "z0JlpI0KfVU",
    startTime: 99.5,
    endTime: 104.8,
    difficulty: 'easy',
    chineseGuide: "喬治躲起來了！hiding 是「躲藏」的意思，Where is 是「在哪裡」，你猜他躲在哪？"
  },

  // === The Playgroup (幼兒園) ===
  // 影片連結: https://www.youtube.com/watch?v=4cKnoK2KYPc
  {
    id: 37,
    english: "Today is George's first day at playgroup.",
    chinese: "今天是喬治第一天上幼兒園。",
    videoId: "4cKnoK2KYPc",
    startTime: 14.5,
    endTime: 20.8,
    difficulty: 'medium',
    chineseGuide: "喬治今天第一次去上學！first day 是「第一天」，playgroup 是幼兒園，好興奮喔！"
  },
  {
    id: 38,
    english: "Good morning, everyone!",
    chinese: "大家早安！",
    videoId: "4cKnoK2KYPc",
    startTime: 35.5,
    endTime: 40.8,
    difficulty: 'easy',
    chineseGuide: "早安！Peppa 跟大家打招呼說「大家早安」，Good morning 是早上見面時說的話喔！"
  },
  {
    id: 39,
    english: "Today we will paint pictures.",
    chinese: "今天我們要畫畫。",
    videoId: "4cKnoK2KYPc",
    startTime: 55.5,
    endTime: 60.8,
    difficulty: 'easy',
    chineseGuide: "今天要畫畫！paint 是「畫」，pictures 是「圖畫」，你喜歡畫畫嗎？"
  },
  {
    id: 40,
    english: "What are you painting, Peppa?",
    chinese: "佩佩，你在畫什麼？",
    videoId: "4cKnoK2KYPc",
    startTime: 95.5,
    endTime: 100.8,
    difficulty: 'easy',
    chineseGuide: "老師問 Peppa 在畫什麼！What are you 是「你在」，painting 是正在畫，聽聽看！"
  },
  {
    id: 41,
    english: "I'm painting a flower.",
    chinese: "我在畫一朵花。",
    videoId: "4cKnoK2KYPc",
    startTime: 100.5,
    endTime: 105.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 在畫一朵花！flower 是花的意思，I'm painting 是「我正在畫」喔！"
  },

  // === Bicycles (腳踏車) ===
  // 影片連結: https://www.youtube.com/watch?v=HqYNifbUzzY
  {
    id: 42,
    english: "Peppa has a bicycle.",
    chinese: "佩佩有一輛腳踏車。",
    videoId: "HqYNifbUzzY",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 有一輛腳踏車！bicycle 是腳踏車，has 是「有」的意思喔！"
  },
  {
    id: 43,
    english: "George has a tricycle.",
    chinese: "喬治有一輛三輪車。",
    videoId: "HqYNifbUzzY",
    startTime: 24.5,
    endTime: 29.8,
    difficulty: 'easy',
    chineseGuide: "喬治騎三輪車！tricycle 是三輪車，tri 是三的意思，因為有三個輪子喔！"
  },
  {
    id: 44,
    english: "Watch me! I can go really fast!",
    chinese: "看我！我可以騎很快！",
    videoId: "HqYNifbUzzY",
    startTime: 55.5,
    endTime: 61.8,
    difficulty: 'medium',
    chineseGuide: "Peppa 要表演給大家看！Watch me 是「看我」，really fast 是「真的很快」喔！"
  },
  {
    id: 45,
    english: "Be careful, Peppa!",
    chinese: "佩佩，小心！",
    videoId: "HqYNifbUzzY",
    startTime: 75.5,
    endTime: 79.8,
    difficulty: 'easy',
    chineseGuide: "騎太快要小心！Be careful 是「小心」的意思，爸爸媽媽也常這樣提醒我們喔！"
  },

  // === Pancakes (鬆餅) ===
  // 影片連結: https://www.youtube.com/watch?v=hpBDNzokIdg
  {
    id: 46,
    english: "Daddy Pig is making pancakes.",
    chinese: "豬爸爸在做鬆餅。",
    videoId: "hpBDNzokIdg",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "豬爸爸在做鬆餅！making 是「製作」，pancakes 是好吃的鬆餅，你吃過嗎？"
  },
  {
    id: 47,
    english: "I love pancakes!",
    chinese: "我愛鬆餅！",
    videoId: "hpBDNzokIdg",
    startTime: 29.5,
    endTime: 33.8,
    difficulty: 'easy',
    chineseGuide: "哇，早餐有鬆餅耶！Peppa 開心地說「我愛鬆餅」，pancakes 就是好吃的鬆餅喔！"
  },
  {
    id: 48,
    english: "Can you flip it, Daddy?",
    chinese: "爸爸，你可以把它翻面嗎？",
    videoId: "hpBDNzokIdg",
    startTime: 85.5,
    endTime: 90.8,
    difficulty: 'medium',
    chineseGuide: "做鬆餅要翻面！flip 是「翻」的意思，Can you 是「你可以嗎」，聽聽看！"
  },
  {
    id: 49,
    english: "Yummy yummy!",
    chinese: "好吃好吃！",
    videoId: "hpBDNzokIdg",
    startTime: 155.5,
    endTime: 159.8,
    difficulty: 'easy',
    chineseGuide: "好吃！Yummy 就是「好吃」的意思，吃到喜歡的東西就說 Yummy！"
  },

  // === Camping (露營) ===
  // 影片連結: https://www.youtube.com/watch?v=J2DrjpYPjo4
  {
    id: 50,
    english: "We're going camping!",
    chinese: "我們要去露營！",
    videoId: "J2DrjpYPjo4",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "要去露營囉！camping 是露營，We're going 是「我們要去」，好興奮喔！"
  },
  {
    id: 51,
    english: "This is our tent.",
    chinese: "這是我們的帳篷。",
    videoId: "J2DrjpYPjo4",
    startTime: 65.5,
    endTime: 70.8,
    difficulty: 'easy',
    chineseGuide: "露營要住帳篷！tent 是帳篷，our 是「我們的」意思，聽聽看怎麼說！"
  },
  {
    id: 52,
    english: "Can we have a campfire?",
    chinese: "我們可以生營火嗎？",
    videoId: "J2DrjpYPjo4",
    startTime: 115.5,
    endTime: 120.8,
    difficulty: 'medium',
    chineseGuide: "露營可以生營火！campfire 是營火，Can we have 是「我們可以有嗎」，聽聽看！"
  },
  {
    id: 53,
    english: "Look at all the stars!",
    chinese: "看那些星星！",
    videoId: "J2DrjpYPjo4",
    startTime: 185.5,
    endTime: 190.8,
    difficulty: 'easy',
    chineseGuide: "哇，好多星星！stars 是星星，Look at 是「看」的意思，牧誠、奕荷，你們看過滿天星星嗎？"
  },

  // === At The Beach (在海灘) ===
  // 影片連結: https://www.youtube.com/watch?v=cu6xvXv-YTU
  {
    id: 54,
    english: "We're at the beach!",
    chinese: "我們在海灘！",
    videoId: "cu6xvXv-YTU",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "耶！到海邊玩囉！Peppa 興奮地說「我們在海灘」，beach 就是海邊的意思！"
  },
  {
    id: 55,
    english: "Let's build a sandcastle!",
    chinese: "我們來蓋沙堡！",
    videoId: "cu6xvXv-YTU",
    startTime: 45.5,
    endTime: 50.8,
    difficulty: 'easy',
    chineseGuide: "來蓋沙堡！sandcastle 是沙堡，sand 是沙，castle 是城堡，牧誠、奕荷喜歡玩沙嗎？"
  },
  {
    id: 56,
    english: "The water is very cold!",
    chinese: "水好冷！",
    videoId: "cu6xvXv-YTU",
    startTime: 95.5,
    endTime: 100.8,
    difficulty: 'easy',
    chineseGuide: "海水好冷！cold 是「冷」，very 是「很」，The water 是水，聽聽看！"
  },
  {
    id: 57,
    english: "I found a shell!",
    chinese: "我找到一個貝殼！",
    videoId: "cu6xvXv-YTU",
    startTime: 145.5,
    endTime: 150.8,
    difficulty: 'easy',
    chineseGuide: "找到貝殼了！shell 是貝殼，found 是「找到」的意思，海邊有好多貝殼喔！"
  },

  // === Shopping (購物) ===
  // 影片連結: https://www.youtube.com/watch?v=EL6rvG9qVAc
  {
    id: 58,
    english: "We're going to the supermarket.",
    chinese: "我們要去超市。",
    videoId: "EL6rvG9qVAc",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'medium',
    chineseGuide: "要去超市買東西！supermarket 是超市，牧誠、奕荷有跟爸爸媽媽去過超市嗎？"
  },
  {
    id: 59,
    english: "We need some fruit and vegetables.",
    chinese: "我們需要一些水果和蔬菜。",
    videoId: "EL6rvG9qVAc",
    startTime: 35.5,
    endTime: 41.8,
    difficulty: 'medium',
    chineseGuide: "要買水果和蔬菜！fruit 是水果，vegetables 是蔬菜，要多吃蔬菜水果才會健康喔！"
  },
  {
    id: 60,
    english: "Can I have some chocolate?",
    chinese: "我可以吃巧克力嗎？",
    videoId: "EL6rvG9qVAc",
    startTime: 95.5,
    endTime: 100.8,
    difficulty: 'medium',
    chineseGuide: "想吃巧克力！chocolate 是巧克力，Can I have 是「我可以有嗎」，牧誠、奕荷喜歡吃巧克力嗎？"
  },

  // === Swimming (游泳) ===
  // 影片連結: https://www.youtube.com/watch?v=0zrqVJg7O1g
  {
    id: 61,
    english: "We're going swimming!",
    chinese: "我們要去游泳！",
    videoId: "0zrqVJg7O1g",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "耶！要去游泳囉！swimming 是游泳，We're going 是「我們要去」，牧誠、奕荷喜歡游泳嗎？"
  },
  {
    id: 62,
    english: "I'm a bit scared.",
    chinese: "我有點害怕。",
    videoId: "0zrqVJg7O1g",
    startTime: 45.5,
    endTime: 50.8,
    difficulty: 'easy',
    chineseGuide: "喬治有點害怕！scared 是「害怕」，a bit 是「一點點」，沒關係，慢慢來就好喔！"
  },
  {
    id: 63,
    english: "Don't worry, George.",
    chinese: "別擔心，喬治。",
    videoId: "0zrqVJg7O1g",
    startTime: 55.5,
    endTime: 60.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 安慰喬治！Don't worry 是「不要擔心」，當朋友害怕時可以這樣說喔！"
  },
  {
    id: 64,
    english: "Splish, splash, splosh!",
    chinese: "噗通噗通！",
    videoId: "0zrqVJg7O1g",
    startTime: 125.5,
    endTime: 130.8,
    difficulty: 'easy',
    chineseGuide: "玩水的聲音！這是水花的聲音，玩水的時候會發出這種聲音，一起說說看！"
  },

  // === Cleaning the Car (洗車) ===
  // 影片連結: https://www.youtube.com/watch?v=6oTlZnpYRgQ
  {
    id: 65,
    english: "The car is very dirty.",
    chinese: "車子好髒。",
    videoId: "6oTlZnpYRgQ",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "車子好髒喔！dirty 是「髒」的意思，very 是「很」，所以要洗車囉！"
  },
  {
    id: 66,
    english: "Let's clean the car!",
    chinese: "我們來洗車！",
    videoId: "6oTlZnpYRgQ",
    startTime: 25.5,
    endTime: 30.8,
    difficulty: 'easy',
    chineseGuide: "來洗車囉！clean 是「清潔、洗」的意思，Let's 是「我們一起」喔！"
  },
  {
    id: 67,
    english: "I like cleaning the car.",
    chinese: "我喜歡洗車。",
    videoId: "6oTlZnpYRgQ",
    startTime: 85.5,
    endTime: 90.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 喜歡幫忙洗車！I like 是「我喜歡」，牧誠、奕荷有幫忙洗過車嗎？"
  },

  // === The Sleepy Princess (睡美人) ===
  // 影片連結: https://www.youtube.com/watch?v=wvh8tIXOcCo
  {
    id: 68,
    english: "Once upon a time...",
    chinese: "很久很久以前...",
    videoId: "wvh8tIXOcCo",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "講故事的開頭！Once upon a time 是「很久很久以前」，故事都是這樣開始的喔！"
  },
  {
    id: 69,
    english: "There was a beautiful princess.",
    chinese: "有一位美麗的公主。",
    videoId: "wvh8tIXOcCo",
    startTime: 25.5,
    endTime: 31.8,
    difficulty: 'medium',
    chineseGuide: "故事裡有公主！princess 是公主，beautiful 是美麗的，There was 是「有一個」喔！"
  },
  {
    id: 70,
    english: "The prince woke up the princess.",
    chinese: "王子把公主叫醒了。",
    videoId: "wvh8tIXOcCo",
    startTime: 155.5,
    endTime: 161.8,
    difficulty: 'medium',
    chineseGuide: "王子來救公主了！prince 是王子，woke up 是「叫醒」的意思！"
  },
  {
    id: 71,
    english: "And they lived happily ever after.",
    chinese: "然後他們過著幸福快樂的日子。",
    videoId: "wvh8tIXOcCo",
    startTime: 185.5,
    endTime: 192.8,
    difficulty: 'hard',
    chineseGuide: "故事的結尾！happily ever after 是「從此幸福快樂」，童話故事都這樣結束的喔！"
  },

  // === The Tooth Fairy (牙仙子) ===
  // 影片連結: https://www.youtube.com/watch?v=kHBzs5wXNtc
  {
    id: 72,
    english: "My tooth is wobbly!",
    chinese: "我的牙齒在搖！",
    videoId: "kHBzs5wXNtc",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 的牙齒在搖！tooth 是牙齒，wobbly 是「搖搖晃晃」的意思，牧誠、奕荷有掉過牙齒嗎？"
  },
  {
    id: 73,
    english: "The tooth fairy will come tonight.",
    chinese: "牙仙子今晚會來。",
    videoId: "kHBzs5wXNtc",
    startTime: 85.5,
    endTime: 91.8,
    difficulty: 'medium',
    chineseGuide: "牙仙子會來喔！tooth fairy 是牙仙子，tonight 是今晚，will come 是「會來」！"
  },
  {
    id: 74,
    english: "Put it under your pillow.",
    chinese: "把它放在枕頭下面。",
    videoId: "kHBzs5wXNtc",
    startTime: 95.5,
    endTime: 100.8,
    difficulty: 'medium',
    chineseGuide: "把牙齒放枕頭下！pillow 是枕頭，under 是「下面」，牙仙子會來換禮物喔！"
  },

  // === Flying a Kite (放風箏) ===
  // 影片連結: https://www.youtube.com/watch?v=hSl7_8VdLyY
  {
    id: 75,
    english: "Let's fly a kite!",
    chinese: "我們來放風箏！",
    videoId: "hSl7_8VdLyY",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "來放風箏囉！kite 是風箏，fly 是「飛」，fly a kite 就是放風箏！"
  },
  {
    id: 76,
    english: "It's very windy today.",
    chinese: "今天風很大。",
    videoId: "hSl7_8VdLyY",
    startTime: 25.5,
    endTime: 30.8,
    difficulty: 'easy',
    chineseGuide: "風好大！windy 是「有風的」，放風箏需要有風才行喔！"
  },
  {
    id: 77,
    english: "The kite is flying high!",
    chinese: "風箏飛得好高！",
    videoId: "hSl7_8VdLyY",
    startTime: 95.5,
    endTime: 100.8,
    difficulty: 'easy',
    chineseGuide: "風箏飛高高！high 是「高」的意思，flying 是「正在飛」，好厲害喔！"
  },
  {
    id: 78,
    english: "Oh no, it's stuck in the tree!",
    chinese: "糟糕，卡在樹上了！",
    videoId: "hSl7_8VdLyY",
    startTime: 125.5,
    endTime: 131.8,
    difficulty: 'medium',
    chineseGuide: "風箏卡住了！stuck 是「卡住」，tree 是樹，Oh no 是「糟糕」的意思！"
  },

  // === Snow (下雪) ===
  // 影片連結: https://www.youtube.com/watch?v=LYD3GK0YKxE
  {
    id: 79,
    english: "It's snowing!",
    chinese: "下雪了！",
    videoId: "LYD3GK0YKxE",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "哇，下雪了！snowing 是「正在下雪」，牧誠、奕荷有看過雪嗎？"
  },
  {
    id: 80,
    english: "Let's make a snowman!",
    chinese: "我們來堆雪人！",
    videoId: "LYD3GK0YKxE",
    startTime: 45.5,
    endTime: 50.8,
    difficulty: 'easy',
    chineseGuide: "來堆雪人！snowman 是雪人，snow 是雪，man 是人，聽聽看！"
  },
  {
    id: 81,
    english: "I'm making a snowball.",
    chinese: "我在做雪球。",
    videoId: "LYD3GK0YKxE",
    startTime: 65.5,
    endTime: 70.8,
    difficulty: 'easy',
    chineseGuide: "做雪球！snowball 是雪球，I'm making 是「我正在做」喔！"
  },
  {
    id: 82,
    english: "Let's have a snowball fight!",
    chinese: "我們來打雪仗！",
    videoId: "LYD3GK0YKxE",
    startTime: 95.5,
    endTime: 101.8,
    difficulty: 'medium',
    chineseGuide: "打雪仗囉！snowball fight 是打雪仗，fight 是戰鬥的意思，好好玩喔！"
  },

  // === George's Birthday (喬治的生日) ===
  // 影片連結: https://www.youtube.com/watch?v=qH2TPP0a3Pg
  {
    id: 83,
    english: "Happy Birthday, George!",
    chinese: "生日快樂，喬治！",
    videoId: "qH2TPP0a3Pg",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "喬治生日快樂！Happy Birthday 就是「生日快樂」，別人生日要這樣說喔！"
  },
  {
    id: 84,
    english: "What a lovely cake!",
    chinese: "好漂亮的蛋糕！",
    videoId: "qH2TPP0a3Pg",
    startTime: 65.5,
    endTime: 70.8,
    difficulty: 'easy',
    chineseGuide: "好漂亮的蛋糕！lovely 是「可愛的、漂亮的」，cake 是蛋糕！"
  },
  {
    id: 85,
    english: "Make a wish!",
    chinese: "許個願！",
    videoId: "qH2TPP0a3Pg",
    startTime: 95.5,
    endTime: 99.8,
    difficulty: 'easy',
    chineseGuide: "許願囉！Make a wish 是「許願」，吹蠟燭前要先許願喔！"
  },
  {
    id: 86,
    english: "Blow out the candles!",
    chinese: "吹蠟燭！",
    videoId: "qH2TPP0a3Pg",
    startTime: 100.5,
    endTime: 105.8,
    difficulty: 'easy',
    chineseGuide: "吹蠟燭囉！blow out 是「吹熄」，candles 是蠟燭，呼～！"
  },

  // === The Balloon Ride (熱氣球) ===
  // 影片連結: https://www.youtube.com/watch?v=gVVz9NpcQoY
  {
    id: 87,
    english: "Look at the balloon!",
    chinese: "看那個氣球！",
    videoId: "gVVz9NpcQoY",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "好大的氣球！balloon 是氣球，Look at 是「看」的意思！"
  },
  {
    id: 88,
    english: "It's a hot air balloon.",
    chinese: "那是熱氣球。",
    videoId: "gVVz9NpcQoY",
    startTime: 25.5,
    endTime: 30.8,
    difficulty: 'medium',
    chineseGuide: "是熱氣球耶！hot air balloon 是熱氣球，hot 是熱，air 是空氣！"
  },
  {
    id: 89,
    english: "We're going up!",
    chinese: "我們在往上升！",
    videoId: "gVVz9NpcQoY",
    startTime: 85.5,
    endTime: 90.8,
    difficulty: 'easy',
    chineseGuide: "要飛上去了！going up 是「往上升」，好刺激喔！"
  },
  {
    id: 90,
    english: "I can see our house!",
    chinese: "我看得到我們的房子！",
    videoId: "gVVz9NpcQoY",
    startTime: 125.5,
    endTime: 131.8,
    difficulty: 'medium',
    chineseGuide: "從天空看得到房子！I can see 是「我看得到」，house 是房子！"
  },

  // === Grandpa Pig's Boat (爺爺的船) ===
  // 影片連結: https://www.youtube.com/watch?v=5oFjR71ynqM
  {
    id: 91,
    english: "Grandpa Pig has a boat.",
    chinese: "豬爺爺有一艘船。",
    videoId: "5oFjR71ynqM",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "豬爺爺有一艘船！boat 是船，Grandpa 是爺爺，has 是「有」喔！"
  },
  {
    id: 92,
    english: "Let's go sailing!",
    chinese: "我們去航行吧！",
    videoId: "5oFjR71ynqM",
    startTime: 35.5,
    endTime: 40.8,
    difficulty: 'easy',
    chineseGuide: "要去坐船囉！sailing 是航行，Let's go 是「我們去」的意思！"
  },
  {
    id: 93,
    english: "I'm the captain!",
    chinese: "我是船長！",
    videoId: "5oFjR71ynqM",
    startTime: 65.5,
    endTime: 70.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 要當船長！captain 是船長，開船的人就是 captain 喔！"
  },

  // === Sports Day (運動會) ===
  // 影片連結: https://www.youtube.com/watch?v=6ovfyaHlGLs
  {
    id: 94,
    english: "Today is sports day!",
    chinese: "今天是運動會！",
    videoId: "6ovfyaHlGLs",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "今天是運動會！sports day 是運動會，牧誠、奕荷學校有運動會嗎？"
  },
  {
    id: 95,
    english: "Ready, set, go!",
    chinese: "預備，開始！",
    videoId: "6ovfyaHlGLs",
    startTime: 55.5,
    endTime: 60.8,
    difficulty: 'easy',
    chineseGuide: "要開始比賽了！Ready 是準備好，set 是預備，go 是開始！"
  },
  {
    id: 96,
    english: "Run as fast as you can!",
    chinese: "盡全力跑！",
    videoId: "6ovfyaHlGLs",
    startTime: 75.5,
    endTime: 81.8,
    difficulty: 'medium',
    chineseGuide: "要用力跑！as fast as you can 是「盡你所能地快」，加油！"
  },
  {
    id: 97,
    english: "I won!",
    chinese: "我贏了！",
    videoId: "6ovfyaHlGLs",
    startTime: 125.5,
    endTime: 129.8,
    difficulty: 'easy',
    chineseGuide: "贏了！won 是「贏」的意思，I won 就是「我贏了」，好棒喔！"
  },

  // === Pizza (披薩) ===
  // 影片連結: https://www.youtube.com/watch?v=9g1SQxS0hD4
  {
    id: 98,
    english: "We're making pizza!",
    chinese: "我們在做披薩！",
    videoId: "9g1SQxS0hD4",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "來做披薩囉！pizza 是披薩，We're making 是「我們正在做」！"
  },
  {
    id: 99,
    english: "I want cheese on my pizza.",
    chinese: "我要在我的披薩上加起司。",
    videoId: "9g1SQxS0hD4",
    startTime: 55.5,
    endTime: 61.8,
    difficulty: 'medium',
    chineseGuide: "要加起司！cheese 是起司，I want 是「我要」，牧誠、奕荷喜歡吃披薩嗎？"
  },
  {
    id: 100,
    english: "The pizza is ready!",
    chinese: "披薩好了！",
    videoId: "9g1SQxS0hD4",
    startTime: 125.5,
    endTime: 130.8,
    difficulty: 'easy',
    chineseGuide: "披薩做好囉！ready 是「準備好了」的意思，可以吃了！"
  },

  // === The Rainbow (彩虹) ===
  // 影片連結: https://www.youtube.com/watch?v=RNHyNQzOaug
  {
    id: 101,
    english: "Look, a rainbow!",
    chinese: "看，彩虹！",
    videoId: "RNHyNQzOaug",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "哇，有彩虹！rainbow 是彩虹，Look 是「看」，好漂亮喔！"
  },
  {
    id: 102,
    english: "It has seven colours.",
    chinese: "它有七種顏色。",
    videoId: "RNHyNQzOaug",
    startTime: 35.5,
    endTime: 40.8,
    difficulty: 'easy',
    chineseGuide: "彩虹有七種顏色！seven 是七，colours 是顏色，你知道是哪七種嗎？"
  },
  {
    id: 103,
    english: "Red, orange, yellow, green, blue...",
    chinese: "紅、橙、黃、綠、藍...",
    videoId: "RNHyNQzOaug",
    startTime: 45.5,
    endTime: 52.8,
    difficulty: 'medium',
    chineseGuide: "來學顏色！red 紅色，orange 橙色，yellow 黃色，green 綠色，blue 藍色，跟著說！"
  },

  // === Polly Parrot (鸚鵡波莉) ===
  // 影片連結: https://www.youtube.com/watch?v=j5OG-hKSlbY
  {
    id: 104,
    english: "This is Polly Parrot.",
    chinese: "這是鸚鵡波莉。",
    videoId: "j5OG-hKSlbY",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'easy',
    chineseGuide: "這是鸚鵡波莉！Parrot 是鸚鵡，鸚鵡會說話喔！"
  },
  {
    id: 105,
    english: "Polly can talk!",
    chinese: "波莉會說話！",
    videoId: "j5OG-hKSlbY",
    startTime: 35.5,
    endTime: 40.8,
    difficulty: 'easy',
    chineseGuide: "鸚鵡會說話！can talk 是「會說話」，好神奇喔！"
  },
  {
    id: 106,
    english: "Hello, Polly!",
    chinese: "哈囉，波莉！",
    videoId: "j5OG-hKSlbY",
    startTime: 55.5,
    endTime: 60.8,
    difficulty: 'easy',
    chineseGuide: "跟波莉打招呼！Hello 是「哈囉」，鸚鵡會學你說話喔！"
  },

  // === Daddy Gets Fit (爸爸健身) ===
  // 影片連結: https://www.youtube.com/watch?v=n-oLhJyV8vE
  {
    id: 107,
    english: "Daddy Pig needs exercise.",
    chinese: "豬爸爸需要運動。",
    videoId: "n-oLhJyV8vE",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'medium',
    chineseGuide: "豬爸爸要運動！exercise 是運動，needs 是「需要」的意思喔！"
  },
  {
    id: 108,
    english: "Touch your toes!",
    chinese: "摸你的腳趾！",
    videoId: "n-oLhJyV8vE",
    startTime: 55.5,
    endTime: 60.8,
    difficulty: 'easy',
    chineseGuide: "做運動！Touch 是「摸」，toes 是腳趾，牧誠、奕荷可以摸到腳趾嗎？"
  },
  {
    id: 109,
    english: "Jump up and down!",
    chinese: "跳上跳下！",
    videoId: "n-oLhJyV8vE",
    startTime: 85.5,
    endTime: 90.8,
    difficulty: 'easy',
    chineseGuide: "跳跳跳！Jump 是跳，up 是上，down 是下，一起跳跳看！"
  },
  {
    id: 110,
    english: "I'm very tired.",
    chinese: "我好累。",
    videoId: "n-oLhJyV8vE",
    startTime: 155.5,
    endTime: 160.8,
    difficulty: 'easy',
    chineseGuide: "運動完好累！tired 是「累」的意思，very 是「很」，運動很累但很健康喔！"
  }
];
