import AbstractHandler from "./abstractHandler";

export class PandaHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === 'bambu') {
            return `Panda: saya akan makan ${request}nya.`
        }
        return super.handle(request)
    }
}
