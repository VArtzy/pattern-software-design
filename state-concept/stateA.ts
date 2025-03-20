import State from "./state";
import StateB from "./stateB";

export default class StateA extends State {
    handle1(): void {
        console.log(`StateA handles request1.`)
        console.log(`StateA wants to change the state of the context.`)
        this.context.transitionTo(new StateB())
    }
    handle2(): void {
        console.log(`StateA handle request2.`)
    }
}
