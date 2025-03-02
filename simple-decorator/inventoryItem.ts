export default class InventoryItem {
    public name: string
    public price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${this.name} costs ${this.price}`)
    }
}
