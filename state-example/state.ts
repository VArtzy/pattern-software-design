import Vending from "./vending"

export default abstract class State {
    protected vending: Vending

    constructor(vending: Vending) {
        this.vending = vending
    }

    abstract insertCoin(): void

    abstract selectProduct(): void

    abstract dispenseProduct(): void
}
