import { useState, useCallback, useRef, useEffect } from 'react';
import { sentences } from '../data/sentences';
import type { Sentence } from '../data/sentences';
import { YouTubePlayer } from './YouTubePlayer';
import type { YouTubePlayerRef } from './YouTubePlayer';
import { TextToSpeech } from './TextToSpeech';
import type { TextToSpeechRef } from './TextToSpeech';

// 播放流程步驟
const CarModeStep = {
  IDLE: 'idle',              // 等待開始
  CHINESE_GUIDE: 'chinese',  // 中文引導
  VIDEO_PLAY: 'video',       // 影片播放
  ENGLISH_TTS: 'english',    // 英文朗讀
  REPEAT_PAUSE: 'pause',     // 等待跟讀
  COMPLETE: 'complete'       // 完成，準備下一句
} as const;

type CarModeStepType = typeof CarModeStep[keyof typeof CarModeStep];

// 根據難度決定跟讀等待時間（秒）
const REPEAT_PAUSE_DURATION: Record<Sentence['difficulty'], number> = {
  easy: 3,
  medium: 5,
  hard: 7
};

export function CarMode() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState<CarModeStepType>(CarModeStep.IDLE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseCountdown, setPauseCountdown] = useState(0);
  const [showSelector, setShowSelector] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const youtubeRef = useRef<YouTubePlayerRef>(null);
  const ttsRef = useRef<TextToSpeechRef>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const pendingPlayRef = useRef(false);  // 追蹤是否有待播放的請求

  // 用 ref 追蹤最新狀態，避免 closure 問題
  const stepRef = useRef(step);
  const isPlayingRef = useRef(isPlaying);
  const currentIndexRef = useRef(currentIndex);
  const currentSentenceRef = useRef(sentences[currentIndex]);

  // 同步更新 refs
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    currentSentenceRef.current = sentences[currentIndex];
    // 當句子改變時，重置 player ready 狀態（可能是不同影片）
    setIsPlayerReady(false);
  }, [currentIndex]);

  const currentSentence = sentences[currentIndex];

  // 當 player 準備好的回調
  const handlePlayerReady = useCallback(() => {
    setIsPlayerReady(true);
    // 如果有待播放的請求，立即播放
    if (pendingPlayRef.current && stepRef.current === CarModeStep.VIDEO_PLAY) {
      pendingPlayRef.current = false;
      youtubeRef.current?.playSegment();
    }
  }, []);

  // 步驟描述
  const stepDescriptions: Record<CarModeStepType, string> = {
    [CarModeStep.IDLE]: '準備開始',
    [CarModeStep.CHINESE_GUIDE]: '中文引導說明...',
    [CarModeStep.VIDEO_PLAY]: '播放影片片段...',
    [CarModeStep.ENGLISH_TTS]: '英文朗讀中...',
    [CarModeStep.REPEAT_PAUSE]: `跟讀時間 (${pauseCountdown}秒)`,
    [CarModeStep.COMPLETE]: '完成！'
  };

  // 清除暫停計時器
  const clearPauseTimer = useCallback(() => {
    if (pauseTimerRef.current) {
      clearInterval(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
  }, []);

  // 移動到下一句
  const goToNext = useCallback(() => {
    if (currentIndexRef.current < sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setStep(CarModeStep.IDLE);
    } else {
      // 全部播完
      setIsPlaying(false);
      setStep(CarModeStep.COMPLETE);
    }
  }, []);

  // 步驟 1: 播放中文引導
  const playChineseGuide = useCallback(async () => {
    if (!isPlayingRef.current) return;

    setStep(CarModeStep.CHINESE_GUIDE);
    if (ttsRef.current) {
      await ttsRef.current.speakText(currentSentenceRef.current.chineseGuide, 'zh');
    }

    // 檢查是否仍在播放
    if (!isPlayingRef.current) return;

    // 短暫停頓後播放影片
    await new Promise(resolve => setTimeout(resolve, 500));

    if (!isPlayingRef.current) return;

    setStep(CarModeStep.VIDEO_PLAY);
  }, []);

  // 步驟 4: 開始跟讀等待（移到前面避免依賴問題）
  const startRepeatPause = useCallback(() => {
    const duration = REPEAT_PAUSE_DURATION[currentSentenceRef.current.difficulty];
    setPauseCountdown(duration);
    setStep(CarModeStep.REPEAT_PAUSE);

    clearPauseTimer();

    let remaining = duration;
    pauseTimerRef.current = window.setInterval(() => {
      remaining -= 1;
      setPauseCountdown(remaining);

      if (remaining <= 0) {
        clearPauseTimer();
        // 自動進入下一句（使用 ref 取得最新值）
        if (isPlayingRef.current) {
          goToNext();
        }
      }
    }, 1000);
  }, [clearPauseTimer, goToNext]);

  // 步驟 3: 播放英文朗讀
  const playEnglishTTS = useCallback(async () => {
    if (!isPlayingRef.current) return;

    setStep(CarModeStep.ENGLISH_TTS);
    if (ttsRef.current) {
      // 朗讀兩次英文
      await ttsRef.current.speakText(currentSentenceRef.current.english, 'en');
      if (!isPlayingRef.current) return;
      await new Promise(resolve => setTimeout(resolve, 800));
      if (!isPlayingRef.current) return;
      await ttsRef.current.speakText(currentSentenceRef.current.english, 'en');
    }
    // 開始跟讀等待時間
    if (isPlayingRef.current) {
      startRepeatPause();
    }
  }, [startRepeatPause]);

  // 步驟 2: 影片播放結束後的回調
  const handleVideoSegmentEnd = useCallback(() => {
    // 使用 ref 取得最新狀態
    if (stepRef.current === CarModeStep.VIDEO_PLAY && isPlayingRef.current) {
      // 開始英文朗讀
      playEnglishTTS();
    }
  }, [playEnglishTTS]);

  // 開始播放流程
  const startPlayback = useCallback(async () => {
    setIsPlaying(true);
    pendingPlayRef.current = false;
    await playChineseGuide();

    // 檢查是否仍在播放
    if (!isPlayingRef.current) return;

    // 播放影片片段
    if (youtubeRef.current) {
      // 如果 player 還沒準備好，標記為待播放
      if (!isPlayerReady) {
        pendingPlayRef.current = true;
      } else {
        youtubeRef.current.playSegment();
      }
    }
  }, [playChineseGuide, isPlayerReady]);

  // 當步驟為 IDLE 且正在播放時，自動開始下一輪
  useEffect(() => {
    if (step === CarModeStep.IDLE && isPlaying) {
      // 使用 setTimeout 避免在 render 期間調用 setState
      const timeoutId = setTimeout(() => {
        if (isPlayingRef.current && stepRef.current === CarModeStep.IDLE) {
          startPlayback();
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [step, isPlaying, startPlayback]);

  // 暫停/繼續
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      // 暫停
      setIsPlaying(false);
      pendingPlayRef.current = false;
      clearPauseTimer();
      ttsRef.current?.stop();
      youtubeRef.current?.pauseVideo();
    } else {
      // 繼續或開始
      if (step === CarModeStep.IDLE) {
        startPlayback();
      } else {
        setIsPlaying(true);
        // 根據當前步驟恢復
        if (step === CarModeStep.VIDEO_PLAY) {
          if (isPlayerReady) {
            youtubeRef.current?.playSegment();
          } else {
            pendingPlayRef.current = true;
          }
        } else if (step === CarModeStep.REPEAT_PAUSE) {
          // 恢復倒數計時
          startRepeatPause();
        }
      }
    }
  }, [isPlaying, step, isPlayerReady, clearPauseTimer, startPlayback, startRepeatPause]);

  // 跳到下一句
  const skipToNext = useCallback(() => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();
    goToNext();
  }, [clearPauseTimer, goToNext]);

  // 跳到上一句
  const skipToPrevious = useCallback(() => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();

    if (currentIndexRef.current > 0) {
      setCurrentIndex(prev => prev - 1);
      setStep(CarModeStep.IDLE);
    }
  }, [clearPauseTimer]);

  // 跳到指定句子
  const jumpToSentence = useCallback((index: number) => {
    clearPauseTimer();
    ttsRef.current?.stop();
    youtubeRef.current?.pauseVideo();
    setIsPlaying(false);
    setCurrentIndex(index);
    setStep(CarModeStep.IDLE);
    setShowSelector(false);
  }, [clearPauseTimer]);

  // 清理
  useEffect(() => {
    return () => {
      clearPauseTimer();
    };
  }, [clearPauseTimer]);

  return (
    <div className="car-mode">
      {/* 頂部標題 */}
      <header className="car-mode-header">
        <h1>🐷 佩佩豬英文跟讀</h1>
        <button
          className="select-btn"
          onClick={() => setShowSelector(true)}
        >
          📋 第 {currentIndex + 1}/{sentences.length}
        </button>
      </header>

      {/* YouTube 影片區域 */}
      <div className="car-mode-video">
        <YouTubePlayer
          ref={youtubeRef}
          videoId={currentSentence.videoId}
          startTime={currentSentence.startTime}
          endTime={currentSentence.endTime}
          isLooping={false}
          onReady={handlePlayerReady}
          onSegmentEnd={handleVideoSegmentEnd}
        />
      </div>

      {/* 句子顯示區 */}
      <div className="car-mode-sentence">
        <div className="car-mode-english">{currentSentence.english}</div>
        <div className="car-mode-chinese">{currentSentence.chinese}</div>
      </div>

      {/* 當前步驟指示 */}
      <div className={`car-mode-status step-${step}`}>
        {stepDescriptions[step]}
      </div>

      {/* 隱藏的 TTS 元件（用於語音播放） */}
      <div style={{ display: 'none' }}>
        <TextToSpeech
          ref={ttsRef}
          text={currentSentence.english}
        />
      </div>

      {/* 控制按鈕區 */}
      <div className="car-mode-controls">
        <button
          className="car-btn prev-btn"
          onClick={skipToPrevious}
          disabled={currentIndex === 0}
        >
          ⏮️ 上一句
        </button>

        <button
          className={`car-btn main-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlayPause}
        >
          {isPlaying ? '⏸️ 暫停' : '▶️ 開始播放'}
        </button>

        <button
          className="car-btn next-btn"
          onClick={skipToNext}
          disabled={currentIndex >= sentences.length - 1}
        >
          ⏭️ 下一句
        </button>
      </div>

      {/* 難度指示 */}
      <div className="car-mode-difficulty">
        難度：
        <span className={`difficulty-badge ${currentSentence.difficulty}`}>
          {currentSentence.difficulty === 'easy' ? '簡單' :
           currentSentence.difficulty === 'medium' ? '中等' : '困難'}
        </span>
      </div>

      {/* 句子選擇彈窗 */}
      {showSelector && (
        <div className="sentence-selector-overlay" onClick={() => setShowSelector(false)}>
          <div className="sentence-selector-modal" onClick={e => e.stopPropagation()}>
            <div className="selector-header">
              <h2>選擇句子</h2>
              <button className="close-btn" onClick={() => setShowSelector(false)}>✕</button>
            </div>
            <div className="selector-list">
              {sentences.map((sentence, index) => (
                <button
                  key={sentence.id}
                  className={`selector-item ${index === currentIndex ? 'active' : ''} ${sentence.difficulty}`}
                  onClick={() => jumpToSentence(index)}
                >
                  <span className="selector-number">{index + 1}</span>
                  <div className="selector-content">
                    <div className="selector-english">{sentence.english}</div>
                    <div className="selector-chinese">{sentence.chinese}</div>
                  </div>
                  <span className={`selector-difficulty ${sentence.difficulty}`}>
                    {sentence.difficulty === 'easy' ? '簡' :
                     sentence.difficulty === 'medium' ? '中' : '難'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
