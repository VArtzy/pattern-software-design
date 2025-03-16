class CatalogItem {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    get total() {
        return this.price
    }

    print() {
        console.log(`${this.name} costs ${this.total}`)
    }
}

export default CatalogItem
