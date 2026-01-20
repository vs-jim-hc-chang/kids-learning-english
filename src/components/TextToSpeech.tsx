import { useState, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';

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

// 推薦的英文女生語音列表
const ENGLISH_FEMALE_VOICES = [
  'Samantha',  // 美式英語，最自然
  'Karen',     // 澳洲英語，親切
  'Flo',       // 年輕女聲
  'Shelley',   // 溫和女聲
  'Sandy',     // 女聲
  'Moira',     // 愛爾蘭英語
  'Kathy',     // 美式英語
  'Tessa',     // 南非英語
];

// 推薦的中文女生語音列表
const CHINESE_FEMALE_VOICES = [
  'Meijia',    // 台灣中文
  'Tingting',  // 中國中文
  'Sinji',     // 廣東話
];

export const TextToSpeech = forwardRef<TextToSpeechRef, TextToSpeechProps>(
  function TextToSpeech({ text, onSpeakStart, onSpeakEnd }, ref) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedEnglishVoice, setSelectedEnglishVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [selectedChineseVoice, setSelectedChineseVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [availableEnglishVoices, setAvailableEnglishVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [availableChineseVoices, setAvailableChineseVoices] = useState<SpeechSynthesisVoice[]>([]);

  // 載入可用的語音
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);

      // 篩選英語女聲
      const englishVoices = allVoices.filter(voice => {
        if (!voice.lang.startsWith('en')) return false;
        return ENGLISH_FEMALE_VOICES.some(name =>
          voice.name.toLowerCase().includes(name.toLowerCase())
        );
      });
      setAvailableEnglishVoices(englishVoices);

      // 篩選中文女聲 (zh-TW, zh-CN, zh-HK)
      const chineseVoices = allVoices.filter(voice => {
        if (!voice.lang.startsWith('zh')) return false;
        // 優先選擇推薦的語音，否則接受所有中文語音
        const isRecommended = CHINESE_FEMALE_VOICES.some(name =>
          voice.name.toLowerCase().includes(name.toLowerCase())
        );
        return isRecommended || voice.lang.startsWith('zh');
      });
      setAvailableChineseVoices(chineseVoices);

      // 預設選擇英文語音 Samantha
      const defaultEnglishVoice = englishVoices.find(v => v.name === 'Samantha')
        || englishVoices[0]
        || allVoices.find(v => v.lang.startsWith('en'));
      if (defaultEnglishVoice && !selectedEnglishVoice) {
        setSelectedEnglishVoice(defaultEnglishVoice);
      }

      // 預設選擇中文語音（優先台灣中文）
      const defaultChineseVoice = chineseVoices.find(v => v.lang === 'zh-TW')
        || chineseVoices.find(v => v.name.toLowerCase().includes('meijia'))
        || chineseVoices[0]
        || allVoices.find(v => v.lang.startsWith('zh'));
      if (defaultChineseVoice && !selectedChineseVoice) {
        setSelectedChineseVoice(defaultChineseVoice);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // 處理英文語音選擇
  const handleEnglishVoiceChange = useCallback((voiceName: string) => {
    const voice = voices.find(v => v.name === voiceName);
    if (voice) {
      setSelectedEnglishVoice(voice);
    }
  }, [voices]);

  // 處理中文語音選擇
  const handleChineseVoiceChange = useCallback((voiceName: string) => {
    const voice = voices.find(v => v.name === voiceName);
    if (voice) {
      setSelectedChineseVoice(voice);
    }
  }, [voices]);

  // 通用朗讀功能（可指定語言）
  const speakWithLang = useCallback((textToSpeak: string, lang: 'en' | 'zh', rate: number = 0.8) => {
    return new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      const voice = lang === 'en' ? selectedEnglishVoice : selectedChineseVoice;
      if (voice) {
        utterance.voice = voice;
      }

      // 中文語速稍微慢一點，更清楚
      utterance.rate = lang === 'zh' ? Math.max(rate - 0.1, 0.5) : rate;
      utterance.pitch = lang === 'zh' ? 1.0 : 1.1;
      utterance.volume = 1;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  }, [selectedEnglishVoice, selectedChineseVoice]);

  // 停止朗讀
  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  // 暴露方法給外部呼叫（供 CarMode 使用）
  useImperativeHandle(ref, () => ({
    speakText: (textToSpeak: string, lang: 'en' | 'zh') => {
      return speakWithLang(textToSpeak, lang, lang === 'en' ? 0.7 : 0.85);
    },
    stop
  }), [speakWithLang, stop]);

  // 完整朗讀流程：提示語 + 例句
  const handleSpeak = useCallback(async () => {
    if (isSpeaking) {
      stop();
      return;
    }

    setIsSpeaking(true);
    onSpeakStart?.();

    // 1. 說 "Please repeat after me"（英文提示）
    await speakWithLang("Please repeat after me", 'en', 0.9);

    // 2. 短暫停頓
    await new Promise(resolve => setTimeout(resolve, 500));

    // 3. 朗讀例句（較慢速度，英文）
    await speakWithLang(text, 'en', 0.7);

    // 4. 停頓後再朗讀一次
    await new Promise(resolve => setTimeout(resolve, 1000));
    await speakWithLang(text, 'en', 0.7);

    setIsSpeaking(false);
    onSpeakEnd?.();
  }, [text, isSpeaking, speakWithLang, stop, onSpeakStart, onSpeakEnd]);

  // 只朗讀例句一次
  const handleSpeakOnce = useCallback(async () => {
    if (isSpeaking) {
      stop();
      return;
    }

    setIsSpeaking(true);
    await speakWithLang(text, 'en', 0.75);
    setIsSpeaking(false);
  }, [text, isSpeaking, speakWithLang, stop]);

  return (
    <div className="text-to-speech">
      {/* 英文語音選擇 */}
      {availableEnglishVoices.length > 1 && (
        <div className="voice-selector">
          <label>👩‍🏫 英文老師：</label>
          <select
            value={selectedEnglishVoice?.name || ''}
            onChange={(e) => handleEnglishVoiceChange(e.target.value)}
            disabled={isSpeaking}
          >
            {availableEnglishVoices.map(voice => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 中文語音選擇（如果有多個選項才顯示） */}
      {availableChineseVoices.length > 1 && (
        <div className="voice-selector">
          <label>👩 中文老師：</label>
          <select
            value={selectedChineseVoice?.name || ''}
            onChange={(e) => handleChineseVoiceChange(e.target.value)}
            disabled={isSpeaking}
          >
            {availableChineseVoices.map(voice => (
              <option key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="tts-buttons">
        <button
          onClick={handleSpeak}
          className={`tts-btn main-speak ${isSpeaking ? 'speaking' : ''}`}
          disabled={voices.length === 0}
        >
          {isSpeaking ? '🔊 朗讀中...' : '🗣️ 跟著說'}
        </button>

        <button
          onClick={handleSpeakOnce}
          className="tts-btn quick-speak"
          disabled={isSpeaking || voices.length === 0}
        >
          🔈 再聽一次
        </button>
      </div>

      {voices.length === 0 && (
        <div className="tts-warning">
          ⚠️ 您的瀏覽器不支援語音功能
        </div>
      )}
    </div>
  );
});
