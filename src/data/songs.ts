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
        chineseGuide: "寶貝，我們要來學一首超好聽的歌喔！這首歌是關於挖土機的！你知道挖土機英文怎麼說嗎？叫做 Excavator。Ex-ca-va-tor，有四個音節喔。來，跟媽媽慢慢說一次：Ex、ca、va、tor。Excavator！很棒！接下來 Blippi 會說 Hey dirt，Hey 就是「嘿」，dirt 是泥土。see you later 是「再見」的意思，因為挖土機要把泥土挖走了，所以跟泥土說再見！最後他說 I'm an excavator，I'm 是「我是」，所以整句是「我是挖土機」！好，我們來聽 Blippi 怎麼唱這句！",
        startTime: 9,
        endTime: 20
      },
      {
        id: 2,
        lyrics: "I've got a great big arm and a great big boom",
        chinese: "我有一個大手臂和大吊臂",
        chineseGuide: "這句歌詞在說挖土機的身體部位喔！I've got 是「我有」的意思。a great big arm，great 是「很棒的」，big 是「大的」，arm 是手臂。你的手臂在哪裡？摸摸看！對，這個就是 arm！挖土機的 arm 好大好大喔，比你的手臂大好多倍！然後還有 a great big boom，boom 是吊臂，就是挖土機那個長長的、可以伸出去挖土的部分。great big 說兩次，表示「好大好大」，強調挖土機真的很大隻！來聽聽看 Blippi 怎麼唱！",
        startTime: 20,
        endTime: 28
      },
      {
        id: 3,
        lyrics: "If I start digging now, I'll be done real soon",
        chinese: "如果我現在開始挖，很快就會完成",
        chineseGuide: "這句在說挖土機挖土很快喔！If 是「如果」，I start 是「我開始」，digging 是挖土，now 是現在。所以 If I start digging now 就是「如果我現在開始挖土」。I'll be done 是「我會完成」，real soon 是「很快很快」，real 加強語氣，表示「真的很快」！為什麼挖土機挖那麼快呢？因為它的 arm 好大，bucket 也好大，挖一下就挖好多土！所以整句是說：如果我現在開始挖，很快就會挖完喔！來聽 Blippi 唱這句！",
        startTime: 24,
        endTime: 32
      },
      {
        id: 4,
        lyrics: "I'm a dirt separator, I'm an excavator!",
        chinese: "我是泥土分離器，我是挖土機！",
        chineseGuide: "這句超有趣的！我們一個一個字來看。I'm a dirt separator，dirt 是泥土，separator 是分離器，就是可以把東西分開的機器。為什麼挖土機是泥土分離器呢？因為它可以把泥土從地上挖起來，分開放到卡車上或別的地方！然後 I'm an excavator 我們學過了，就是「我是挖土機」！你有沒有發現？separator 和 excavator 聽起來很像？都是 tor 結尾，這叫做押韻，唱起來特別好聽！se-pa-ra-tor，ex-ca-va-tor，試試看！",
        startTime: 28,
        endTime: 36
      },
      {
        id: 5,
        lyrics: "I've got a big old bucket and I scoop all the time",
        chinese: "我有一個大鏟子，一直在挖",
        chineseGuide: "來學新單字囉！I've got 是「我有」。a big old bucket，big 是大，old 在這裡不是「老」的意思喔，a big old 是一種說法，表示「好大一個」。bucket 是鏟斗，就是挖土機前面那個大大的、像碗一樣可以裝土的東西！然後 I scoop，scoop 是舀的意思，就像你用湯匙舀湯、舀冰淇淋一樣的動作！all the time 是「一直、整天」的意思。所以挖土機說：我有一個好大的鏟斗，一直在舀土！scoop scoop scoop！來聽歌詞怎麼唱！",
        startTime: 36,
        endTime: 44
      },
      {
        id: 6,
        lyrics: "Digging holes in the ground, wonder what I'll find",
        chinese: "在地上挖洞，不知道會找到什麼",
        chineseGuide: "挖土的時候好好玩喔，會挖出好多東西！Digging 是挖，holes 是洞，in the ground 是「在地上」，ground 就是地面。所以 Digging holes in the ground 是「在地上挖洞」。然後 wonder 是「想知道、好奇」的意思，what I'll find 是「我會找到什麼」。挖土機在想：我挖一挖，不知道會挖到什麼呢？maybe 挖到石頭？maybe 挖到蟲蟲？maybe 挖到恐龍骨頭？哇，好期待喔！wonder what I'll find！來聽這句怎麼唱！",
        startTime: 39,
        endTime: 50
      },
      {
        id: 7,
        lyrics: "I roll on tracks to get to where I need to be",
        chinese: "我用履帶移動到我需要去的地方",
        chineseGuide: "寶貝你知道嗎？挖土機跟汽車不一樣喔！汽車有輪子 wheels，但挖土機沒有輪子！它是用履帶移動的！履帶英文叫 tracks，就是那個像坦克車一樣、繞一圈的帶子。I roll on tracks，roll 是滾動，所以是「我用履帶滾動」。to get to where I need to be，get to 是「到達」，where I need to be 是「我需要去的地方」。履帶很厲害喔，可以在泥巴地、沙地上走，都不會滑倒或陷下去！來聽 Blippi 唱這句！",
        startTime: 58,
        endTime: 70
      },
      {
        id: 8,
        lyrics: "I'm an excavator! Excavator!",
        chinese: "我是挖土機！挖土機！",
        chineseGuide: "耶！來到最後一句啦！這句最簡單了，你已經學會了喔！I'm an excavator 是「我是挖土機」，然後再喊一次 Excavator！這是整首歌最重要的一句，要大聲唱出來！I'm an excavator! Excavator! 寶貝你學得好棒，已經會說挖土機的英文了！我們來聽最後一次，然後跟著一起大聲唱！",
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
        chineseGuide: "寶貝！Blippi 要問你一個問題喔！Do you like，Do you like 是「你喜歡嗎」的意思。garbage trucks，garbage 是垃圾，trucks 是卡車，所以 garbage trucks 就是垃圾車！Do you like garbage trucks? 你喜歡垃圾車嗎？如果喜歡，就要回答 Yeah! Yeah 就是「對、是的」，很開心的說法！然後 I do too，I do 是「我喜歡」，too 是「也」，所以 I do too 就是「我也喜歡」！整句就是：你喜歡垃圾車嗎？耶，我也喜歡！來聽 Blippi 怎麼說！",
        startTime: 0,
        endTime: 6
      },
      {
        id: 2,
        lyrics: "On the count of three, yell Blippi garbage trucks!",
        chinese: "數到三，大喊 Blippi 垃圾車！",
        chineseGuide: "現在我們要玩一個遊戲喔！On the count of three，count 是數數，on the count of three 就是「數到三的時候」。然後 yell，yell 是大喊、大聲叫的意思，比 say 說還要大聲喔！yell Blippi garbage trucks 就是「大喊 Blippi 垃圾車」！所以整句是：數到三的時候，大喊 Blippi garbage trucks！等一下 Blippi 會數 one, two, three，數完你就要很大聲喊出來喔！準備好了嗎？",
        startTime: 6,
        endTime: 16
      },
      {
        id: 3,
        lyrics: "One... two... three! Blippi garbage trucks!",
        chinese: "一...二...三！Blippi 垃圾車！",
        chineseGuide: "來囉！我們一起數數！One 是一，two 是二，three 是三！One, two, three! 數完之後就要大聲喊 Blippi garbage trucks! 越大聲越好玩喔！記得，Blippi 是他的名字，garbage trucks 是垃圾車。大聲喊的時候要很開心、很興奮！你準備好要跟 Blippi 一起數了嗎？來！",
        startTime: 12,
        endTime: 22
      },
      {
        id: 4,
        lyrics: "I'm a garbage truck, picking up trash all day",
        chinese: "我是垃圾車，整天都在收垃圾",
        chineseGuide: "垃圾車在自我介紹喔！I'm a garbage truck，我是垃圾車。然後 picking up，pick up 是「撿起來、拿起來」的意思，加了 ing 變成 picking up，表示「正在撿」。trash 是垃圾，跟 garbage 一樣的意思。all day 是「整天、一整天」，從早上到晚上都是！所以整句是：我是垃圾車，整天都在撿垃圾！垃圾車好辛苦喔，每天把大家的垃圾都收走，讓城市變得乾乾淨淨的！垃圾車是不是很厲害？來聽這句怎麼唱！",
        startTime: 28,
        endTime: 40
      },
      {
        id: 5,
        lyrics: "Beep beep beep, get out of my way!",
        chinese: "嗶嗶嗶，讓開讓開！",
        chineseGuide: "這句超有趣的！寶貝你有聽過垃圾車倒車的聲音嗎？就是 Beep beep beep! 嗶嗶嗶！這個聲音是在告訴後面的人：小心喔，我要倒車了！然後 get out of my way，get out 是「出去、離開」，of my way 是「我的路」，所以 get out of my way 就是「離開我的路」，也就是「讓開」的意思！垃圾車在說：嗶嗶嗶，請讓開喔，我要工作了！Beep beep beep! 你也可以學垃圾車的聲音！來聽這句怎麼唱！",
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
        chineseGuide: "寶貝！這首歌是關於消防車的！消防車英文叫 fire truck。fire 是火，你知道火嗎？蠟燭上面那個就是 fire！truck 是卡車，所以 fire truck 就是救火的卡車，也就是消防車！歌詞說 If you like fire trucks，If 是「如果」，you like 是「你喜歡」，所以是「如果你喜歡消防車」。然後 yell，記得嗎？yell 是大喊的意思！yell Blippi fire truck 就是「大喊 Blippi 消防車」！如果你喜歡消防車，就要大聲喊出來喔！來聽 Blippi 怎麼唱！",
        startTime: 0,
        endTime: 12
      },
      {
        id: 2,
        lyrics: "One... two... three! Blippi fire truck!",
        chinese: "一...二...三！Blippi 消防車！",
        chineseGuide: "又要數數囉！跟剛才垃圾車一樣！One 是一，two 是二，three 是三！One, two, three! 數完就要大喊 Blippi fire truck! 這次要比剛才更大聲喔！消防車那麼勇敢，要去救火，我們也要勇敢大聲唱出來！消防員都是英雄，消防車也是英雄車！你準備好要大聲喊了嗎？跟著 Blippi 一起！",
        startTime: 8,
        endTime: 18
      },
      {
        id: 3,
        lyrics: "I'm a fire truck, here to save the day",
        chinese: "我是消防車，來拯救大家",
        chineseGuide: "消防車在自我介紹喔！I'm a fire truck，我是消防車。然後 here to save the day，here 是「這裡」，to save 是「來拯救」，the day 這裡不是「白天」的意思喔，save the day 是一個片語，意思是「拯救大家、解決問題」！所以消防車說：我是消防車，我來拯救大家！當有火災的時候，消防車就會 wee-oo wee-oo 趕快出動，把火撲滅，保護大家的安全！消防車是不是超級厲害的英雄車？來聽這句怎麼唱！",
        startTime: 25,
        endTime: 38
      },
      {
        id: 4,
        lyrics: "Wee-oo wee-oo, I'm on my way!",
        chinese: "嗚咿嗚咿，我來了！",
        chineseGuide: "這句超好玩的！寶貝你有聽過消防車的聲音嗎？就是 Wee-oo wee-oo! 嗚咿嗚咿！好響亮喔！這個聲音叫做警報聲，siren，是在告訴路上的車子和行人：消防車來了，請讓路！然後 I'm on my way，I'm 是「我」，on my way 是「在路上」的意思，所以 I'm on my way 就是「我在路上、我來了」！消防車在說：嗚咿嗚咿，我來了，我要趕快去救火！你也可以學消防車的聲音：Wee-oo wee-oo! 來聽這句怎麼唱！",
        startTime: 38,
        endTime: 50
      }
    ]
  }
];

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
