import AbstractHandler from "./abstractHandler";

export class MonyetHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === 'pisang') {
            return `Monyet: saya akan makan ${request}nya.`
        }
        return super.handle(request)
    }
}
