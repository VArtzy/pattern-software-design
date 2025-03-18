import Mediator from "./mediator"

export default class Participant {
    private name: string
    private mediator: Mediator

    constructor(name: string, mediator: Mediator) {
        this.name = name
        this.mediator = mediator
        this.mediator.addParticipant(this)
    }

    send(message: string) {
        console.log(`${this.name} sends: ${message}`)
        this.mediator.sendMessage(message, this)
    }

    receive(message: string, sender: Participant) {
        console.log(`${this.name} received from ${sender.name}: ${message}`)
    }
}
