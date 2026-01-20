import { useEffect, useRef, useCallback, useState, forwardRef, useImperativeHandle } from 'react';

// YouTube IFrame API 類型定義
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  destroy: () => void;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars?: {
    start?: number;
    autoplay?: number;
    controls?: number;
    modestbranding?: number;
    rel?: number;
    playsinline?: number;
  };
  events?: {
    onReady?: () => void;
  };
}

interface YTNamespace {
  Player: new (element: HTMLElement, options: YTPlayerOptions) => YTPlayer;
}

declare global {
  interface Window {
    YT: YTNamespace;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  startTime: number;
  endTime: number;
  isLooping: boolean;
  onReady?: () => void;
  onSegmentEnd?: () => void;  // 片段播放完畢時觸發（車上模式用）
}

// 暴露給外部呼叫的方法
export interface YouTubePlayerRef {
  playSegment: () => void;
  pauseVideo: () => void;
  isPlaying: () => boolean;
}

export const YouTubePlayer = forwardRef<YouTubePlayerRef, YouTubePlayerProps>(
  function YouTubePlayer({
    videoId,
    startTime,
    endTime,
    isLooping,
    onReady,
    onSegmentEnd
  }, ref) {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const loopIntervalRef = useRef<number | null>(null);
  const segmentCheckRef = useRef<number | null>(null);  // 用於檢測片段結束
  const [isAPIReady, setIsAPIReady] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);

  // 用 ref 來追蹤最新的時間值，避免 stale closure
  const startTimeRef = useRef(startTime);
  const endTimeRef = useRef(endTime);
  const onSegmentEndRef = useRef(onSegmentEnd);

  // 更新 ref 當 props 改變
  useEffect(() => {
    startTimeRef.current = startTime;
    endTimeRef.current = endTime;
    onSegmentEndRef.current = onSegmentEnd;
  }, [startTime, endTime, onSegmentEnd]);

  // 載入 YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };
  }, []);

  // 初始化播放器（只在 videoId 改變時重建）
  useEffect(() => {
    if (!isAPIReady || !containerRef.current) return;

    // 清除舊的循環
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }

    // 清除舊播放器
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
      setIsPlayerReady(false);
    }

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId,
      playerVars: {
        start: Math.floor(startTimeRef.current),
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: () => {
          setIsPlayerReady(true);
          onReady?.();
        },
      },
    });

    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
    };
  }, [isAPIReady, videoId, onReady]);

  // 當句子切換時（startTime 改變），跳到新位置並停止播放
  useEffect(() => {
    if (!playerRef.current || !isPlayerReady) return;

    // 停止當前播放
    playerRef.current.pauseVideo();

    // 跳到新的起始位置
    playerRef.current.seekTo(startTime, true);

    // 如果正在循環，清除舊的循環
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
  }, [startTime, isPlayerReady]);

  // A-B 循環邏輯
  useEffect(() => {
    if (!playerRef.current || !isPlayerReady) return;

    // 清除舊的循環
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }

    if (!isLooping) {
      return;
    }

    // 開始循環：跳到起始位置並播放
    playerRef.current.seekTo(startTimeRef.current, true);
    playerRef.current.playVideo();

    // 檢查是否超過結束時間
    loopIntervalRef.current = window.setInterval(() => {
      if (!playerRef.current) return;

      try {
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime >= endTimeRef.current) {
          playerRef.current.seekTo(startTimeRef.current, true);
        }
      } catch (e) {
        // 播放器可能還沒準備好
      }
    }, 100);

    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
        loopIntervalRef.current = null;
      }
    };
  }, [isLooping, isPlayerReady]);

  // 停止片段結束檢測
  const stopSegmentCheck = useCallback(() => {
    if (segmentCheckRef.current) {
      clearInterval(segmentCheckRef.current);
      segmentCheckRef.current = null;
    }
  }, []);

  // 播放片段並監聽結束
  const playSegment = useCallback(() => {
    if (!playerRef.current || !isPlayerReady) return;

    // 清除舊的檢測
    stopSegmentCheck();

    playerRef.current.seekTo(startTimeRef.current, true);
    playerRef.current.playVideo();
    setIsCurrentlyPlaying(true);

    // 開始檢測片段是否結束（用於車上模式）
    segmentCheckRef.current = window.setInterval(() => {
      if (!playerRef.current) return;

      try {
        const currentTime = playerRef.current.getCurrentTime();
        // 當播放超過結束時間時觸發 onSegmentEnd
        if (currentTime >= endTimeRef.current) {
          stopSegmentCheck();
          playerRef.current.pauseVideo();
          setIsCurrentlyPlaying(false);
          onSegmentEndRef.current?.();
        }
      } catch (e) {
        // 播放器可能還沒準備好
      }
    }, 100);
  }, [isPlayerReady, stopSegmentCheck]);

  const pauseVideo = useCallback(() => {
    if (!playerRef.current) return;
    stopSegmentCheck();
    playerRef.current.pauseVideo();
    setIsCurrentlyPlaying(false);
  }, [stopSegmentCheck]);

  // 暴露方法給外部呼叫（供 CarMode 使用）
  useImperativeHandle(ref, () => ({
    playSegment,
    pauseVideo,
    isPlaying: () => isCurrentlyPlaying
  }), [playSegment, pauseVideo, isCurrentlyPlaying]);

  // 清理
  useEffect(() => {
    return () => {
      stopSegmentCheck();
    };
  }, [stopSegmentCheck]);

  return (
    <div className="youtube-player-container">
      <div
        ref={containerRef}
        className="youtube-player"
        style={{ width: '100%', aspectRatio: '16/9' }}
      />
      <div className="player-controls">
        <button onClick={playSegment} className="control-btn play-btn">
          ▶️ 播放片段
        </button>
        <button onClick={pauseVideo} className="control-btn pause-btn">
          ⏸️ 暫停
        </button>
      </div>
    </div>
  );
});
