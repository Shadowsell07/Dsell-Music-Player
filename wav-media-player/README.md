# Audio Player Component

This repository provides a reusable audio player component built with React and TypeScript. The player features an interactive interface that allows users to play, pause, skip tracks, adjust volume, and repeat audio. The component can be easily imported and integrated into any React project.

## Features

- Reusable React component for audio playback (supports MP3 and WAV formats)
- Play and pause audio
- Skip to next or previous track
- Repeat the current track
- Volume control
- Styled, interactive UI buttons
- Easy integration into other projects

## Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Import and use the `AudioPlayer` component in your React project:

   ```tsx
   import { AudioPlayer } from './components/AudioPlayer';

   const audioFiles = [
     '/audio/song1.mp3',
     '/audio/song2.mp3',
   ];

   function App() {
     return <AudioPlayer audioFiles={audioFiles} />;
   }
   ```

## Project Structure

- `public/`
  - `audio/`: Audio files (MP3, WAV)
- `src/`: Source code for the media player component.
  - `components/`: UI components including the main player.
  - `interfaces/`: TypeScript interfaces for player and controls.
  - `services/`: Audio playback logic.
  - `styles/`: CSS styles.
  - `utils/`: Utility functions.
- `tests/`: Unit tests for components and logic.

## License

This project is licensed under the MIT License.