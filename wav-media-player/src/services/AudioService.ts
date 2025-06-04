// src/services/AudioService.ts

export class AudioService {
    private audio: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();
    }

    loadAudio(file: string): void {
        this.audio.src = file;
    }

    playAudio(): void {
        this.audio.play();
    }

    pauseAudio(): void {
        this.audio.pause();
    }

    skipForward(seconds: number): void {
        this.audio.currentTime += seconds;
    }

    skipBackward(seconds: number): void {
        this.audio.currentTime -= seconds;
    }

    setVolume(volume: number): void {
        this.audio.volume = volume;
    }

    toggleRepeat(): void {
        this.audio.loop = !this.audio.loop;
    }
}