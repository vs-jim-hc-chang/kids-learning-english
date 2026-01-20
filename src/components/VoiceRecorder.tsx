import { useState, useRef, useCallback } from 'react';

interface VoiceRecorderProps {
  onRecordingComplete?: (audioUrl: string) => void;
}

export function VoiceRecorder({ onRecordingComplete }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        onRecordingComplete?.(url);

        // 停止所有音軌
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // 計時器
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      // 自動停止（最多 10 秒）
      setTimeout(() => {
        if (mediaRecorderRef.current?.state === 'recording') {
          stopRecording();
        }
      }, 10000);
    } catch (err) {
      console.error('無法存取麥克風:', err);
      alert('請允許使用麥克風來錄音！');
    }
  }, [onRecordingComplete]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, []);

  const playRecording = useCallback(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  }, [audioUrl]);

  const clearRecording = useCallback(() => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setRecordingTime(0);
  }, [audioUrl]);

  return (
    <div className="voice-recorder">
      <div className="recorder-controls">
        {!isRecording ? (
          <button onClick={startRecording} className="record-btn">
            🎤 開始錄音
          </button>
        ) : (
          <button onClick={stopRecording} className="record-btn recording">
            ⏹️ 停止 ({recordingTime}秒)
          </button>
        )}
      </div>

      {audioUrl && (
        <div className="playback-controls">
          <button onClick={playRecording} className="playback-btn">
            🔊 聽聽看
          </button>
          <button onClick={clearRecording} className="clear-btn">
            🗑️ 清除
          </button>
        </div>
      )}

      {isRecording && (
        <div className="recording-indicator">
          <span className="pulse-dot"></span>
          錄音中...
        </div>
      )}
    </div>
  );
}
