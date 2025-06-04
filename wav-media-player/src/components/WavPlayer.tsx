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

interface WavPlayerProps {
  audioFiles: string[];
}

export const WavPlayer: React.FC<WavPlayerProps> = ({ audioFiles }) => {
  return (
    <PlayerContainer>
      <Controls>
        <Button>⏮</Button>
        <Button>▶️</Button>
        <Button>⏭</Button>
        <Button>🔁</Button>
      </Controls>
    </PlayerContainer>
  );
};