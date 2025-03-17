import TokoListener from "./tokoListener";

export default abstract class Publisher {
    protected subscribers: TokoListener[]

    constructor() {
        this.subscribers = []
    }

    subscribe(observer: TokoListener) {
        this.subscribers.push(observer)
    }
}
