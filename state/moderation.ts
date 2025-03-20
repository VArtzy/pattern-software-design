import Published from "./published";
import State from "./state";

export default class Moderation extends State {
    render(): void {
        if (this.document.getUser().isAdmin()) {
            console.log(`Moderation mode: ` + this.document.getContent())
        } else {
            console.error(`403 Forbidden`)
        }
    }
    publish(): void {
        if (this.document.getUser().isAdmin()) {
            this.document.changeState(new Published(this.document))
        }
    }
}
