import TokoListener from "./tokoListener";

export default class EventManager {
    public listeners: any[] = []

    subscribe(event: string, listener: TokoListener) {
        this.listeners.push({event, listener})
    }

    unsubscribe(event: string, listener: TokoListener) {
        this.listeners = this.listeners.filter((l) => {
            return !(l.event === event && l.listener === listener)
        })
    }

    notify(event: string, data: any) {
        this.listeners.forEach((listener) => {
            if (listener.event === event) {
                listener.listener.notify(event, data)
            }
        })
    }
}
