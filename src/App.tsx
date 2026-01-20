import { useState, useCallback } from 'react';
import { sentences } from './data/sentences';
import type { Sentence } from './data/sentences';
import { YouTubePlayer } from './components/YouTubePlayer';
import { TextToSpeech } from './components/TextToSpeech';
import { SentenceCard } from './components/SentenceCard';
import { CarMode } from './components/CarMode';
import './App.css';

type AppMode = 'practice' | 'car';

function App() {
  const [currentSentence, setCurrentSentence] = useState<Sentence>(sentences[0]);
  const [isLooping, setIsLooping] = useState(false);
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [showList, setShowList] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>('practice');

  // 切換到車上模式
  const enterCarMode = useCallback(() => {
    setAppMode('car');
    setIsLooping(false);
  }, []);

  // 退出車上模式
  const exitCarMode = useCallback(() => {
    setAppMode('practice');
  }, []);

  const handleSentenceSelect = useCallback((sentence: Sentence) => {
    setCurrentSentence(sentence);
    setShowList(false);
    setIsLooping(false);
  }, []);

  const handleMarkComplete = useCallback(() => {
    setCompletedIds(prev => new Set([...prev, currentSentence.id]));
  }, [currentSentence.id]);

  const handleNext = useCallback(() => {
    const currentIndex = sentences.findIndex(s => s.id === currentSentence.id);
    const nextIndex = (currentIndex + 1) % sentences.length;
    setCurrentSentence(sentences[nextIndex]);
    setIsLooping(false);
  }, [currentSentence.id]);

  const handlePrevious = useCallback(() => {
    const currentIndex = sentences.findIndex(s => s.id === currentSentence.id);
    const prevIndex = currentIndex === 0 ? sentences.length - 1 : currentIndex - 1;
    setCurrentSentence(sentences[prevIndex]);
    setIsLooping(false);
  }, [currentSentence.id]);

  const progress = (completedIds.size / sentences.length) * 100;

  // 車上模式
  if (appMode === 'car') {
    return <CarMode onExit={exitCarMode} />;
  }

  return (
    <div className="app">
      {/* 頂部標題 */}
      <header className="app-header">
        <div className="header-top">
          <h1>🐷 佩佩豬英文跟讀</h1>
          <button className="car-mode-enter-btn" onClick={enterCarMode}>
            🚗 車上模式
          </button>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
          <span className="progress-text">
            {completedIds.size} / {sentences.length}
          </span>
        </div>
      </header>

      {/* 主要內容區 */}
      <main className="main-content">
        {!showList ? (
          <>
            {/* YouTube 播放器 */}
            <YouTubePlayer
              videoId={currentSentence.videoId}
              startTime={currentSentence.startTime}
              endTime={currentSentence.endTime}
              isLooping={isLooping}
            />

            {/* 當前句子顯示 */}
            <div className="current-sentence">
              <div className="sentence-display">
                <div className="english-text">{currentSentence.english}</div>
                <div className="chinese-text">{currentSentence.chinese}</div>
              </div>

              {/* 循環播放按鈕 */}
              <button
                className={`loop-btn ${isLooping ? 'active' : ''}`}
                onClick={() => setIsLooping(!isLooping)}
              >
                {isLooping ? '🔁 停止循環' : '🔄 循環播放'}
              </button>
            </div>

            {/* AI 語音朗讀區 */}
            <div className="tts-section">
              <h3>🔊 聽 AI 老師朗讀</h3>
              <TextToSpeech text={currentSentence.english} />
            </div>

            {/* 底部導航 */}
            <div className="navigation">
              <button onClick={handlePrevious} className="nav-btn">
                ⬅️ 上一句
              </button>
              <button onClick={handleMarkComplete} className="complete-btn">
                {completedIds.has(currentSentence.id) ? '✅ 完成！' : '👍 學會了！'}
              </button>
              <button onClick={handleNext} className="nav-btn">
                下一句 ➡️
              </button>
            </div>
          </>
        ) : (
          /* 句子列表 */
          <div className="sentence-list">
            {sentences.map(sentence => (
              <SentenceCard
                key={sentence.id}
                sentence={sentence}
                isSelected={sentence.id === currentSentence.id}
                isCompleted={completedIds.has(sentence.id)}
                onClick={() => handleSentenceSelect(sentence)}
              />
            ))}
          </div>
        )}
      </main>

      {/* 底部切換按鈕 */}
      <footer className="app-footer">
        <button
          className={`tab-btn ${!showList ? 'active' : ''}`}
          onClick={() => setShowList(false)}
        >
          🎬 練習
        </button>
        <button
          className={`tab-btn ${showList ? 'active' : ''}`}
          onClick={() => setShowList(true)}
        >
          📋 句子列表
        </button>
      </footer>
    </div>
  );
}

export default App;
