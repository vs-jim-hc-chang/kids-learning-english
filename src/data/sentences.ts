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
  {
    id: 21,
    english: "George's favourite toy is Mr Dinosaur.",
    chinese: "喬治最喜歡的玩具是恐龍先生。",
    videoId: "8t1WdjVZbiE",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'medium',
    chineseGuide: "喬治有一個最愛的玩具，就是恐龍先生！favourite 就是「最喜歡的」意思，聽聽看！"
  },
  {
    id: 22,
    english: "Where's Mr Dinosaur?",
    chinese: "恐龍先生在哪裡？",
    videoId: "8t1WdjVZbiE",
    startTime: 55.5,
    endTime: 59.8,
    difficulty: 'easy',
    chineseGuide: "喬治找不到恐龍先生了！Where's 是「在哪裡」的意思，想問東西在哪就用這個字喔！"
  },
  {
    id: 23,
    english: "George, don't cry.",
    chinese: "喬治，不要哭。",
    videoId: "8t1WdjVZbiE",
    startTime: 75.5,
    endTime: 79.8,
    difficulty: 'easy',
    chineseGuide: "喬治哭了！Peppa 安慰他說「不要哭」，don't cry 就是不要哭的意思喔！"
  },
  {
    id: 24,
    english: "We'll find Mr Dinosaur.",
    chinese: "我們會找到恐龍先生的。",
    videoId: "8t1WdjVZbiE",
    startTime: 79.5,
    endTime: 84.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 說「我們會找到的」！We'll 是「我們會」，find 是找，好溫暖的話喔！"
  },
  {
    id: 25,
    english: "Maybe the dinosaur is in the garden.",
    chinese: "也許恐龍在花園裡。",
    videoId: "8t1WdjVZbiE",
    startTime: 119.5,
    endTime: 124.8,
    difficulty: 'medium',
    chineseGuide: "Maybe 是「也許」的意思，garden 是花園。大家在猜恐龍先生在哪裡呢！"
  },
  {
    id: 26,
    english: "There it is! In the tree!",
    chinese: "在那裡！在樹上！",
    videoId: "8t1WdjVZbiE",
    startTime: 185.5,
    endTime: 190.8,
    difficulty: 'easy',
    chineseGuide: "找到了！There it is 是「就在那裡」，tree 是樹。恐龍先生在樹上耶！"
  },

  // === Best Friend (好朋友) ===
  // 影片連結: https://www.youtube.com/watch?v=-qjzaeBNNOs
  {
    id: 27,
    english: "Suzy Sheep is Peppa's best friend.",
    chinese: "蘇西羊是佩佩最好的朋友。",
    videoId: "-qjzaeBNNOs",
    startTime: 14.5,
    endTime: 19.8,
    difficulty: 'medium',
    chineseGuide: "Peppa 有一個最好的朋友叫蘇西！best friend 就是「最好的朋友」，牧誠、奕荷有 best friend 嗎？"
  },
  {
    id: 28,
    english: "Hello, Suzy!",
    chinese: "哈囉，蘇西！",
    videoId: "-qjzaeBNNOs",
    startTime: 29.5,
    endTime: 33.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 跟蘇西打招呼！Hello 是「哈囉」，見到朋友要開心地說 Hello 喔！"
  },
  {
    id: 29,
    english: "Let's play in my bedroom.",
    chinese: "我們去我房間玩吧。",
    videoId: "-qjzaeBNNOs",
    startTime: 45.5,
    endTime: 50.8,
    difficulty: 'easy',
    chineseGuide: "Peppa 邀請蘇西去房間玩！Let's play 是「我們一起玩」，bedroom 是臥室喔！"
  },
  {
    id: 30,
    english: "I'm a doctor!",
    chinese: "我是醫生！",
    videoId: "-qjzaeBNNOs",
    startTime: 85.5,
    endTime: 89.8,
    difficulty: 'easy',
    chineseGuide: "她們在玩扮家家酒！doctor 是醫生，I'm a 是「我是一個」，你想當什麼呢？"
  },
  {
    id: 31,
    english: "And I'm a nurse!",
    chinese: "我是護士！",
    videoId: "-qjzaeBNNOs",
    startTime: 89.5,
    endTime: 93.8,
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
  }
];
