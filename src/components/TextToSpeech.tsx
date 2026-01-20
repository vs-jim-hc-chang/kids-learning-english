import { useState, useCallback, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';

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

// 語音偏好設定（按優先順序排列）
const VOICE_PREFERENCES = {
  en: [
    // Windows 11 Neural voices
    'Microsoft Aria Online (Natural)',
    'Microsoft Jenny Online (Natural)',
    'Microsoft Guy Online (Natural)',
    // macOS voices
    'Samantha',
    'Karen',
    'Daniel',
    // Chrome/Android
    'Google US English',
    // 備用
    'en-US',
    'en'
  ],
  zh: [
    // Windows 11 Neural voices (Taiwan)
    'Microsoft HsiaoChen Online (Natural)',
    'Microsoft YunJhe Online (Natural)',
    // Windows 11 Neural voices (China)
    'Microsoft Xiaoxiao Online (Natural)',
    'Microsoft Yunyang Online (Natural)',
    // macOS voices
    'Mei-Jia',
    'Ting-Ting',
    // Chrome/Android
    'Google 國語（臺灣）',
    'Google 普通话（中国大陆）',
    // 備用
    'zh-TW',
    'zh-CN',
    'zh'
  ]
};

// 找到最佳語音
function findBestVoice(voices: SpeechSynthesisVoice[], lang: 'en' | 'zh'): SpeechSynthesisVoice | null {
  const preferences = VOICE_PREFERENCES[lang];

  // 按偏好順序尋找
  for (const pref of preferences) {
    const found = voices.find(v =>
      v.name.includes(pref) ||
      v.lang.startsWith(pref)
    );
    if (found) return found;
  }

  // 如果都找不到，找任何符合語言的
  const langPrefix = lang === 'en' ? 'en' : 'zh';
  return voices.find(v => v.lang.startsWith(langPrefix)) || null;
}

export const TextToSpeech = forwardRef<TextToSpeechRef, TextToSpeechProps>(
  function TextToSpeech({ text, onSpeakStart, onSpeakEnd }, ref) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoices, setSelectedVoices] = useState<{en: string; zh: string}>({en: '', zh: ''});
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const isStoppedRef = useRef(false);

    // 載入語音列表
    useEffect(() => {
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);

          // 找到最佳語音並記錄
          const bestEn = findBestVoice(availableVoices, 'en');
          const bestZh = findBestVoice(availableVoices, 'zh');

          setSelectedVoices({
            en: bestEn?.name || '系統預設',
            zh: bestZh?.name || '系統預設'
          });

          console.log('Available voices:', availableVoices.map(v => `${v.name} (${v.lang})`));
          console.log('Selected EN voice:', bestEn?.name);
          console.log('Selected ZH voice:', bestZh?.name);
        }
      };

      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;

      return () => {
        speechSynthesis.onvoiceschanged = null;
      };
    }, []);

    // 停止播放
    const stop = useCallback(() => {
      isStoppedRef.current = true;
      speechSynthesis.cancel();
      utteranceRef.current = null;
      setIsSpeaking(false);
      setIsLoading(false);
    }, []);

    // 元件卸載時清理
    useEffect(() => {
      return () => {
        speechSynthesis.cancel();
      };
    }, []);

    // 使用 Web Speech API 朗讀
    const speakWithWebSpeech = useCallback((
      textToSpeak: string,
      lang: 'en' | 'zh',
      rate: number = 1
    ): Promise<void> => {
      return new Promise((resolve) => {
        // 重設停止標記
        isStoppedRef.current = false;

        // 先取消任何進行中的語音
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utteranceRef.current = utterance;

        // 設定語言
        utterance.lang = lang === 'en' ? 'en-US' : 'zh-TW';
        utterance.rate = rate;
        utterance.pitch = 1;
        utterance.volume = 1;

        // 選擇最佳語音
        const bestVoice = findBestVoice(voices, lang);
        if (bestVoice) {
          utterance.voice = bestVoice;
        }

        utterance.onend = () => {
          utteranceRef.current = null;
          resolve();
        };

        utterance.onerror = (event) => {
          utteranceRef.current = null;
          // 忽略 interrupted 錯誤（手動停止時會觸發）
          if (event.error !== 'interrupted') {
            console.error('Speech error:', event.error);
          }
          resolve();
        };

        // 檢查是否被停止
        if (isStoppedRef.current) {
          resolve();
          return;
        }

        speechSynthesis.speak(utterance);
      });
    }, [voices]);

    // 暴露方法給外部呼叫（供 CarMode 使用）
    useImperativeHandle(ref, () => ({
      speakText: async (textToSpeak: string, lang: 'en' | 'zh') => {
        const rate = lang === 'en' ? 0.85 : 0.95; // 英文稍慢，中文正常偏慢
        await speakWithWebSpeech(textToSpeak, lang, rate);
      },
      stop
    }), [speakWithWebSpeech, stop]);

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
        await speakWithWebSpeech("Please repeat after me", 'en', 1);

        if (isStoppedRef.current) return;

        // 2. 短暫停頓
        await new Promise(resolve => setTimeout(resolve, 500));

        if (isStoppedRef.current) return;

        // 3. 朗讀例句（較慢速度，英文）
        await speakWithWebSpeech(text, 'en', 0.8);

        if (isStoppedRef.current) return;

        // 4. 停頓後再朗讀一次
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (isStoppedRef.current) return;

        await speakWithWebSpeech(text, 'en', 0.8);
      } catch (error) {
        console.error('TTS error:', error);
      }

      setIsSpeaking(false);
      setIsLoading(false);
      onSpeakEnd?.();
    }, [text, isSpeaking, isLoading, speakWithWebSpeech, stop, onSpeakStart, onSpeakEnd]);

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
        await speakWithWebSpeech(text, 'en', 0.85);
      } catch (error) {
        console.error('TTS error:', error);
      }

      setIsSpeaking(false);
      setIsLoading(false);
      onSpeakEnd?.();
    }, [text, isSpeaking, isLoading, speakWithWebSpeech, stop, onSpeakStart, onSpeakEnd]);

    return (
      <div className="text-to-speech">
        {/* 語音資訊 */}
        <div className="voice-info">
          <span>🗣️ 英文：{selectedVoices.en || '載入中...'}</span>
          <span>🗣️ 中文：{selectedVoices.zh || '載入中...'}</span>
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
