import Component from "./component";

/** Also known as: Intermediary, Controller */
export default interface Mediator {
    sendMessage(message: string, component: Component): void
    addParticipant(component: Component): void
}
