// 歌曲教學數據

export interface SongVerse {
  id: number;
  lyrics: string;           // 英文歌詞
  chinese: string;          // 中文翻譯
  chineseGuide: string;     // 媽媽般的中文引導
  startTime: number;        // 開始秒數
  endTime: number;          // 結束秒數
}

export interface Song {
  id: string;
  title: string;            // 歌曲名稱
  titleChinese: string;     // 中文名稱
  videoId: string;          // YouTube ID
  totalDuration: number;    // 完整歌曲長度（秒）
  thumbnailTime: number;    // 縮圖時間點
  verses: SongVerse[];      // 段落列表
}

export const songs: Song[] = [
  {
    id: 'excavator',
    title: 'The Excavator Song',
    titleChinese: '挖土機歌',
    videoId: '2UgOg6PzyFY',
    totalDuration: 85,
    thumbnailTime: 15,
    verses: [
      {
        id: 1,
        lyrics: "Excavator! Hey dirt, see you later! I'm an excavator!",
        chinese: "挖土機！嘿泥土，再見啦！我是挖土機！",
        chineseGuide: "今天我們要學一個很長的英文字喔！這個字是 excavator，意思是挖土機。我們來把它拆開：Ex，ca，va，tor。跟我說一次：excavator。很好！再說一次：excavator。太棒了！這首歌裡面，Blippi 會跟泥土說 Hey dirt, see you later。dirt 是泥土，see you later 是再見的意思。最後一句 I'm an excavator，I'm 是我是，所以整句是「我是挖土機」。現在我們來聽 Blippi 怎麼唱，聽的時候注意 excavator 這個字喔！",
        startTime: 9,
        endTime: 20
      },
      {
        id: 2,
        lyrics: "I've got a great big arm and a great big boom",
        chinese: "我有一個大手臂和大吊臂",
        chineseGuide: "這一句我們要學兩個身體部位的單字。第一個是 arm，手臂。摸摸你的手臂，這就是 arm。跟我說：arm。很好！第二個字是 boom，是挖土機的吊臂，就是那個長長可以伸出去的部分。跟我說：boom。很棒！歌詞說 I've got，意思是「我有」。a great big arm，great big 是「好大好大」的意思。所以整句是說：我有一個好大的手臂，還有一個好大的吊臂。現在來聽 Blippi 唱，注意聽 arm 和 boom 這兩個字！",
        startTime: 20,
        endTime: 28
      },
      {
        id: 3,
        lyrics: "If I start digging now, I'll be done real soon",
        chinese: "如果我現在開始挖，很快就會完成",
        chineseGuide: "這一句有一個很重要的動作單字：digging，就是挖土的意思。dig 是挖，加上 ing 變成 digging，正在挖。跟我說：digging。很好！再說一次：digging。太棒了！歌詞說 If I start digging now，If 是如果，start 是開始，now 是現在。所以是「如果我現在開始挖土」。然後 I'll be done real soon，done 是完成，real soon 是很快很快。為什麼挖土機挖這麼快呢？因為它的 arm 好大，還記得 arm 嗎？現在來聽這句怎麼唱！",
        startTime: 24,
        endTime: 32
      },
      {
        id: 4,
        lyrics: "I'm a dirt separator, I'm an excavator!",
        chinese: "我是泥土分離器，我是挖土機！",
        chineseGuide: "這一句有一個新單字：separator。se，pa，ra，tor。separator 是分離器，可以把東西分開的機器。跟我說：separator。很好！你有沒有發現，separator 和 excavator 聽起來很像？都是 tor 結尾。這叫做押韻，唱起來特別好聽。我們來試試看：separator，excavator。很棒！dirt separator 就是泥土分離器，因為挖土機可以把泥土從地上分開，挖到別的地方去。現在來聽 Blippi 唱這句，注意聽押韻的部分！",
        startTime: 28,
        endTime: 36
      },
      {
        id: 5,
        lyrics: "I've got a big old bucket and I scoop all the time",
        chinese: "我有一個大鏟子，一直在挖",
        chineseGuide: "這一句有兩個新單字要學喔！第一個是 bucket，挖土機前面那個大大的鏟斗，像一個大碗。跟我說：bucket。很好！第二個字是 scoop，舀的意思，就像用湯匙舀東西的動作。跟我說：scoop。很棒！還記得 I've got 嗎？是「我有」的意思。a big old bucket，這裡的 old 不是老的意思喔，a big old 是一種說法，表示「好大一個」。all the time 是「一直」的意思。所以整句是：我有一個大鏟斗，一直在舀土。來聽這句怎麼唱！",
        startTime: 36,
        endTime: 44
      },
      {
        id: 6,
        lyrics: "Digging holes in the ground, wonder what I'll find",
        chinese: "在地上挖洞，不知道會找到什麼",
        chineseGuide: "還記得 digging 嗎？是挖土的意思。這一句說 digging holes，holes 是洞，所以是「挖洞」。跟我說：holes。很好！in the ground，ground 是地面，所以 in the ground 是「在地上」。跟我說：ground。很棒！然後 wonder 是一個很有趣的字，意思是「好奇、想知道」。what I'll find 是「我會找到什麼」。挖土機在想：我挖一挖，會找到什麼呢？也許是石頭，也許是寶藏！這就是 wonder 的感覺。來聽這句怎麼唱！",
        startTime: 39,
        endTime: 50
      },
      {
        id: 7,
        lyrics: "I roll on tracks to get to where I need to be",
        chinese: "我用履帶移動到我需要去的地方",
        chineseGuide: "你知道嗎？挖土機沒有輪子喔！它用履帶移動。履帶的英文是 tracks，就是那個像坦克車一樣繞一圈的帶子。跟我說：tracks。很好！roll 是滾動的意思，I roll on tracks 就是「我用履帶滾動」。跟我說：roll。很棒！to get to 是「到達」的意思，where I need to be 是「我需要去的地方」。履帶很厲害喔，可以在泥巴地、沙地上走，都不會滑倒！來聽 Blippi 唱這句，注意聽 tracks 和 roll 這兩個字！",
        startTime: 58,
        endTime: 70
      },
      {
        id: 8,
        lyrics: "I'm an excavator! Excavator!",
        chinese: "我是挖土機！挖土機！",
        chineseGuide: "最後一句啦！還記得我們一開始學的那個長長的字嗎？excavator，挖土機！我們來複習一下今天學的單字：excavator 挖土機，arm 手臂，boom 吊臂，digging 挖土，bucket 鏟斗，scoop 舀，tracks 履帶。你學了好多單字，太厲害了！現在這一句 I'm an excavator 就是「我是挖土機」，要大聲唱出來喔！來聽最後這句，然後跟著一起唱！",
        startTime: 65,
        endTime: 80
      }
    ]
  },
  {
    id: 'garbage_truck',
    title: 'The Garbage Truck Song',
    titleChinese: '垃圾車歌',
    videoId: 'fysFwSfdQzc',
    totalDuration: 180,
    thumbnailTime: 20,
    verses: [
      {
        id: 1,
        lyrics: "Do you like garbage trucks? Yeah, I do too!",
        chinese: "你喜歡垃圾車嗎？我也喜歡！",
        chineseGuide: "這首歌要學 garbage truck，垃圾車。garbage 是垃圾，truck 是卡車，合起來 garbage truck 就是垃圾車。跟我說：garbage truck。很好！再說一次：garbage truck。太棒了！歌詞一開始問 Do you like garbage trucks，Do you like 是「你喜歡嗎」的意思。你喜歡垃圾車嗎？如果喜歡，要回答 Yeah，這是一個很開心的「對」！然後 I do too，I do 是「我喜歡」，too 是「也」，所以是「我也喜歡」。來聽 Blippi 怎麼問這個問題！",
        startTime: 0,
        endTime: 6
      },
      {
        id: 2,
        lyrics: "On the count of three, yell Blippi garbage trucks!",
        chinese: "數到三，大喊 Blippi 垃圾車！",
        chineseGuide: "這一句要學一個新的動作單字：yell，大喊的意思。yell 比 say 說還要大聲很多喔！跟我說：yell。很好！on the count of three，count 是數數，on the count of three 就是「數到三的時候」。所以整句是：數到三的時候，大喊 Blippi garbage truck！還記得 garbage truck 嗎？垃圾車！等一下 Blippi 會數 one, two, three，數到 three 你就要大聲 yell 出來喔！來聽這句怎麼說！",
        startTime: 6,
        endTime: 16
      },
      {
        id: 3,
        lyrics: "One... two... three! Blippi garbage trucks!",
        chinese: "一...二...三！Blippi 垃圾車！",
        chineseGuide: "我們來複習數字！one 是一，two 是二，three 是三。跟我說：one, two, three。很好！再說一次，這次大聲一點：one, two, three。太棒了！數完 three 之後，要大聲喊 Blippi garbage trucks！還記得剛才學的 yell 嗎？大喊！現在就是要 yell 的時候！準備好了嗎？來聽 Blippi 數數，然後跟著一起大聲喊！",
        startTime: 12,
        endTime: 22
      },
      {
        id: 4,
        lyrics: "I'm a garbage truck, picking up trash all day",
        chinese: "我是垃圾車，整天都在收垃圾",
        chineseGuide: "這一句有一個很實用的片語：pick up，撿起來的意思。pick up 加了 ing 變成 picking up，正在撿。跟我說：picking up。很好！trash 是垃圾，跟 garbage 一樣的意思。跟我說：trash。很棒！all day 是「整天」的意思，從早上到晚上。所以 I'm a garbage truck, picking up trash all day 就是「我是垃圾車，整天都在撿垃圾」。垃圾車每天都很忙，把大家的垃圾都收走，讓城市乾乾淨淨！來聽這句怎麼唱！",
        startTime: 28,
        endTime: 40
      },
      {
        id: 5,
        lyrics: "Beep beep beep, get out of my way!",
        chinese: "嗶嗶嗶，讓開讓開！",
        chineseGuide: "這一句有一個很重要的片語：get out of my way，讓開的意思。get out 是出去、離開，my way 是我的路，所以 get out of my way 就是「離開我的路」，也就是「讓開」！跟我說：get out of my way。很好！Beep beep beep 是垃圾車倒車時發出的聲音，在告訴大家：小心，我要倒車了！所以整句是垃圾車在說：嗶嗶嗶，請讓開，我要工作了！來聽這句怎麼唱！",
        startTime: 40,
        endTime: 50
      }
    ]
  },
  {
    id: 'fire_truck',
    title: 'The Fire Truck Song',
    titleChinese: '消防車歌',
    videoId: 'BvOiDVnQo7Y',
    totalDuration: 200,
    thumbnailTime: 15,
    verses: [
      {
        id: 1,
        lyrics: "If you like fire trucks, yell Blippi fire truck!",
        chinese: "如果你喜歡消防車，大喊 Blippi 消防車！",
        chineseGuide: "這首歌要學 fire truck，消防車。fire 是火，像蠟燭上面的火焰。跟我說：fire。很好！truck 是卡車，fire truck 合起來就是消防車，救火的車。跟我說：fire truck。太棒了！歌詞說 If you like fire trucks，If 是「如果」，you like 是「你喜歡」。還記得 yell 嗎？是大喊的意思！如果你喜歡消防車，就要大聲 yell 出來：Blippi fire truck！來聽 Blippi 怎麼唱這句！",
        startTime: 0,
        endTime: 12
      },
      {
        id: 2,
        lyrics: "One... two... three! Blippi fire truck!",
        chinese: "一...二...三！Blippi 消防車！",
        chineseGuide: "又要數數了！還記得數字嗎？one 是一，two 是二，three 是三。跟我數一次：one, two, three。很好！這次要比剛才更大聲喔，因為消防車很勇敢，要去救火！消防員是英雄，消防車也是英雄車！數完 one, two, three 之後，要大聲 yell：Blippi fire truck！還記得 fire truck 嗎？消防車！準備好了嗎？來聽 Blippi 數，然後一起大聲喊！",
        startTime: 8,
        endTime: 18
      },
      {
        id: 3,
        lyrics: "I'm a fire truck, here to save the day",
        chinese: "我是消防車，來拯救大家",
        chineseGuide: "這一句有一個很棒的片語：save the day，拯救大家的意思。save 是拯救、救，the day 在這裡不是白天的意思喔，save the day 是一個片語，表示「解決問題、拯救大家」。跟我說：save the day。很好！here to 是「來這裡要」的意思。所以 I'm a fire truck, here to save the day 就是「我是消防車，我來拯救大家」。當有火災的時候，消防車就會趕快出動，把火撲滅，保護大家！來聽這句怎麼唱！",
        startTime: 25,
        endTime: 38
      },
      {
        id: 4,
        lyrics: "Wee-oo wee-oo, I'm on my way!",
        chinese: "嗚咿嗚咿，我來了！",
        chineseGuide: "這一句有一個很實用的片語：I'm on my way，我在路上、我來了的意思。on my way 是「在我的路上」，表示正在去的途中。跟我說：I'm on my way。很好！再說一次：I'm on my way。太棒了！Wee-oo wee-oo 是消防車的警報聲，叫做 siren，告訴路上的車子：消防車來了，請讓路！所以整句是消防車在說：警報聲，我在路上了，我來救火了！來聽最後這句怎麼唱！",
        startTime: 38,
        endTime: 50
      }
    ]
  }
];

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
