import Command from "./command";

export default class ExitCommand implements Command {
    undo(): void {}
    get name(): string {
        return 'Exit'
    }
    execute(): void {
        process.exit(0)
    }
}
