export default class Employee {
    private name
    private title
    private wage

    constructor(name: string, title: string, wage: number) {
        this.name = name
        this.title = title
        this.wage = wage
    }

    getName() {
        return this.name
    }

    getTitle() {
        return this.title
    }

    getWage() {
        return this.wage
    }
}
