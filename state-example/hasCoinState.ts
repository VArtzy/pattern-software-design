import State from "./state";

export default class HasCoinState extends State {
    insertCoin(): void {
        console.log(`Coin already inserted.`)
    }
    selectProduct(): void {
        console.log(`Product selected.`)
        this.vending.setState(this.vending.getSoldState())
    }
    dispenseProduct(): void {
        console.log(`Please select a product first.`)
    }
}
