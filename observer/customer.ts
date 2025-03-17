import TokoListener from "./tokoListener";

export default class Customer implements TokoListener {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    notify(name: string, discount: number): void {
        console.log(`${this.name}, ada diskon di toko ${name}! ${discount}% untuk semua barang!`)
    }
}
