import State from "./state";

export default class Context {
    private state: State

    constructor(state: State) {
        this.transitionTo(state)
    }

    transitionTo(state: State) {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`)
        this.state = state
        this.state.setContext(this)
    }

    request1() {
        this.state.handle1()
    }

    request2() {
        this.state.handle2()
    }
}
