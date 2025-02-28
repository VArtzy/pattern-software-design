import Address from "./address"

export default class Customer {
    private id: string
    private name: string
    private addresses: Address[]

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
        this.addresses = []
    }

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

    getAddresses() {
        return this.addresses
    }

    setAddresses(addresses: Address[]) {
        this.addresses = addresses
    }
}
