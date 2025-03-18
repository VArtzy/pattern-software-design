import Participant from "./participant";

/** Also known as: Intermediary, Controller */
export default interface Mediator {
    sendMessage(message: string, sender: Participant): void
    addParticipant(participant: Participant): void
}
