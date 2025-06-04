// src/components/Player.ts

export class Player {
    private audio: HTMLAudioElement;
    private isRepeating: boolean;

    constructor() {
        this.audio = new Audio();
        this.isRepeating = false;
    }

    play(): void {
        this.audio.play();
    }

    pause(): void {
        this.audio.pause();
    }

    skipForward(seconds: number): void {
        this.audio.currentTime += seconds;
    }

    skipBackward(seconds: number): void {
        this.audio.currentTime -= seconds;
    }

    toggleRepeat(): void {
        this.isRepeating = !this.isRepeating;
        this.audio.loop = this.isRepeating;
    }

    loadAudio(source: string): void {
        this.audio.src = source;
    }
}