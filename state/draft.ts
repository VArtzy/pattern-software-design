import Moderation from "./moderation";
import Published from "./published";
import State from "./state";

export default class Draft extends State {
    render(): void {
        const user = this.document.getUser()
        if (user.isAdmin() || user.isAuthor()) {
            console.log(`Draft mode: ` + this.document.getContent())
        } else {
            console.error(`403 Forbidden`)
        }
    }
    publish(): void {
        if (this.document.getUser().isAdmin()) {
            this.document.changeState(new Published(this.document))
        } else {
            this.document.changeState(new Moderation(this.document))
        }
    }
}
