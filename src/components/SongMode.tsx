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
  | 'SHOW_LYRICS'   // 顯示歌詞（準備播放）
  | 'READ_LYRICS'   // 朗讀歌詞
  | 'PLAY_FIRST'    // 第一次播放（先聽）
  | 'PLAY_SECOND'   // 第二次播放（跟唱）
  | 'FULL_SONG';    // 播放完整歌曲

interface SongModeProps {
  onBack: () => void;
}

export function SongMode({ onBack }: SongModeProps) {
  // 狀態
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [step, setStep] = useState<SongStep>('SELECT');
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  // Refs
  const youtubeRef = useRef<YouTubePlayerRef>(null);
  const ttsRef = useRef<TextToSpeechRef>(null);
  const stepRef = useRef(step);
  const verseIndexRef = useRef(currentVerseIndex);

  // 同步 ref
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    verseIndexRef.current = currentVerseIndex;
  }, [currentVerseIndex]);

  // 當前段落
  const currentVerse: SongVerse | null = selectedSong
    ? selectedSong.verses[currentVerseIndex]
    : null;

  // 選擇歌曲
  const handleSelectSong = (song: Song) => {
    setSelectedSong(song);
    setCurrentVerseIndex(0);
    setStep('SHOW_LYRICS');
    setIsPlayerReady(false);
  };

  // 播放器準備好
  const handlePlayerReady = useCallback(() => {
    setIsPlayerReady(true);
  }, []);

  // 片段播放完畢
  const handleSegmentEnd = useCallback(() => {
    const currentStep = stepRef.current;

    if (currentStep === 'PLAY_FIRST') {
      // 第一次播完，進入第二次
      setStep('PLAY_SECOND');
      // 稍等一下再播放第二次
      setTimeout(() => {
        youtubeRef.current?.playSegment();
      }, 1000);
    } else if (currentStep === 'PLAY_SECOND') {
      // 第二次播完，進入下一段或完成
      if (selectedSong && verseIndexRef.current < selectedSong.verses.length - 1) {
        // 還有下一段
        setCurrentVerseIndex(prev => prev + 1);
        setStep('SHOW_LYRICS');
      } else {
        // 全部播完，播放完整歌曲
        setStep('FULL_SONG');
        setTimeout(() => {
          youtubeRef.current?.playSegment();
        }, 1500);
      }
    } else if (currentStep === 'FULL_SONG') {
      // 完整歌曲播完，回到選擇
      setStep('SELECT');
      setSelectedSong(null);
      setCurrentVerseIndex(0);
    }
  }, [selectedSong]);

  // 開始教學流程：先朗讀歌詞
  const startTeaching = async () => {
    if (!currentVerse) return;

    setStep('READ_LYRICS');

    // 先朗讀中文說明
    if (ttsRef.current) {
      await ttsRef.current.speakText(`這句是：${currentVerse.chinese}`, 'zh');
    }

    // 短暫停頓
    await new Promise(resolve => setTimeout(resolve, 500));

    // 朗讀英文歌詞兩次
    if (ttsRef.current) {
      await ttsRef.current.speakText(currentVerse.lyrics, 'en');
      await new Promise(resolve => setTimeout(resolve, 600));
      await ttsRef.current.speakText(currentVerse.lyrics, 'en');
    }

    // 朗讀完成，開始播放影片
    await new Promise(resolve => setTimeout(resolve, 800));

    if (stepRef.current === 'READ_LYRICS') {
      setStep('PLAY_FIRST');
      youtubeRef.current?.playSegment();
    }
  };

  // 手動下一段
  const goToNextVerse = () => {
    if (!selectedSong) return;
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();

    if (currentVerseIndex < selectedSong.verses.length - 1) {
      setCurrentVerseIndex(prev => prev + 1);
      setStep('SHOW_LYRICS');
    } else {
      // 最後一段，播放完整歌曲
      setStep('FULL_SONG');
      setTimeout(() => {
        youtubeRef.current?.playSegment();
      }, 500);
    }
  };

  // 手動上一段
  const goToPrevVerse = () => {
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();

    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(prev => prev - 1);
      setStep('SHOW_LYRICS');
    }
  };

  // 返回歌曲選擇
  const backToSelect = () => {
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();
    setStep('SELECT');
    setSelectedSong(null);
    setCurrentVerseIndex(0);
  };

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
      <div className="play-status">
        {step === 'SHOW_LYRICS' && (
          <div className="status-ready">
            <span>📖 準備好了嗎？</span>
            <button
              className="play-button"
              onClick={startTeaching}
              disabled={!isPlayerReady}
            >
              ▶️ 開始學習
            </button>
          </div>
        )}
        {step === 'READ_LYRICS' && (
          <div className="status-reading">
            <span className="status-icon">🗣️</span>
            <span className="status-text">朗讀歌詞中...</span>
          </div>
        )}
        {step === 'PLAY_FIRST' && (
          <div className="status-listen">
            <span className="status-icon">🎧</span>
            <span className="status-text">第 1 次：先聽一遍</span>
          </div>
        )}
        {step === 'PLAY_SECOND' && (
          <div className="status-sing">
            <span className="status-icon">🎤</span>
            <span className="status-text">第 2 次：跟著唱！</span>
          </div>
        )}
        {step === 'FULL_SONG' && (
          <div className="status-full">
            <span className="status-icon">🎉</span>
            <span className="status-text">完整歌曲播放中...</span>
          </div>
        )}
      </div>

      {/* 控制按鈕 */}
      <div className="song-controls">
        {step !== 'FULL_SONG' && (
          <>
            <button
              className="control-btn prev"
              onClick={goToPrevVerse}
              disabled={currentVerseIndex === 0}
            >
              ⬅️ 上一段
            </button>
            <button
              className="control-btn next"
              onClick={goToNextVerse}
            >
              {currentVerseIndex === (selectedSong?.verses.length || 0) - 1
                ? '🎉 完整播放'
                : '下一段 ➡️'}
            </button>
          </>
        )}
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
