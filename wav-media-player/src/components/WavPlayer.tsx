import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
`;

interface WavPlayerProps {
  audioFiles: string[];
}

export const WavPlayer: React.FC<WavPlayerProps> = ({ audioFiles }) => {
  return (
    <PlayerContainer>
      <h2>WAV Player</h2>
      <p>Player controls will go here</p>
    </PlayerContainer>
  );
};