import Mediator from "./mediator"

export default abstract class Component {
    protected name: string
    protected mediator: Mediator

    constructor(name: string, mediator: Mediator) {
        this.name = name
        this.mediator = mediator
        this.mediator.addParticipant(this)
    }
}
