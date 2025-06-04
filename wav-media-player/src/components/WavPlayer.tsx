import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  width: 600px;
  height: 400px;
  background-image: url('/images/boombox1.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 20px;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const VolumeControl = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

const VolumeSlider = styled.input`
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

interface WavPlayerProps {
  audioFiles: string[];
}

export const WavPlayer: React.FC<WavPlayerProps> = ({ audioFiles }) => {
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <PlayerContainer>
      <audio ref={audioRef} />
      <Controls>
        <Button>⏮</Button>
        <Button>▶️</Button>
        <Button>⏭</Button>
        <Button>🔁</Button>
      </Controls>
      <VolumeControl>
        <span>🔊</span>
        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </VolumeControl>
    </PlayerContainer>
  );
};