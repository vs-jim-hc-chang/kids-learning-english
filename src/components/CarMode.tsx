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

interface CarModeProps {
  onExit: () => void;
}

export function CarMode({ onExit }: CarModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState<CarModeStepType>(CarModeStep.IDLE);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseCountdown, setPauseCountdown] = useState(0);

  const youtubeRef = useRef<YouTubePlayerRef>(null);
  const ttsRef = useRef<TextToSpeechRef>(null);
  const pauseTimerRef = useRef<number | null>(null);

  const currentSentence = sentences[currentIndex];

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
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setStep(CarModeStep.IDLE);
    } else {
      // 全部播完
      setIsPlaying(false);
      setStep(CarModeStep.COMPLETE);
    }
  }, [currentIndex]);

  // 步驟 1: 播放中文引導
  const playChineseGuide = useCallback(async () => {
    setStep(CarModeStep.CHINESE_GUIDE);
    if (ttsRef.current) {
      await ttsRef.current.speakText(currentSentence.chineseGuide, 'zh');
    }
    // 短暫停頓後播放影片
    await new Promise(resolve => setTimeout(resolve, 500));
    setStep(CarModeStep.VIDEO_PLAY);
  }, [currentSentence.chineseGuide]);

  // 步驟 2: 影片播放結束後的回調
  const handleVideoSegmentEnd = useCallback(() => {
    if (step === CarModeStep.VIDEO_PLAY && isPlaying) {
      // 開始英文朗讀
      playEnglishTTS();
    }
  }, [step, isPlaying]);

  // 步驟 3: 播放英文朗讀
  const playEnglishTTS = useCallback(async () => {
    setStep(CarModeStep.ENGLISH_TTS);
    if (ttsRef.current) {
      // 朗讀兩次英文
      await ttsRef.current.speakText(currentSentence.english, 'en');
      await new Promise(resolve => setTimeout(resolve, 800));
      await ttsRef.current.speakText(currentSentence.english, 'en');
    }
    // 開始跟讀等待時間
    startRepeatPause();
  }, [currentSentence.english]);

  // 步驟 4: 開始跟讀等待
  const startRepeatPause = useCallback(() => {
    const duration = REPEAT_PAUSE_DURATION[currentSentence.difficulty];
    setPauseCountdown(duration);
    setStep(CarModeStep.REPEAT_PAUSE);

    clearPauseTimer();

    let remaining = duration;
    pauseTimerRef.current = window.setInterval(() => {
      remaining -= 1;
      setPauseCountdown(remaining);

      if (remaining <= 0) {
        clearPauseTimer();
        // 自動進入下一句
        if (isPlaying) {
          goToNext();
        }
      }
    }, 1000);
  }, [currentSentence.difficulty, clearPauseTimer, goToNext, isPlaying]);

  // 開始播放流程
  const startPlayback = useCallback(async () => {
    setIsPlaying(true);
    await playChineseGuide();

    // 播放影片片段
    if (youtubeRef.current) {
      youtubeRef.current.playSegment();
    }
  }, [playChineseGuide]);

  // 當步驟為 IDLE 且正在播放時，自動開始下一輪
  useEffect(() => {
    if (step === CarModeStep.IDLE && isPlaying) {
      startPlayback();
    }
  }, [step, isPlaying, startPlayback]);

  // 暫停/繼續
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      // 暫停
      setIsPlaying(false);
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
          youtubeRef.current?.playSegment();
        } else if (step === CarModeStep.REPEAT_PAUSE) {
          // 恢復倒數計時
          startRepeatPause();
        }
      }
    }
  }, [isPlaying, step, clearPauseTimer, startPlayback, startRepeatPause]);

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

    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setStep(CarModeStep.IDLE);
    }
  }, [clearPauseTimer, currentIndex]);

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
        <button className="exit-btn" onClick={onExit}>
          ← 返回
        </button>
        <h1>車上模式</h1>
        <div className="car-mode-progress">
          第 {currentIndex + 1} 句 / 共 {sentences.length} 句
        </div>
      </header>

      {/* YouTube 影片區域 */}
      <div className="car-mode-video">
        <YouTubePlayer
          ref={youtubeRef}
          videoId={currentSentence.videoId}
          startTime={currentSentence.startTime}
          endTime={currentSentence.endTime}
          isLooping={false}
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
    </div>
  );
}
