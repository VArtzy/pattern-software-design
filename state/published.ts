import State from "./state";

export default class Published extends State {
    render(): void {
        console.log(this.document.getContent())
    }
    publish(): void {
        console.log(`The document already published.`)
    }
}
