import Person from './person.js'

class PersonBuilder {
    constructor(name) {
        this.name = name
    }

    employee() {
        this.isEmployee = true
        return this
    }

    manager(hours = 40) {
        this.isManager = true
        this.hours = hours
        return this
    }

    partTime(hours = 20) {
        this.time = hours
        return this
    }

    money(money) {
        this.money = money
        return this
    }

    list(list = []) {
        this.shoppingList = list
        return this
    }

    build() {
        return new Person(this)
    }
}

export default PersonBuilder
