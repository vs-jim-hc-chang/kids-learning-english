import type { Sentence } from '../data/sentences';

interface SentenceCardProps {
  sentence: Sentence;
  isSelected: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export function SentenceCard({
  sentence,
  isSelected,
  isCompleted,
  onClick
}: SentenceCardProps) {
  const difficultyEmoji = {
    easy: '⭐',
    medium: '⭐⭐',
    hard: '⭐⭐⭐'
  };

  return (
    <div
      className={`sentence-card ${isSelected ? 'selected' : ''} ${isCompleted ? 'completed' : ''}`}
      onClick={onClick}
    >
      <div className="sentence-header">
        <span className="sentence-number">#{sentence.id}</span>
        <span className="difficulty">{difficultyEmoji[sentence.difficulty]}</span>
        {isCompleted && <span className="completed-badge">✅</span>}
      </div>
      <div className="sentence-english">{sentence.english}</div>
      <div className="sentence-chinese">{sentence.chinese}</div>
    </div>
  );
}
