import State from "./state";

export default class NoCoinState extends State {
    insertCoin(): void {
        console.log(`Coin inserted.`)
        this.vending.setState(this.vending.getHasCoinState())
    }
    selectProduct(): void {
        console.log(`Please insert a coin first.`)
    }
    dispenseProduct(): void {
        console.log(`Please insert a coin and select a product.`)
    }
}
