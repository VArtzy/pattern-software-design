import Component from "./component"

export default class Participant extends Component {
    send(message: string) {
        console.log(`${this.name} sends: ${message}`)
        this.mediator.sendMessage(message, this)
    }

    receive(message: string, sender: Participant) {
        console.log(`${this.name} received from ${sender.name}: ${message}`)
    }
}
