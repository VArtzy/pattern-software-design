import InventoryItem from "./inventoryItem"

export default class Shopper {
    private name: string
    private balance: number
    private items: InventoryItem[]

    constructor(name: string, balance: number = 0) {
        this.name = name
        this.balance = balance
        this.items = []
    }

    purchase(item: InventoryItem) {
        if (item.price > this.balance) {
            console.log(`Cannot afford ${item.name}`)
        } else {
            console.log(`Purchasing item ${item.name}`)
            this.balance -= item.price
            this.items.push(item)
        }
    }

    printStatus() {
        console.log(`${this.name} has purchased ${this.items.length} items`)
        this.items.forEach(item => console.log(`${item.name} - ${item.price}`))
        console.log(`${this.name} has Rp. ${this.balance} remaining.`)
    }
}
