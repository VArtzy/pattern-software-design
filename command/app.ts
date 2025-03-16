import Conductor from "./conductor";
import ExitCommand from "./exitCommand";
import PrintCommand from "./printCommand";

Conductor.run(new PrintCommand('hello'))

Conductor.run(new PrintCommand('hi'))

Conductor.printHistory()

Conductor.undo()

Conductor.redo()

Conductor.run(new ExitCommand())
