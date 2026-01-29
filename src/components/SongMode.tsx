import { useState, useRef, useEffect, useCallback } from 'react';
import { YouTubePlayer } from './YouTubePlayer';
import type { YouTubePlayerRef } from './YouTubePlayer';
import { TextToSpeech } from './TextToSpeech';
import type { TextToSpeechRef } from './TextToSpeech';
import { songs } from '../data/songs';
import type { Song, SongVerse } from '../data/songs';

// 教學步驟
type SongStep =
  | 'SELECT'        // 選擇歌曲
  | 'IDLE'          // 等待開始
  | 'LINE_ENGLISH'  // 英文朗讀一句
  | 'LINE_TEACHING' // 中文教學一句
  | 'VIDEO_PLAY'    // 播放影片段落
  | 'REPEAT_PAUSE'  // 等待跟讀
  | 'FULL_SONG';    // 播放完整歌曲

// 跟讀等待時間（秒）
const REPEAT_PAUSE_DURATION = 5;

interface SongModeProps {
  onBack: () => void;
}

export function SongMode({ onBack }: SongModeProps) {
  // 狀態
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [step, setStep] = useState<SongStep>('SELECT');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [pauseCountdown, setPauseCountdown] = useState(0);

  // Refs
  const youtubeRef = useRef<YouTubePlayerRef>(null);
  const ttsRef = useRef<TextToSpeechRef>(null);
  const stepRef = useRef(step);
  const verseIndexRef = useRef(currentVerseIndex);
  const lineIndexRef = useRef(currentLineIndex);
  const isPlayingRef = useRef(isPlaying);
  const pauseTimerRef = useRef<number | null>(null);
  const selectedSongRef = useRef(selectedSong);
  const pendingPlayRef = useRef(false);
  const isPlayingLineRef = useRef(false); // 防止重複觸發播放

  // 同步 refs
  useEffect(() => { stepRef.current = step; }, [step]);
  useEffect(() => { verseIndexRef.current = currentVerseIndex; }, [currentVerseIndex]);
  useEffect(() => { lineIndexRef.current = currentLineIndex; }, [currentLineIndex]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { selectedSongRef.current = selectedSong; }, [selectedSong]);

  // 當前段落和句子
  const currentVerse: SongVerse | null = selectedSong
    ? selectedSong.verses[currentVerseIndex]
    : null;
  const currentLine = currentVerse?.lines[currentLineIndex] || null;

  const currentVerseRef = useRef(currentVerse);
  useEffect(() => { currentVerseRef.current = currentVerse; }, [currentVerse]);

  // 清除暫停計時器
  const clearPauseTimer = useCallback(() => {
    if (pauseTimerRef.current) {
      clearInterval(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
  }, []);

  // 選擇歌曲
  const handleSelectSong = (song: Song) => {
    setSelectedSong(song);
    setCurrentVerseIndex(0);
    setCurrentLineIndex(0);
    setStep('IDLE');
    setIsPlaying(false);
    setIsPlayerReady(false);
  };

  // 播放器準備好
  const handlePlayerReady = useCallback(() => {
    setIsPlayerReady(true);
    if (pendingPlayRef.current && stepRef.current === 'VIDEO_PLAY') {
      pendingPlayRef.current = false;
      youtubeRef.current?.playSegment();
    }
  }, []);

  // 移動到下一段
  const goToNextVerse = useCallback(() => {
    const song = selectedSongRef.current;
    if (!song) return;

    if (verseIndexRef.current < song.verses.length - 1) {
      setCurrentVerseIndex(prev => prev + 1);
      setCurrentLineIndex(0);
      setStep('IDLE');
    } else {
      // 全部播完，播放完整歌曲
      setIsPlaying(false);
      setStep('FULL_SONG');
      setTimeout(() => {
        youtubeRef.current?.playSegment();
      }, 1500);
    }
  }, []);

  // 開始跟讀等待
  const startRepeatPause = useCallback(() => {
    setPauseCountdown(REPEAT_PAUSE_DURATION);
    setStep('REPEAT_PAUSE');
    clearPauseTimer();

    let remaining = REPEAT_PAUSE_DURATION;
    pauseTimerRef.current = window.setInterval(() => {
      remaining -= 1;
      setPauseCountdown(remaining);

      if (remaining <= 0) {
        clearPauseTimer();
        if (isPlayingRef.current) {
          goToNextVerse();
        }
      }
    }, 1000);
  }, [clearPauseTimer, goToNextVerse]);

  // 影片播放結束後的回調
  const handleSegmentEnd = useCallback(() => {
    if (stepRef.current === 'VIDEO_PLAY' && isPlayingRef.current) {
      startRepeatPause();
    } else if (stepRef.current === 'FULL_SONG') {
      setStep('SELECT');
      setSelectedSong(null);
      setCurrentVerseIndex(0);
      setCurrentLineIndex(0);
      setIsPlaying(false);
    }
  }, [startRepeatPause]);

  // 播放指定句子（英文朗讀 → 中文教學 → 下一句或播放影片）
  const playLine = useCallback(async (lineIdx: number) => {
    // 防止重複觸發
    if (lineIdx === 0) {
      if (isPlayingLineRef.current) {
        console.log('playLine already running, skipping');
        return;
      }
      isPlayingLineRef.current = true;
    }

    if (!isPlayingRef.current) {
      isPlayingLineRef.current = false;
      return;
    }
    const verse = currentVerseRef.current;
    if (!verse) {
      isPlayingLineRef.current = false;
      return;
    }

    const line = verse.lines[lineIdx];
    if (!line) {
      isPlayingLineRef.current = false;
      return;
    }

    setCurrentLineIndex(lineIdx);

    // 步驟 1: 英文朗讀
    setStep('LINE_ENGLISH');
    if (ttsRef.current) {
      await ttsRef.current.speakText(line.english, 'en');
    }
    if (!isPlayingRef.current) {
      isPlayingLineRef.current = false;
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if (!isPlayingRef.current) {
      isPlayingLineRef.current = false;
      return;
    }

    // 步驟 2: 中文教學
    setStep('LINE_TEACHING');
    if (ttsRef.current) {
      await ttsRef.current.speakText(line.teaching, 'zh');
    }
    if (!isPlayingRef.current) {
      isPlayingLineRef.current = false;
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if (!isPlayingRef.current) {
      isPlayingLineRef.current = false;
      return;
    }

    // 檢查是否還有下一句
    if (lineIdx < verse.lines.length - 1) {
      // 遞歸播放下一句
      await playLine(lineIdx + 1);
    } else {
      // 所有句子教完，播放影片
      isPlayingLineRef.current = false;
      setStep('VIDEO_PLAY');
      if (youtubeRef.current) {
        if (!isPlayerReady) {
          pendingPlayRef.current = true;
        } else {
          youtubeRef.current.playSegment();
        }
      }
    }
  }, [isPlayerReady]);

  // 開始播放流程
  const startPlayback = useCallback(async () => {
    setIsPlaying(true);
    isPlayingRef.current = true; // 立即同步
    pendingPlayRef.current = false;

    // 直接開始播放
    playLine(0);
  }, [playLine]);

  // 當步驟為 IDLE 且正在播放時，自動開始
  useEffect(() => {
    if (step === 'IDLE' && isPlaying && selectedSong) {
      const timeoutId = setTimeout(() => {
        if (isPlayingRef.current && stepRef.current === 'IDLE') {
          startPlayback();
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [step, isPlaying, selectedSong, startPlayback]);

  // 暫停/繼續
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      isPlayingRef.current = false; // 立即同步
      isPlayingLineRef.current = false; // 重置播放鎖
      pendingPlayRef.current = false;
      clearPauseTimer();
      ttsRef.current?.stop();
      youtubeRef.current?.pauseVideo();
    } else {
      if (step === 'IDLE') {
        startPlayback();
      } else {
        setIsPlaying(true);
        isPlayingRef.current = true; // 立即同步
        if (step === 'VIDEO_PLAY') {
          if (isPlayerReady) {
            youtubeRef.current?.playSegment();
          } else {
            pendingPlayRef.current = true;
          }
        } else if (step === 'REPEAT_PAUSE') {
          startRepeatPause();
        }
      }
    }
  }, [isPlaying, step, isPlayerReady, clearPauseTimer, startPlayback, startRepeatPause]);

  // 手動下一段
  const skipToNext = useCallback(() => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();
    goToNextVerse();
  }, [clearPauseTimer, goToNextVerse]);

  // 手動上一段
  const skipToPrev = useCallback(() => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();

    if (verseIndexRef.current > 0) {
      setCurrentVerseIndex(prev => prev - 1);
      setCurrentLineIndex(0);
      setStep('IDLE');
    }
  }, [clearPauseTimer]);

  // 返回歌曲選擇
  const backToSelect = () => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();
    setIsPlaying(false);
    setStep('SELECT');
    setSelectedSong(null);
    setCurrentVerseIndex(0);
    setCurrentLineIndex(0);
  };

  // 步驟描述
  const getStepDescription = () => {
    switch (step) {
      case 'LINE_ENGLISH': return '英文朗讀中...';
      case 'LINE_TEACHING': return '單字教學中...';
      case 'VIDEO_PLAY': return '播放影片片段...';
      case 'REPEAT_PAUSE': return `跟唱時間 (${pauseCountdown}秒)`;
      case 'FULL_SONG': return '🎉 完整歌曲播放中...';
      case 'IDLE': return '準備開始';
      default: return '';
    }
  };

  // 組合所有歌詞顯示
  const getAllLyrics = () => {
    if (!currentVerse) return { english: '', chinese: '' };
    return {
      english: currentVerse.lines.map(l => l.english).join('\n'),
      chinese: currentVerse.lines.map(l => l.chinese).join('\n')
    };
  };

  // 清理
  useEffect(() => {
    return () => { clearPauseTimer(); };
  }, [clearPauseTimer]);

  // 渲染歌曲選擇畫面
  if (step === 'SELECT') {
    return (
      <div className="song-mode">
        <div className="song-header">
          <h1>🎵 歌曲教學</h1>
          <p>選擇一首歌開始學習</p>
        </div>

        <div className="song-list">
          {songs.map(song => (
            <button
              key={song.id}
              className="song-card"
              onClick={() => handleSelectSong(song)}
            >
              <div className="song-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`}
                  alt={song.title}
                />
                <span className="verse-count">{song.verses.length} 段</span>
              </div>
              <div className="song-info">
                <h3>{song.title}</h3>
                <p>{song.titleChinese}</p>
              </div>
            </button>
          ))}
        </div>

        <button className="back-button" onClick={onBack}>
          🏠 返回句子模式
        </button>
      </div>
    );
  }

  const lyrics = getAllLyrics();

  // 渲染教學畫面
  return (
    <div className="song-mode teaching">
      {/* 標題列 */}
      <div className="song-teaching-header">
        <h2>🎵 {selectedSong?.title}</h2>
        <span className="song-chinese-title">{selectedSong?.titleChinese}</span>
      </div>

      {/* 進度條 */}
      {step !== 'FULL_SONG' && selectedSong && (
        <div className="verse-progress">
          <span>段落 {currentVerseIndex + 1} / {selectedSong.verses.length}</span>
          {currentVerse && (
            <span className="line-progress">
              （句子 {currentLineIndex + 1} / {currentVerse.lines.length}）
            </span>
          )}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentVerseIndex + 1) / selectedSong.verses.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* 影片播放器 */}
      <div className="song-video-container">
        <YouTubePlayer
          ref={youtubeRef}
          videoId={selectedSong?.videoId || ''}
          startTime={
            step === 'FULL_SONG'
              ? 0
              : (currentVerse?.startTime || 0)
          }
          endTime={
            step === 'FULL_SONG'
              ? (selectedSong?.totalDuration || 100)
              : (currentVerse?.endTime || 10)
          }
          isLooping={false}
          onReady={handlePlayerReady}
          onSegmentEnd={handleSegmentEnd}
        />
      </div>

      {/* 隱藏的 TTS 元件 */}
      <div style={{ display: 'none' }}>
        <TextToSpeech
          ref={ttsRef}
          text={currentLine?.english || ''}
        />
      </div>

      {/* 歌詞顯示 */}
      <div className="lyrics-display">
        {step === 'FULL_SONG' ? (
          <>
            <div className="lyrics-english full-song">🎉 完整歌曲時間！</div>
            <div className="lyrics-chinese">跟著 Blippi 一起唱完整首歌吧！</div>
          </>
        ) : (step === 'LINE_ENGLISH' || step === 'LINE_TEACHING') && currentLine ? (
          <>
            <div className="lyrics-english highlight">{currentLine.english}</div>
            <div className="lyrics-chinese">{currentLine.chinese}</div>
            {step === 'LINE_TEACHING' && (
              <div className="lyrics-teaching">💡 {currentLine.teaching}</div>
            )}
          </>
        ) : (
          <>
            <div className="lyrics-english">{lyrics.english}</div>
            <div className="lyrics-chinese">{lyrics.chinese}</div>
          </>
        )}
      </div>

      {/* 狀態提示 */}
      <div className={`song-status step-${step.toLowerCase().replace('_', '-')}`}>
        {getStepDescription()}
      </div>

      {/* 控制按鈕 */}
      <div className="song-controls">
        {step !== 'FULL_SONG' && (
          <>
            <button
              className="control-btn prev"
              onClick={skipToPrev}
              disabled={currentVerseIndex === 0}
            >
              ⏮️ 上一段
            </button>
            <button
              className={`control-btn main ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlayPause}
            >
              {isPlaying ? '⏸️ 暫停' : '▶️ 開始播放'}
            </button>
            <button
              className="control-btn next"
              onClick={skipToNext}
              disabled={currentVerseIndex >= (selectedSong?.verses.length || 1) - 1}
            >
              ⏭️ 下一段
            </button>
          </>
        )}
      </div>

      <div className="song-controls secondary">
        <button className="control-btn back" onClick={backToSelect}>
          🎵 換首歌
        </button>
        <button className="control-btn home" onClick={onBack}>
          🏠 返回
        </button>
      </div>
    </div>
  );
}
