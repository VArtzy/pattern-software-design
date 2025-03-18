import Strategy from "./strategy";

export default class NoDateStrategy implements Strategy{
    log(message: string): void {
        console.log(message)
    }
}
