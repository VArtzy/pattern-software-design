import AbstractHandler from "./abstractHandler";

export class TupaiHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === 'kacang') {
            return `Tupai: saya akan makan ${request}nya.`
        }
        return super.handle(request)
    }
}
