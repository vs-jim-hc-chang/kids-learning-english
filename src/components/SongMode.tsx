import { useState, useRef, useEffect, useCallback } from 'react';
import { YouTubePlayer } from './YouTubePlayer';
import type { YouTubePlayerRef } from './YouTubePlayer';
import { TextToSpeech } from './TextToSpeech';
import type { TextToSpeechRef } from './TextToSpeech';
import { songs } from '../data/songs';
import type { Song, SongVerse } from '../data/songs';

// 教學步驟（跟 CarMode 一樣的流程）
type SongStep =
  | 'SELECT'        // 選擇歌曲
  | 'IDLE'          // 等待開始
  | 'CHINESE_GUIDE' // 中文引導
  | 'VIDEO_PLAY'    // 播放影片
  | 'ENGLISH_TTS'   // 英文朗讀
  | 'REPEAT_PAUSE'  // 等待跟讀
  | 'COMPLETE'      // 完成
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
  const [step, setStep] = useState<SongStep>('SELECT');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [pauseCountdown, setPauseCountdown] = useState(0);

  // Refs
  const youtubeRef = useRef<YouTubePlayerRef>(null);
  const ttsRef = useRef<TextToSpeechRef>(null);
  const stepRef = useRef(step);
  const verseIndexRef = useRef(currentVerseIndex);
  const isPlayingRef = useRef(isPlaying);
  const pauseTimerRef = useRef<number | null>(null);
  const selectedSongRef = useRef(selectedSong);
  const pendingPlayRef = useRef(false);

  // 同步 refs
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    verseIndexRef.current = currentVerseIndex;
  }, [currentVerseIndex]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    selectedSongRef.current = selectedSong;
  }, [selectedSong]);

  // 當前段落
  const currentVerse: SongVerse | null = selectedSong
    ? selectedSong.verses[currentVerseIndex]
    : null;

  const currentVerseRef = useRef(currentVerse);
  useEffect(() => {
    currentVerseRef.current = currentVerse;
  }, [currentVerse]);

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
    setStep('IDLE');
    setIsPlaying(false);
    setIsPlayerReady(false);
  };

  // 播放器準備好
  const handlePlayerReady = useCallback(() => {
    setIsPlayerReady(true);
    // 如果有待播放的請求，立即播放
    if (pendingPlayRef.current && stepRef.current === 'VIDEO_PLAY') {
      pendingPlayRef.current = false;
      youtubeRef.current?.playSegment();
    }
  }, []);

  // 移動到下一段
  const goToNext = useCallback(() => {
    const song = selectedSongRef.current;
    if (!song) return;

    if (verseIndexRef.current < song.verses.length - 1) {
      setCurrentVerseIndex(prev => prev + 1);
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

  // 步驟 4: 開始跟讀等待
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
          goToNext();
        }
      }
    }, 1000);
  }, [clearPauseTimer, goToNext]);

  // 步驟 3: 播放英文朗讀
  const playEnglishTTS = useCallback(async () => {
    if (!isPlayingRef.current) return;

    const verse = currentVerseRef.current;
    if (!verse) return;

    setStep('ENGLISH_TTS');
    if (ttsRef.current) {
      // 朗讀兩次英文
      await ttsRef.current.speakText(verse.lyrics, 'en');
      if (!isPlayingRef.current) return;
      await new Promise(resolve => setTimeout(resolve, 800));
      if (!isPlayingRef.current) return;
      await ttsRef.current.speakText(verse.lyrics, 'en');
    }
    // 開始跟讀等待時間
    if (isPlayingRef.current) {
      startRepeatPause();
    }
  }, [startRepeatPause]);

  // 步驟 2: 影片播放結束後的回調
  const handleSegmentEnd = useCallback(() => {
    if (stepRef.current === 'VIDEO_PLAY' && isPlayingRef.current) {
      // 開始英文朗讀
      playEnglishTTS();
    } else if (stepRef.current === 'FULL_SONG') {
      // 完整歌曲播完
      setStep('SELECT');
      setSelectedSong(null);
      setCurrentVerseIndex(0);
      setIsPlaying(false);
    }
  }, [playEnglishTTS]);

  // 步驟 1: 播放中文引導
  const playChineseGuide = useCallback(async () => {
    if (!isPlayingRef.current) return;

    const verse = currentVerseRef.current;
    if (!verse) return;

    setStep('CHINESE_GUIDE');
    if (ttsRef.current) {
      await ttsRef.current.speakText(verse.chineseGuide, 'zh');
    }

    // 檢查是否仍在播放
    if (!isPlayingRef.current) return;

    // 短暫停頓後播放影片
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!isPlayingRef.current) return;

    setStep('VIDEO_PLAY');
  }, []);

  // 開始播放流程
  const startPlayback = useCallback(async () => {
    setIsPlaying(true);
    pendingPlayRef.current = false;
    await playChineseGuide();

    // 檢查是否仍在播放
    if (!isPlayingRef.current) return;

    // 播放影片片段
    if (youtubeRef.current) {
      if (!isPlayerReady) {
        pendingPlayRef.current = true;
      } else {
        youtubeRef.current.playSegment();
      }
    }
  }, [playChineseGuide, isPlayerReady]);

  // 當步驟為 IDLE 且正在播放時，自動開始下一輪
  useEffect(() => {
    if (step === 'IDLE' && isPlaying && selectedSong) {
      const timeoutId = setTimeout(() => {
        if (isPlayingRef.current && stepRef.current === 'IDLE') {
          startPlayback();
        }
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [step, isPlaying, selectedSong, startPlayback]);

  // 暫停/繼續
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      pendingPlayRef.current = false;
      clearPauseTimer();
      ttsRef.current?.stop();
      youtubeRef.current?.pauseVideo();
    } else {
      if (step === 'IDLE') {
        startPlayback();
      } else {
        setIsPlaying(true);
        // 根據當前步驟恢復
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
    goToNext();
  }, [clearPauseTimer, goToNext]);

  // 手動上一段
  const skipToPrev = useCallback(() => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();

    if (verseIndexRef.current > 0) {
      setCurrentVerseIndex(prev => prev - 1);
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
  };

  // 步驟描述
  const stepDescriptions: Record<SongStep, string> = {
    'SELECT': '',
    'IDLE': '準備開始',
    'CHINESE_GUIDE': '媽媽引導中...',
    'VIDEO_PLAY': '播放影片片段...',
    'ENGLISH_TTS': '英文朗讀中...',
    'REPEAT_PAUSE': `跟讀時間 (${pauseCountdown}秒)`,
    'COMPLETE': '完成！',
    'FULL_SONG': '🎉 完整歌曲播放中...'
  };

  // 清理
  useEffect(() => {
    return () => {
      clearPauseTimer();
    };
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
          text={currentVerse?.lyrics || ''}
        />
      </div>

      {/* 歌詞顯示 */}
      <div className="lyrics-display">
        {step === 'FULL_SONG' ? (
          <>
            <div className="lyrics-english full-song">🎉 完整歌曲時間！</div>
            <div className="lyrics-chinese">跟著 Blippi 一起唱完整首歌吧！</div>
          </>
        ) : (
          <>
            <div className="lyrics-english">{currentVerse?.lyrics}</div>
            <div className="lyrics-chinese">{currentVerse?.chinese}</div>
          </>
        )}
      </div>

      {/* 狀態提示 */}
      <div className={`song-status step-${step.toLowerCase().replace('_', '-')}`}>
        {stepDescriptions[step]}
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
