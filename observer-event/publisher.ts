import EventManager from "./eventManager";

export default abstract class Publisher {
    public events: EventManager

    constructor() {
        this.events = new EventManager()
    }
}
