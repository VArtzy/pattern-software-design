import Snapshot from "./snapshot"

export default class Editor {
    private text: string
    private curX: number
    private curY: number
    private selectionWidth: number

    setText(text: string) {
        this.text = text
    }

    setCursor(x: number, y: number) {
        this.curX = x
        this.curY = y
    }

    setSelectionWidth(width: number) {
        this.selectionWidth = width
    }

    print() {
        console.log(`${this.text}| ${this.curX}:${this.curY} - ${this.selectionWidth}`)
    }

    snapshot() {
        return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth)
    }
}
