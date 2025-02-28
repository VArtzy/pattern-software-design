export default class Account {
    private id: string
    private balance: number

    constructor(id: string, balance: number) {
        this.id = id
        this.balance = balance
    }

    getId() {
        return this.id
    }

    setId(id: string) {
        this.id = id
    }

    getBalance() {
        return this.balance
    }

    setBalance(balance: number) {
        this.balance = balance
    }
}
