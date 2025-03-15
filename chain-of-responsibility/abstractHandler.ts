import Handler from "./handler";

export default abstract class AbstractHandler implements Handler {
    private next: Handler

    setNext(handler: Handler<string, string>): Handler<string, string> {
        this.next = handler
        return handler
    }
    handle(request: string): string {
        if (this.next) {
            return this.next.handle(request)
        }

        throw new EvalError('Cannot handle request')
    }
}
