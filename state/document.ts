import Draft from "./draft"
import State from "./state"
import User from "./user"

export default class Document {
    protected state: State
    protected user: User
    protected content: string

    constructor(user: User, content: string) {
        this.user = user
        this.content = content
        this.state = new Draft(this)
    }

    changeState(state: State) {
        this.state = state
    }

    getUser() {
        return this.user
    }

    getContent() {
        return this.content
    }

    render() {
        this.state.render()
    }

    publish() {
        this.state.publish()
    }
}
