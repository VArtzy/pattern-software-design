import Book from "./book";
import CatalogAdapter from "./catalogAdapter";

export default class BookCatalogAdapter implements CatalogAdapter {
    private item: Book

    constructor(book: Book) {
        this.item = book
    }

    getCatalogTitle(): string {
        return `${this.item.title} by ${this.item.author}`
    }
}
