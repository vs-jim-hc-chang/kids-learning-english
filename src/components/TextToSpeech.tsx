import { useState, useCallback, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';
import { Communicate } from 'edge-tts-universal';

interface TextToSpeechProps {
  text: string;
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
}

// 暴露給外部呼叫的方法
export interface TextToSpeechRef {
  speakText: (text: string, lang: 'en' | 'zh') => Promise<void>;
  stop: () => void;
}

// Edge TTS 語音設定
const VOICE_CONFIG = {
  // 台灣女聲 - 曉臻（自然親切）
  zh: 'zh-TW-HsiaoChenNeural',
  // 美式英文女聲 - Jenny（自然流暢）
  en: 'en-US-JennyNeural'
};

export const TextToSpeech = forwardRef<TextToSpeechRef, TextToSpeechProps>(
  function TextToSpeech({ text, onSpeakStart, onSpeakEnd }, ref) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioUrlRef = useRef<string | null>(null);
    const isStoppedRef = useRef(false);

    // 清理 Object URL
    const cleanupAudioUrl = useCallback(() => {
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    }, []);

    // 停止播放
    const stop = useCallback(() => {
      isStoppedRef.current = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      cleanupAudioUrl();
      setIsSpeaking(false);
      setIsLoading(false);
    }, [cleanupAudioUrl]);

    // 元件卸載時清理
    useEffect(() => {
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
        cleanupAudioUrl();
      };
    }, [cleanupAudioUrl]);

    // 使用 Edge TTS 朗讀
    const speakWithEdgeTTS = useCallback(async (
      textToSpeak: string,
      lang: 'en' | 'zh',
      rate: number = 0
    ): Promise<void> => {
      // 重設停止標記
      isStoppedRef.current = false;

      try {
        const voice = VOICE_CONFIG[lang];

        // 設定語速 rate: -50 到 +100，0 是正常速度
        const rateStr = rate >= 0 ? `+${rate}%` : `${rate}%`;

        // 建立 Communicate 實例
        const communicate = new Communicate(textToSpeak, {
          voice,
          rate: rateStr,
          pitch: '+0Hz',
          volume: '+0%'
        });

        // 收集音訊資料
        const audioChunks: Uint8Array[] = [];

        // 串流取得音訊（檢查是否被停止）
        for await (const chunk of communicate.stream()) {
          if (isStoppedRef.current) {
            return; // 提前結束
          }
          if (chunk.type === 'audio' && chunk.data) {
            audioChunks.push(new Uint8Array(chunk.data));
          }
        }

        // 再次檢查是否被停止
        if (isStoppedRef.current) {
          return;
        }

        // 合併音訊資料
        const totalLength = audioChunks.reduce((acc, chunk) => acc + chunk.length, 0);
        const audioData = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of audioChunks) {
          audioData.set(chunk, offset);
          offset += chunk.length;
        }

        // 建立 Blob 和播放
        const audioBlob = new Blob([audioData], { type: 'audio/mpeg' });

        // 清理舊的 URL
        cleanupAudioUrl();

        const audioUrl = URL.createObjectURL(audioBlob);
        audioUrlRef.current = audioUrl;

        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        // 使用 Promise 等待播放完成
        await new Promise<void>((resolve) => {
          audio.onended = () => {
            cleanupAudioUrl();
            audioRef.current = null;
            resolve();
          };

          audio.onerror = () => {
            cleanupAudioUrl();
            audioRef.current = null;
            console.error('Audio playback error');
            resolve();
          };

          audio.play().catch(() => {
            cleanupAudioUrl();
            audioRef.current = null;
            resolve();
          });
        });
      } catch (error) {
        console.error('Edge TTS error:', error);
        // 發生錯誤時不拋出，避免流程中斷
      }
    }, [cleanupAudioUrl]);

    // 暴露方法給外部呼叫（供 CarMode 使用）
    useImperativeHandle(ref, () => ({
      speakText: async (textToSpeak: string, lang: 'en' | 'zh') => {
        const rate = lang === 'en' ? -15 : -5; // 英文稍慢，中文正常偏慢
        await speakWithEdgeTTS(textToSpeak, lang, rate);
      },
      stop
    }), [speakWithEdgeTTS, stop]);

    // 完整朗讀流程：提示語 + 例句
    const handleSpeak = useCallback(async () => {
      if (isSpeaking || isLoading) {
        stop();
        return;
      }

      setIsLoading(true);
      setIsSpeaking(true);
      onSpeakStart?.();

      try {
        // 1. 說 "Please repeat after me"（英文提示）
        await speakWithEdgeTTS("Please repeat after me", 'en', 0);

        // 2. 短暫停頓
        await new Promise(resolve => setTimeout(resolve, 500));

        // 3. 朗讀例句（較慢速度，英文）
        await speakWithEdgeTTS(text, 'en', -20);

        // 4. 停頓後再朗讀一次
        await new Promise(resolve => setTimeout(resolve, 1000));
        await speakWithEdgeTTS(text, 'en', -20);
      } catch (error) {
        console.error('TTS error:', error);
      }

      setIsSpeaking(false);
      setIsLoading(false);
      onSpeakEnd?.();
    }, [text, isSpeaking, isLoading, speakWithEdgeTTS, stop, onSpeakStart, onSpeakEnd]);

    // 只朗讀例句一次
    const handleSpeakOnce = useCallback(async () => {
      if (isSpeaking || isLoading) {
        stop();
        return;
      }

      setIsLoading(true);
      setIsSpeaking(true);
      onSpeakStart?.();

      try {
        await speakWithEdgeTTS(text, 'en', -15);
      } catch (error) {
        console.error('TTS error:', error);
      }

      setIsSpeaking(false);
      setIsLoading(false);
      onSpeakEnd?.();
    }, [text, isSpeaking, isLoading, speakWithEdgeTTS, stop, onSpeakStart, onSpeakEnd]);

    return (
      <div className="text-to-speech">
        {/* 語音資訊 */}
        <div className="voice-info">
          <span>🗣️ 英文：Jenny (美式)</span>
          <span>🗣️ 中文：曉臻 (台灣)</span>
        </div>

        <div className="tts-buttons">
          <button
            onClick={handleSpeak}
            className={`tts-btn main-speak ${isSpeaking ? 'speaking' : ''}`}
            disabled={isLoading && !isSpeaking}
          >
            {isLoading && !isSpeaking ? '⏳ 載入中...' : isSpeaking ? '🔊 朗讀中...' : '🗣️ 跟著說'}
          </button>

          <button
            onClick={handleSpeakOnce}
            className="tts-btn quick-speak"
            disabled={isSpeaking || isLoading}
          >
            🔈 再聽一次
          </button>
        </div>
      </div>
    );
  }
);
