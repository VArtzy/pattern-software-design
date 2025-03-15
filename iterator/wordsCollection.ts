import AlphabeticalOrderIterator from "./alphabeticalOrderIterator"
import Iterator from "./iterator"

export default class WordsCollection {
    private items: string[] = []

    public getItems(): string[] {
        return this.items
    }

    public getCount(): number {
        return this.items.length
    }

    public addItem(item: string): void {
        this.items.push(item)
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this)
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true)
    }
}
