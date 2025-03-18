import Mediator from "./mediator";
import Participant from "./participant";

export default class GroupChat implements Mediator {
    private participants: Participant[]

    constructor() {
        this.participants = []
    }
    sendMessage(message: string, sender: Participant): void {
        this.participants.forEach(participant => {
            if (participant !== sender) {
                participant.receive(message, sender)
            }
        })
    }

    addParticipant(participant: Participant): void {
        this.participants.push(participant)
    }
}
