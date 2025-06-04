import React from 'react';
import { WavPlayer } from './components/WavPlayer';

interface AppProps {
  audioFiles: string[];
}

const App: React.FC<AppProps> = () => {
  const audioFiles = [
    '/path-to-your-wav-file-1.wav',
    '/path-to-your-wav-file-2.wav',
    // Add more audio files as needed
  ];

  return (
    <div>
      <WavPlayer audioFiles={audioFiles} />
    </div>
  );
};

export default App;