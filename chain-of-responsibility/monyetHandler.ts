import AbstractHandler from "./abstractHandler";

export class MonyetHandler extends AbstractHandler {
    handle(request: string): string {
        console.log(`   ${request} telah sampai ditangan monyet.`)
        if (request === 'pisang') {
            return `Monyet: saya akan makan ${request}nya.`
        }
        return super.handle(request)
    }
}
