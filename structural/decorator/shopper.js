class Shopper {
    constructor(name, balance = 0) {
        this.name = name
        this.balance = balance
        this.items = []
    }

    purchase(item) {
        if (item.price > this.balance) {
            console.log(`Cannot afford ${item.name}`)
        } else {
            console.log(`Purchasing item ${item.name}`)
            this.balance -= item.price
            this.items.push(item)
        }
    }

    printStatus() {
        console.log(`${this.name} has purchased ${this.items.length} items:`)
        this.items.forEach(item => console.log(` * ${item.name} - $${item.price}`))
        console.log(`${this.name} has $${this.balance.toFixed(2)} remaining.`)
    }
}

export default Shopper
