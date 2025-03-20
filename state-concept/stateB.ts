import State from "./state";
import StateA from "./stateA";

export default class StateB extends State {
    handle1(): void {
        console.log(`StateB handles request1.`)
    }
    handle2(): void {
        console.log(`StateB handles request2.`)
        console.log(`StateB wants to change the state of the context.`)
        this.context.transitionTo(new StateA())
    }
}
