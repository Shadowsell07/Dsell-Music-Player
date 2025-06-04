import { Player } from '../src/components/Player';
import { AudioService } from '../src/services/AudioService';

describe('AudioPlayer', () => {
    let player: Player;
    let audioService: AudioService;

    beforeEach(() => {
        audioService = new AudioService();
        player = new Player(audioService);
    });

    test('should play audio', () => {
        player.play();
        expect(player.isPlaying).toBe(true);
    });

    test('should pause audio', () => {
        player.play();
        player.pause();
        expect(player.isPlaying).toBe(false);
    });

    test('should skip forward', () => {
        player.skipForward();
        expect(player.currentTime).toBeGreaterThan(0);
    });

    test('should skip backward', () => {
        player.skipBackward();
        expect(player.currentTime).toBeLessThan(0);
    });

    test('should toggle repeat', () => {
        player.toggleRepeat();
        expect(player.isRepeating).toBe(true);
        player.toggleRepeat();
        expect(player.isRepeating).toBe(false);
    });
});