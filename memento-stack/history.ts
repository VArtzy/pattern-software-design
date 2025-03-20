import Memento from "./memento"

export default class History {
    private mementos: Memento[] = []
    private index: number = -1

    saveMemento(memento: Memento) {
        this.mementos = this.mementos.slice(0, this.index + 1)
        this.mementos.push(memento)
        this.index++
    }

    undo() {
        if (this.index > 0) {
            this.index--
            return this.mementos[this.index]
        }
        return null
    }

    redo() {
        if (this.index < this.mementos.length - 1) {
            this.index++
            return this.mementos[this.index]
        }
        return null
    }
}
