import State from "./state";

export default class SoldState extends State {
    insertCoin(): void {
        console.log(`Please wait, product is being dispensed.`)
    }
    selectProduct(): void {
        console.log(`Please wait, product is being dispensed.`)
    }
    dispenseProduct(): void {
        console.log(`Product dispensed.`)
        this.vending.releaseProduct()
        if (this.vending.getProductCount() > 0) {
            this.vending.setState(this.vending.getNoCoinState())
        } else {
            this.vending.setState(this.vending.getSoldOutState())
        }
    }
}
