export default class Address {
    private id: string
    private street: string
    private country: string

    constructor(id: string, street: string, country: string) {
        this.id = id
        this.street = street
        this.country = country
    }

    getId() {
        return this.id
    }

    setId(id: string) {
        this.id = id
    }

    getStreet() {
        return this.street
    }

    setStreet(street: string) {
        this.street = street
    }
    
    getCountry() {
        return this.country
    }

    setCountry(country: string) {
        this.country = country
    }
}
