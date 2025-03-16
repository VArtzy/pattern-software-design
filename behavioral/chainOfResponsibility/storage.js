class Storage {
    constructor(name, inventory = [], deliveryTime = 0) {
        this.name = name
        this.inventory = inventory
        this.deliveryTime = deliveryTime
        this.next = null
    }

    lookInventory(itemName) {
        const idx = this.inventory.findIndex(item => item.name === itemName)
        return this.inventory[idx]
    }

    setNext(storage) {
        this.next = storage
    }

    find(itemName) {
        const found = this.lookInventory(itemName)
        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName)
        } else {
            return `we do not carry ${itemName}`
        }
    }
}

export default Storage
