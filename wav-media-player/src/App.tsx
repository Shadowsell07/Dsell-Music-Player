import React from 'react';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  const audioFiles = [
    '/audio/116.mp3',
    '/audio/defeat.mp3'
  ];

  return (
    <div>
      <AudioPlayer audioFiles={audioFiles} />
    </div>
  );
};

export default App;