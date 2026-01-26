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
        endTime: 12
      },
      {
        id: 3,
        lyrics: "One... two... three! Blippi garbage trucks!",
        chinese: "一...二...三！Blippi 垃圾車！",
        chineseGuide: "我們來複習數字！one 是一，two 是二，three 是三。跟我說：one, two, three。很好！再說一次，這次大聲一點：one, two, three。太棒了！數完 three 之後，要大聲喊 Blippi garbage trucks！還記得剛才學的 yell 嗎？大喊！現在就是要 yell 的時候！準備好了嗎？來聽 Blippi 數數，然後跟著一起大聲喊！",
        startTime: 12,
        endTime: 20
      },
      {
        id: 4,
        lyrics: "Garbage trucks, garbage trucks, driving through the town",
        chinese: "垃圾車，垃圾車，開過城鎮",
        chineseGuide: "這是歌曲的副歌部分喔！很好記！Garbage trucks, garbage trucks 就是「垃圾車，垃圾車」，重複兩次。然後 driving through the town，driving 是開車，through 是穿過，town 是城鎮。跟我說：town。很好！所以整句是：垃圾車，垃圾車，開過城鎮。垃圾車每天都要開遍整個城鎮收垃圾呢！來聽這句怎麼唱！",
        startTime: 25,
        endTime: 33
      },
      {
        id: 5,
        lyrics: "Picking cans above the ground, garbage trucks",
        chinese: "把垃圾桶舉起來，垃圾車",
        chineseGuide: "這一句有一個很有畫面的動作！picking 是撿、拿起來的意思。cans 是垃圾桶。跟我說：cans。很好！above the ground 是「離開地面」的意思，就是把垃圾桶舉高高！你有沒有看過垃圾車把垃圾桶舉起來倒垃圾？那個動作就是 picking cans above the ground！最後再說一次 garbage trucks，垃圾車。來聽這句怎麼唱！",
        startTime: 33,
        endTime: 40
      },
      {
        id: 6,
        lyrics: "Sometimes when I wake up early in the morning, I hear a monster sound",
        chinese: "有時候我一大早醒來，我聽到一個怪物的聲音",
        chineseGuide: "這一句在說垃圾車的聲音喔！sometimes 是「有時候」，wake up 是「醒來」，early in the morning 是「一大早」。跟我說：wake up。很好！然後 I hear 是「我聽到」，a monster sound 是「一個怪物的聲音」。monster 是怪物。跟我說：monster。很棒！垃圾車的聲音很大聲，就像怪物一樣！來聽這句怎麼唱！",
        startTime: 40,
        endTime: 47
      },
      {
        id: 7,
        lyrics: "I look at the window and there's a garbage truck",
        chinese: "我看向窗戶，有一輛垃圾車",
        chineseGuide: "這一句很簡單！I look at 是「我看」，the window 是「窗戶」。跟我說：window。很好！and there's 是「然後有」的意思，a garbage truck 我們學過了，垃圾車！所以整句是：我看向窗戶，有一輛垃圾車！原來剛才的怪物聲音是垃圾車啊！來聽這句怎麼唱！",
        startTime: 47,
        endTime: 55
      },
      {
        id: 8,
        lyrics: "The garbage man drives up in the garbage truck and takes that garbage up",
        chinese: "垃圾車司機開著垃圾車，把垃圾收走",
        chineseGuide: "這一句介紹垃圾車司機！garbage man 就是垃圾車司機，收垃圾的人。跟我說：garbage man。很好！drives up 是「開過來」，in the garbage truck 是「開著垃圾車」。然後 takes that garbage up 是「把垃圾收走」。takes up 是「拿走、收走」的意思。垃圾車司機每天都很辛苦，把大家的垃圾都收走！來聽這句怎麼唱！",
        startTime: 84,
        endTime: 92
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
        lyrics: "If you like fire trucks, on the count of three, yell Blippi fire truck!",
        chinese: "如果你喜歡消防車，數到三，大喊 Blippi 消防車！",
        chineseGuide: "這首歌要學 fire truck，消防車。fire 是火，像蠟燭上面的火焰。跟我說：fire。很好！truck 是卡車，fire truck 合起來就是消防車，救火的車。跟我說：fire truck。太棒了！歌詞說 If you like fire trucks，If 是「如果」，you like 是「你喜歡」。還記得 on the count of three 嗎？數到三的時候！還有 yell 是大喊的意思！來聽 Blippi 怎麼唱這句！",
        startTime: 0,
        endTime: 8
      },
      {
        id: 2,
        lyrics: "One... two... three! Blippi fire trucks!",
        chinese: "一...二...三！Blippi 消防車！",
        chineseGuide: "又要數數了！還記得數字嗎？one 是一，two 是二，three 是三。跟我數一次：one, two, three。很好！這次要比剛才更大聲喔，因為消防車很勇敢，要去救火！消防員是英雄，消防車也是英雄車！數完 one, two, three 之後，要大聲 yell：Blippi fire trucks！準備好了嗎？來聽 Blippi 數，然後一起大聲喊！",
        startTime: 8,
        endTime: 17
      },
      {
        id: 3,
        lyrics: "Fire truck, fire truck, I wish I could ride a fire truck",
        chinese: "消防車，消防車，我希望能坐上消防車",
        chineseGuide: "這是歌曲的副歌部分！Fire truck, fire truck 重複兩次，很好記！然後 I wish I could，I wish 是「我希望」，I could 是「我能夠」。跟我說：I wish。很好！ride 是「騎、坐」的意思，ride a fire truck 就是「坐上消防車」。你是不是也想坐上消防車呢？I wish I could ride a fire truck！來聽這句怎麼唱！",
        startTime: 29,
        endTime: 40
      },
      {
        id: 4,
        lyrics: "I wish I could wake up in the fire station to the sound of the fire bell",
        chinese: "我希望能在消防局醒來，聽到消防鐘的聲音",
        chineseGuide: "這一句有很多新單字喔！fire station 是消防局，消防員住的地方。跟我說：fire station。很好！wake up 還記得嗎？是醒來的意思。fire bell 是消防鐘，有火災的時候會響的鈴聲。跟我說：fire bell。很棒！所以整句是：我希望能在消防局醒來，聽到消防鐘的聲音。想像一下，住在消防局裡面，一聽到鈴聲就要出動救火！來聽這句怎麼唱！",
        startTime: 43,
        endTime: 51
      },
      {
        id: 5,
        lyrics: "I'd slide down the fire pole and hop onto the fire truck",
        chinese: "我會滑下消防滑竿，跳上消防車",
        chineseGuide: "這一句超酷的！slide down 是「滑下來」的意思。跟我說：slide down。很好！fire pole 是消防滑竿，就是消防局裡面那根可以滑下來的柱子！消防員聽到鈴聲，就會從樓上滑下來，很快很快！然後 hop onto 是「跳上」的意思。跟我說：hop onto。很棒！所以整句是：我會滑下消防滑竿，然後跳上消防車！來聽這句怎麼唱！",
        startTime: 51,
        endTime: 58
      },
      {
        id: 6,
        lyrics: "People see the truck come, they put their hands over their ears, the siren is so loud",
        chinese: "人們看到消防車來，他們把手摀住耳朵，警報聲好大聲",
        chineseGuide: "這一句在說消防車的警報聲！people 是人們，see the truck come 是「看到消防車來」。然後 put their hands over their ears，put 是放，hands 是手，over 是在上面，ears 是耳朵。跟我說：ears。很好！為什麼要摀住耳朵呢？因為 the siren is so loud！siren 是警報聲，就是消防車發出的聲音。跟我說：siren。很棒！so loud 是「好大聲」的意思。來聽這句怎麼唱！",
        startTime: 70,
        endTime: 83
      },
      {
        id: 7,
        lyrics: "I wish I could hook the hose to the hydrant, spray the water on the fire",
        chinese: "我希望能把水管接到消防栓，把水噴到火上",
        chineseGuide: "這一句在說滅火的動作！hook 是「鉤住、接上」的意思。hose 是水管，就是消防員用來噴水的管子。跟我說：hose。很好！hydrant 是消防栓，路邊那個紅色的東西，可以接水管。跟我說：hydrant。很棒！然後 spray 是噴的意思，spray the water on the fire 就是「把水噴到火上」。跟我說：spray。太棒了！來聽這句怎麼唱！",
        startTime: 101,
        endTime: 112
      },
      {
        id: 8,
        lyrics: "Once the fire is all put out, everyone will scream and shout: Great job, Mr. Fireman!",
        chinese: "火撲滅之後，大家會大聲歡呼：消防員先生做得好！",
        chineseGuide: "最後一句啦！once the fire is all put out，once 是「一旦」，put out 是「撲滅」的意思。跟我說：put out。很好！然後 everyone will scream and shout，scream 和 shout 都是「大叫、歡呼」的意思。跟我說：scream and shout。很棒！最後大家會說什麼？Great job, Mr. Fireman！Great job 是「做得好」，Mr. Fireman 是「消防員先生」。fireman 就是消防員。跟我說：fireman。太棒了！我們來複習今天學的單字：fire truck 消防車，fire station 消防局，siren 警報聲，hose 水管，fireman 消防員。來聽最後這句！",
        startTime: 129,
        endTime: 142
      }
    ]
  }
];

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
