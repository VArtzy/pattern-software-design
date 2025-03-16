import { unlink, writeFile } from 'fs'

class ExitCommand {
    get name() {
        return 'Exit'
    }

    execute() {
        process.exit(0)
    }
}

class CreateCommand {
    constructor(filename, text) {
        this.filename = filename
        this.body = text
        this.fullPath = `./${filename}`
    }

    get name() {
        return `Create ${this.filename}`
    }

    execute() {
        writeFile(this.fullPath, this.body, f => f)
    }

    undo() {
        unlink(this.fullPath, f => f)
    }
}

export { ExitCommand, CreateCommand }
