class Employee {
    constructor(name, money, employer) {
        this.name = name
        this.money = money
        this.employer = employer
    }

    payDay(amount) {
        this.money += amount
    }
}

export default Employee
