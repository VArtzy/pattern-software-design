export default class Book {
    public title: string
    public author: string

    constructor(title: string, author: string) {
        this.title = title
        this.author = author
    }

    getTitle() {
        return this.title
    }

    setTitle(title: string) {
        this.title = title
    }

    getAuthor() {
        return this.author
    }

    setAuthor(author: string) {
        this.author = author
    }
}
