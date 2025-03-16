import conductor from './conductor.js'
import { ExitCommand, CreateCommand } from './commands.js'
import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('create <filename> <text> | history | undo | redo | exit')
rl.prompt()

rl.on('line', input => {
    const [commandText, ...remaining] = input.split(' ')
    const [filename, ...fileText] = remaining
    const text = fileText.join(' ')

    switch(commandText) {
        case 'exit':
            conductor.run(new ExitCommand())
            break
        case 'create':
            conductor.run(new CreateCommand(filename, text))
            break
        case 'history':
            conductor.printHistory()
            break
        case 'undo':
            conductor.undo()
            break
        case 'redo':
            conductor.redo()
            break
        default:
            console.log(`Command not found: ${commandText}`)
    }

    rl.prompt()
})
