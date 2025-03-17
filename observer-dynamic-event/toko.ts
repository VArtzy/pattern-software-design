import Publisher from "./publisher"

export default class Toko extends Publisher {
    private name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    sale(discount: number) {
        console.log("Sedang diskon di toko", this.name, "sebesar", discount + "%!")
        this.events.notify("sale", { storeName: this.name, discount })
    }

    inflation(inflation: number) {
        console.log("Barang di toko", this.name, "mengalami inflasi sebesar", inflation + "%!")
        this.events.notify("inflation", { storeName: this.name, discount: inflation })
    }
}
