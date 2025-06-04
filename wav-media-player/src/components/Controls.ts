import Button from './Button';

export default class Controls {
    private playButton: Button;
    private pauseButton: Button;
    private skipForwardButton: Button;
    private skipBackwardButton: Button;
    private repeatButton: Button;

    constructor() {
        this.playButton = new Button('Play');
        this.pauseButton = new Button('Pause');
        this.skipForwardButton = new Button('Skip Forward');
        this.skipBackwardButton = new Button('Skip Backward');
        this.repeatButton = new Button('Repeat');

        this.initializeControls();
    }

    private initializeControls() {
        this.playButton.onClick = this.play.bind(this);
        this.pauseButton.onClick = this.pause.bind(this);
        this.skipForwardButton.onClick = this.skipForward.bind(this);
        this.skipBackwardButton.onClick = this.skipBackward.bind(this);
        this.repeatButton.onClick = this.toggleRepeat.bind(this);
    }

    private play() {
        console.log('Playing audio');
        // Logic to play audio
    }

    private pause() {
        console.log('Pausing audio');
        // Logic to pause audio
    }

    private skipForward() {
        console.log('Skipping forward');
        // Logic to skip forward
    }

    private skipBackward() {
        console.log('Skipping backward');
        // Logic to skip backward
    }

    private toggleRepeat() {
        console.log('Toggling repeat');
        // Logic to toggle repeat
    }
}