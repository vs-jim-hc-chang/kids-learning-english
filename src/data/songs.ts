// 歌曲教學數據

export interface SongLine {
  english: string;          // 英文歌詞一句
  chinese: string;          // 中文翻譯
  teaching: string;         // 單字教學
}

export interface SongVerse {
  id: number;
  lines: SongLine[];        // 逐句歌詞和教學
  startTime: number;        // 影片開始秒數
  endTime: number;          // 影片結束秒數
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
        lines: [
          { english: "Excavator! Hey dirt, see you later! I'm an excavator!", chinese: "挖土機！嘿泥土，再見啦！我是挖土機！", teaching: "excavator 是挖土機，dirt 是泥土" },
          { english: "I've got a great big arm and a great big boom", chinese: "我有一個大手臂和大吊臂", teaching: "arm 是手臂，boom 是吊臂" },
          { english: "If I start digging now, I'll be done real soon", chinese: "如果我現在開始挖，很快就會完成", teaching: "digging 是挖土，soon 是很快" },
          { english: "I'm a dirt separator, I'm an excavator!", chinese: "我是泥土分離器，我是挖土機！", teaching: "separator 是分離器，和 excavator 押韻喔！" }
        ],
        startTime: 10,
        endTime: 35
      },
      {
        id: 2,
        lines: [
          { english: "I've got a big old bucket and I scoop all the time", chinese: "我有一個大鏟斗，一直在挖", teaching: "bucket 是鏟斗，scoop 是舀的動作" },
          { english: "Digging holes in the ground, wonder what I'll find", chinese: "在地上挖洞，不知道會找到什麼", teaching: "holes 是洞，ground 是地面，wonder 是好奇" },
          { english: "I'm an earth investigator, I'm an excavator!", chinese: "我是地球調查員，我是挖土機！", teaching: "earth 是地球，investigator 是調查員，又押韻！" }
        ],
        startTime: 36,
        endTime: 50
      },
      {
        id: 3,
        lines: [
          { english: "Oh can't you see that I don't have feet?", chinese: "你沒看到嗎，我沒有腳？", teaching: "feet 是腳，foot 的複數" },
          { english: "No feet? How do you get around?", chinese: "沒有腳？那你怎麼移動？", teaching: "get around 是移動的意思" },
          { english: "I roll on tracks to get to where I need to be", chinese: "我用履帶滾動，到達我需要去的地方", teaching: "roll 是滾動，tracks 是履帶，像坦克車！" },
          { english: "I'm an excavator! Excavator!", chinese: "我是挖土機！挖土機！", teaching: "最後一起大聲唱！" }
        ],
        startTime: 50,
        endTime: 77
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
        lines: [
          { english: "Do you like garbage trucks? Yeah, I do too!", chinese: "你喜歡垃圾車嗎？我也喜歡！", teaching: "garbage 是垃圾，truck 是卡車" },
          { english: "On the count of three, yell Blippi garbage trucks!", chinese: "數到三，大喊 Blippi 垃圾車！", teaching: "yell 是大喊，count 是數數" },
          { english: "One... two... three! Blippi garbage trucks!", chinese: "一...二...三！Blippi 垃圾車！", teaching: "one 一，two 二，three 三" },
          { english: "Garbage trucks, garbage trucks, driving through the town", chinese: "垃圾車，垃圾車，開過城鎮", teaching: "driving 是開車，town 是城鎮" },
          { english: "Picking cans above the ground, garbage trucks", chinese: "把垃圾桶舉起來，垃圾車", teaching: "picking 是拿起來，cans 是垃圾桶" }
        ],
        startTime: 0,
        endTime: 40
      },
      {
        id: 2,
        lines: [
          { english: "Sometimes when I wake up early in the morning, I hear a monster sound", chinese: "有時候我一大早醒來，我聽到怪物的聲音", teaching: "wake up 是醒來，monster 是怪物" },
          { english: "I look at the window and there's a garbage truck", chinese: "我看向窗戶，有一輛垃圾車", teaching: "window 是窗戶" },
          { english: "picking cans above the ground", chinese: "把垃圾桶舉起來", teaching: "上一段學過，再聽一次" },
          { english: "It empties the can and puts it back down", chinese: "它倒空垃圾桶再放回去", teaching: "empties 是倒空，puts back 是放回去" },
          { english: "and drives away so loud", chinese: "然後大聲開走了", teaching: "drives away 是開走，loud 是大聲" }
        ],
        startTime: 40,
        endTime: 62
      },
      {
        id: 3,
        lines: [
          { english: "The garbage man drives up in the garbage truck", chinese: "垃圾車司機開著垃圾車來", teaching: "garbage man 是垃圾車司機" },
          { english: "and takes that garbage up", chinese: "把垃圾收走", teaching: "takes up 是收走" },
          { english: "He dumps it in the back so that it can be crushed", chinese: "他把垃圾倒進後面壓碎", teaching: "dumps 是倒，crushed 是壓碎" },
          { english: "then he drives out to the dump", chinese: "然後他開去垃圾場", teaching: "dump 是垃圾場" },
          { english: "and dumps the whole thing out", chinese: "把全部垃圾倒出來", teaching: "the whole thing 是全部" }
        ],
        startTime: 84,
        endTime: 106
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
        lines: [
          { english: "If you like fire trucks, on the count of three, yell Blippi fire truck!", chinese: "如果你喜歡消防車，數到三，大喊 Blippi 消防車！", teaching: "fire 是火，fire truck 是消防車" },
          { english: "One... two... three! Blippi fire trucks!", chinese: "一...二...三！Blippi 消防車！", teaching: "數完三就大聲喊！" },
          { english: "Fire truck, fire truck, I wish I could ride a fire truck", chinese: "消防車，消防車，我希望能坐上消防車", teaching: "I wish 是我希望，ride 是坐" }
        ],
        startTime: 0,
        endTime: 40
      },
      {
        id: 2,
        lines: [
          { english: "I wish I could wake up in the fire station to the sound of the fire bell", chinese: "我希望能在消防局醒來，聽到消防鐘的聲音", teaching: "fire station 是消防局，fire bell 是消防鐘" },
          { english: "I'd slide down the fire pole and hop onto the fire truck", chinese: "我會滑下消防滑竿，跳上消防車", teaching: "slide down 是滑下來，fire pole 是消防滑竿，hop 是跳" }
        ],
        startTime: 43,
        endTime: 58
      },
      {
        id: 3,
        lines: [
          { english: "People see the truck come, they put their hands over their ears", chinese: "人們看到消防車來，他們把手摀住耳朵", teaching: "hands 是手，ears 是耳朵" },
          { english: "the siren is so loud", chinese: "警報聲好大聲", teaching: "siren 是警報聲，loud 是大聲" },
          { english: "I wish I could hook the hose to the hydrant", chinese: "我希望能把水管接到消防栓", teaching: "hose 是水管，hydrant 是消防栓" },
          { english: "spray the water on the fire", chinese: "把水噴到火上", teaching: "spray 是噴" }
        ],
        startTime: 70,
        endTime: 112
      },
      {
        id: 4,
        lines: [
          { english: "Once the fire is all put out", chinese: "火撲滅之後", teaching: "put out 是撲滅" },
          { english: "everyone will scream and shout", chinese: "大家會大聲歡呼", teaching: "scream 和 shout 都是大叫" },
          { english: "Great job, Mr. Fireman!", chinese: "消防員先生做得好！", teaching: "fireman 是消防員，最後一起唱！" }
        ],
        startTime: 129,
        endTime: 142
      }
    ]
  }
];

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
