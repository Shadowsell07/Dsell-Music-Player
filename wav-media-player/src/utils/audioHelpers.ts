// src/utils/audioHelpers.ts

export function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export function calculateVolume(value: number): number {
    return Math.max(0, Math.min(value, 1));
}