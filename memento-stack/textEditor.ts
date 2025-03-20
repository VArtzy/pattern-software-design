import Memento from "./memento"

export default class TextEditor {
    private content: string

    setContent(content: string) {
        this.content = content
    }

    getContent() {
        return this.content
    }

    save() {
        return new Memento(this.content)
    }

    restore(memento: Memento) {
        this.content = memento.getState()
    }
}
