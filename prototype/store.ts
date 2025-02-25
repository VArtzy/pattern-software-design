export default class Store {
    private name: string
    private city: string
    private country: string
    private category: string

    constructor(name: string, city: string, country: string, category: string) {
        this.name = name
        this.city = city
        this.country = country
        this.category = category
    }

    getName() {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getCity() {
        return this.city
    }

    setCity(city: string) {
        this.city = city
    }

    getCountry() {
        return this.country
    }

    setCountry(country: string) {
        this.country = country
    }

    getCategory() {
        return this.category
    }

    setCategory(category: string) {
        this.category = category
    }

    clone() {
        return new Store(this.name, this.city, this.country, this.category)
    }
}
