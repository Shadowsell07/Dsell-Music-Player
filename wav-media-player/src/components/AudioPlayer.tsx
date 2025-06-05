import React, { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import '../styles/AudioPlayer.css';

export const AudioPlayer: React.FC<{ audioFiles: string[] }> = ({ audioFiles }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeat, setRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % audioFiles.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + audioFiles.length) % audioFiles.length);
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
      setVolume(newVolume);
    }
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioFiles[currentTrack]}
        onEnded={() => {
          if (repeat) {
            audioRef.current?.play();
          } else {
            handleNext();
          }
        }}
      />
      <div className="controls">
        <button onClick={handlePrevious} className="control-button">
          <SkipPreviousIcon />
        </button>
        <button onClick={togglePlay} className="control-button play-button">
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button onClick={handleNext} className="control-button">
          <SkipNextIcon />
        </button>
        <button 
          onClick={toggleRepeat} 
          className={`control-button ${repeat ? 'active' : ''}`}
        >
          <RepeatIcon />
        </button>
        <div className="volume-control">
          <VolumeDownIcon />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          />
          <VolumeUpIcon />
        </div>
      </div>
    </div>
  );
};