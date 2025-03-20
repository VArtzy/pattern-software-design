import State from "./state";

export default class SoldOutState extends State {
    insertCoin(): void {
        console.log(`Machine is out of stock.`)
    }
    selectProduct(): void {
        console.log(`Machine is out of stock.`)
    }
    dispenseProduct(): void {
        console.log(`Machine is out of stock.`)
    }
}
