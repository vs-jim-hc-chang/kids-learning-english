import { useState } from 'react';
import { CarMode } from './components/CarMode';
import { SongMode } from './components/SongMode';
import './App.css';

type AppMode = 'car' | 'song';

function App() {
  const [mode, setMode] = useState<AppMode>('car');

  if (mode === 'song') {
    return <SongMode onBack={() => setMode('car')} />;
  }

  return <CarMode onSongMode={() => setMode('song')} />;
}

export default App;
