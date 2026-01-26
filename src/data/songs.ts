// 歌曲教學數據

export interface SongVerse {
  id: number;
  lyrics: string;           // 英文歌詞
  chinese: string;          // 中文翻譯
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
        startTime: 9,
        endTime: 20
      },
      {
        id: 2,
        lyrics: "I've got a great big arm and a great big boom",
        chinese: "我有一個大手臂和大吊臂",
        startTime: 20,
        endTime: 28
      },
      {
        id: 3,
        lyrics: "If I start digging now, I'll be done real soon",
        chinese: "如果我現在開始挖，很快就會完成",
        startTime: 24,
        endTime: 32
      },
      {
        id: 4,
        lyrics: "I'm a dirt separator, I'm an excavator!",
        chinese: "我是泥土分離器，我是挖土機！",
        startTime: 28,
        endTime: 36
      },
      {
        id: 5,
        lyrics: "I've got a big old bucket and I scoop all the time",
        chinese: "我有一個大鏟子，一直在挖",
        startTime: 36,
        endTime: 44
      },
      {
        id: 6,
        lyrics: "Digging holes in the ground, wonder what I'll find",
        chinese: "在地上挖洞，不知道會找到什麼",
        startTime: 39,
        endTime: 50
      },
      {
        id: 7,
        lyrics: "I roll on tracks to get to where I need to be",
        chinese: "我用履帶移動到我需要去的地方",
        startTime: 58,
        endTime: 70
      },
      {
        id: 8,
        lyrics: "I'm an excavator! Excavator!",
        chinese: "我是挖土機！挖土機！",
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
        startTime: 0,
        endTime: 6
      },
      {
        id: 2,
        lyrics: "On the count of three, yell Blippi garbage trucks!",
        chinese: "數到三，大喊 Blippi 垃圾車！",
        startTime: 6,
        endTime: 16
      },
      {
        id: 3,
        lyrics: "One... two... three! Blippi garbage trucks!",
        chinese: "一...二...三！Blippi 垃圾車！",
        startTime: 12,
        endTime: 22
      },
      {
        id: 4,
        lyrics: "I'm a garbage truck, picking up trash all day",
        chinese: "我是垃圾車，整天都在收垃圾",
        startTime: 28,
        endTime: 40
      },
      {
        id: 5,
        lyrics: "Beep beep beep, get out of my way!",
        chinese: "嗶嗶嗶，讓開讓開！",
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
        startTime: 0,
        endTime: 12
      },
      {
        id: 2,
        lyrics: "One... two... three! Blippi fire truck!",
        chinese: "一...二...三！Blippi 消防車！",
        startTime: 8,
        endTime: 18
      },
      {
        id: 3,
        lyrics: "I'm a fire truck, here to save the day",
        chinese: "我是消防車，來拯救大家",
        startTime: 25,
        endTime: 38
      },
      {
        id: 4,
        lyrics: "Wee-oo wee-oo, I'm on my way!",
        chinese: "嗚咿嗚咿，我來了！",
        startTime: 38,
        endTime: 50
      }
    ]
  }
];

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
