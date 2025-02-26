export default class Product {
    private id: string
    private name: string
    private price: number

    getId() {
        return this.id
    }

    setId(id: string) {
        this.id = id
    }

    getName() {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getPrice() {
        return this.price
    }

    setPrice(price: number) {
        this.price = price
    }       
}
