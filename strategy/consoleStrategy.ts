import Strategy from "./strategy";

export default class ConsoleStrategy implements Strategy {
    log(message: string, timestamp: string): void {
        console.log(`${timestamp} - ${message}`)
    }
}
