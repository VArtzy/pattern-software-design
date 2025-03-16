import Command from "./command";

export default class PrintCommand implements Command {
    private text: string

    constructor(text: string) {
        this.text = text
    } 

    get name(): string {
        return `Print ${this.text}`
    }
    execute(): void {
        console.log(`Print command: ${this.text}`)
    }
    undo() {
        console.log('nvm...')
    }
}
