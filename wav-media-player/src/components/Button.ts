// src/components/Button.ts

export class Button {
    label: string;
    onClick: () => void;

    constructor(label: string, onClick: () => void) {
        this.label = label;
        this.onClick = onClick;
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.label;
        buttonElement.onclick = this.onClick;
        return buttonElement;
    }
}