import Document from "./document";

export default abstract class State {
    protected document: Document

    constructor(document: Document) {
        this.document = document
    }

    abstract render(): void

    abstract publish(): void
}
