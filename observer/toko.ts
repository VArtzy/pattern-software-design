import Publisher from "./publisher"

export default class Toko extends Publisher {
    private name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    sale(discount: number) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount))
        console.log() // Add new line for better readability in console
    }
}
