import Command from "./command";

export default class Conductor {
    private static history: Command[] = []
    private static undone: Command[] = []

    static run(command: Command) {
        console.log(`Executing command: ${command.name}`)
        command.execute()
        this.history.push(command)
    }

    static printHistory() {
        this.history.forEach(command => console.log(command.name))
    }

    static undo() {
        const command = this.history.pop()
        if (!command) throw new EvalError('Cannot undo since there was no command run...')
        console.log(`Undo ${command.name}`)
        command.undo()
        this.undone.push(command)
    }

    static redo() {
        const command = this.undone.pop()
        if (!command) throw new EvalError('Cannot redo since there was no command undone...')
        console.log(`Redo ${command.name}`)
        command.execute()
        this.history.push(command)
    }
}
