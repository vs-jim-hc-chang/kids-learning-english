import { useEffect, useRef, useCallback, useState, forwardRef, useImperativeHandle } from 'react';

// YouTube Player 狀態常數
const YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};

// YouTube IFrame API 類型定義
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

interface YTStateChangeEvent {
  data: number;
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
    onStateChange?: (event: YTStateChangeEvent) => void;
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
  const playRetryRef = useRef<number | null>(null);  // 用於自動重試播放
  const [isAPIReady, setIsAPIReady] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
  const actualPlayerStateRef = useRef<number>(YT_STATE.UNSTARTED);  // 追蹤實際播放狀態
  const shouldBePlayingRef = useRef<boolean>(false);  // 追蹤是否應該在播放

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

    // 清除所有計時器和狀態
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }

    if (segmentCheckRef.current) {
      clearInterval(segmentCheckRef.current);
      segmentCheckRef.current = null;
    }

    if (playRetryRef.current) {
      clearTimeout(playRetryRef.current);
      playRetryRef.current = null;
    }

    setIsCurrentlyPlaying(false);
    shouldBePlayingRef.current = false;
    actualPlayerStateRef.current = YT_STATE.UNSTARTED;

    // 清除舊播放器
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch {
        console.warn('Error destroying player');
      }
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
        onStateChange: (event: YTStateChangeEvent) => {
          actualPlayerStateRef.current = event.data;

          // 如果應該在播放但實際上沒有播放，自動重試
          if (shouldBePlayingRef.current) {
            const isActuallyPlaying = event.data === YT_STATE.PLAYING || event.data === YT_STATE.BUFFERING;
            if (!isActuallyPlaying && event.data !== YT_STATE.ENDED) {
              // 狀態變成暫停或停止，但我們需要它播放
              console.log('Auto-retry: Video should be playing but state is', event.data);
              // 使用 timeout 避免無限循環
              if (playRetryRef.current) {
                clearTimeout(playRetryRef.current);
              }
              playRetryRef.current = window.setTimeout(() => {
                if (playerRef.current && shouldBePlayingRef.current) {
                  try {
                    playerRef.current.playVideo();
                  } catch {
                    console.warn('Retry play failed');
                  }
                }
              }, 500);
            }
          }
        },
      },
    });

    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
        loopIntervalRef.current = null;
      }
      if (segmentCheckRef.current) {
        clearInterval(segmentCheckRef.current);
        segmentCheckRef.current = null;
      }
      if (playRetryRef.current) {
        clearTimeout(playRetryRef.current);
        playRetryRef.current = null;
      }
      shouldBePlayingRef.current = false;
      // 組件卸載時銷毀播放器
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // 忽略銷毀錯誤
        }
        playerRef.current = null;
      }
    };
  }, [isAPIReady, videoId, onReady]);

  // 停止片段結束檢測
  const stopSegmentCheck = useCallback(() => {
    if (segmentCheckRef.current) {
      clearInterval(segmentCheckRef.current);
      segmentCheckRef.current = null;
    }
  }, []);

  // 當句子切換時（startTime 改變），跳到新位置並停止播放
  useEffect(() => {
    if (!playerRef.current || !isPlayerReady) return;

    // 停止所有播放活動
    stopSegmentCheck();
    shouldBePlayingRef.current = false;
    if (playRetryRef.current) {
      clearTimeout(playRetryRef.current);
      playRetryRef.current = null;
    }
    setIsCurrentlyPlaying(false);

    try {
      // 確認 player 方法存在再呼叫（避免初始化中的錯誤）
      if (typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
      if (typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(startTime, true);
      }
    } catch {
      // 播放器可能還在初始化中
      console.warn('Player not ready yet');
    }

    // 如果正在循環，清除舊的循環
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
  }, [startTime, isPlayerReady, stopSegmentCheck]);

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
    try {
      if (typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(startTimeRef.current, true);
      }
      if (typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
    } catch {
      // 播放器可能還沒準備好
      return;
    }

    // 檢查是否超過結束時間
    loopIntervalRef.current = window.setInterval(() => {
      if (!playerRef.current) return;

      try {
        const currentTime = playerRef.current.getCurrentTime();
        if (currentTime >= endTimeRef.current) {
          if (typeof playerRef.current.seekTo === 'function') {
            playerRef.current.seekTo(startTimeRef.current, true);
          }
        }
      } catch {
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

  // 播放片段並監聽結束
  const playSegment = useCallback(() => {
    if (!playerRef.current || !isPlayerReady) return;

    // 清除舊的檢測和重試
    stopSegmentCheck();
    if (playRetryRef.current) {
      clearTimeout(playRetryRef.current);
      playRetryRef.current = null;
    }

    // 標記應該在播放
    shouldBePlayingRef.current = true;

    try {
      if (typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(startTimeRef.current, true);
      }
      if (typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
      setIsCurrentlyPlaying(true);
    } catch {
      // 播放器可能還沒準備好
      return;
    }

    // 額外的主動檢查：1秒後確認是否真的在播放
    playRetryRef.current = window.setTimeout(() => {
      if (!playerRef.current || !shouldBePlayingRef.current) return;

      try {
        const state = playerRef.current.getPlayerState();
        const isActuallyPlaying = state === YT_STATE.PLAYING || state === YT_STATE.BUFFERING;

        if (!isActuallyPlaying) {
          console.log('Proactive check: Video not playing, retrying... State:', state);
          playerRef.current.seekTo(startTimeRef.current, true);
          playerRef.current.playVideo();
        }
      } catch {
        console.warn('Proactive check failed');
      }
    }, 1000);

    // 開始檢測片段是否結束（用於車上模式）
    segmentCheckRef.current = window.setInterval(() => {
      if (!playerRef.current) return;

      try {
        const currentTime = playerRef.current.getCurrentTime();
        // 當播放超過結束時間時觸發 onSegmentEnd
        if (currentTime >= endTimeRef.current) {
          stopSegmentCheck();
          shouldBePlayingRef.current = false;  // 片段結束，不再需要播放
          if (playRetryRef.current) {
            clearTimeout(playRetryRef.current);
            playRetryRef.current = null;
          }
          if (typeof playerRef.current.pauseVideo === 'function') {
            playerRef.current.pauseVideo();
          }
          setIsCurrentlyPlaying(false);
          onSegmentEndRef.current?.();
        }
      } catch {
        // 播放器可能還沒準備好
      }
    }, 100);
  }, [isPlayerReady, stopSegmentCheck]);

  const pauseVideo = useCallback(() => {
    stopSegmentCheck();
    shouldBePlayingRef.current = false;  // 標記不需要播放
    if (playRetryRef.current) {
      clearTimeout(playRetryRef.current);
      playRetryRef.current = null;
    }
    if (!playerRef.current) return;
    try {
      if (typeof playerRef.current.pauseVideo === 'function') {
        playerRef.current.pauseVideo();
      }
    } catch {
      // 播放器可能還沒準備好
    }
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
      if (playRetryRef.current) {
        clearTimeout(playRetryRef.current);
        playRetryRef.current = null;
      }
      shouldBePlayingRef.current = false;
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
