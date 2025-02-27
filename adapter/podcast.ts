export default class Podcast {
    public title: string
    public author: string
    public duration: number

    constructor(title: string, author: string, duration: number) {
        this.title = title
        this.author = author
        this.duration = duration
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

    getDuration() {
        return this.duration
    }

    setDuration(duration: number) {
        this.duration = duration
    }
}
