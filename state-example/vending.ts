import HasCoinState from "./hasCoinState";
import NoCoinState from "./noCoinState";
import SoldOutState from "./soldOutState";
import SoldState from "./soldState";
import State from "./state";

export default class Vending {
    private noCoinState: State
    private hasCoinState: State
    private soldState: State
    private soldOutState: State

    private state: State
    private productCount: number

    constructor(productCount: number) {
        this.noCoinState = new NoCoinState(this)
        this.hasCoinState = new HasCoinState(this)
        this.soldState = new SoldState(this)
        this.soldOutState = new SoldOutState(this)

        this.productCount = productCount
        this.state = this.noCoinState
    }

    setState(state: State) {
        this.state = state
    }

    getNoCoinState() {
        return this.noCoinState
    }

    getHasCoinState() {
        return this.hasCoinState
    }

    getSoldState() {
        return this.soldState
    }

    getSoldOutState() {
        return this.soldOutState
    }

    getProductCount() {
        return this.productCount
    }

    releaseProduct() {
        console.log(`Product released.`)
        this.productCount--;
    }

    insertCoin() {
        this.state.insertCoin()
    }

    selectProduct() {
        this.state.selectProduct()
    }

    dispenseProduct() {
        this.state.dispenseProduct()
    }
}
