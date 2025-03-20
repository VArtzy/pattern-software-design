import History from "./history";
import TextEditor from "./textEditor";

const editor = new TextEditor()
const history = new History()

editor.setContent("Ini adalah (memento) atau snapshot pattern")
history.saveMemento(editor.save()) // snapshot
console.log(editor.getContent())

editor.setContent("Memento digunakan untuk snapshot state objek (originator)")
history.saveMemento(editor.save()) // snapshot
console.log(editor.getContent())

editor.setContent("Objek snapshot bisa disimpan untuk undo/redo oleh history object (caretaker) lalu bisa diambil dan diproses originator")
history.saveMemento(editor.save()) // snapshot
console.log(editor.getContent())

const undoMemento = history.undo()
if (undoMemento) {
    editor.restore(undoMemento)
    console.log(editor.getContent())
}

const undoMemento2 = history.undo()
if (undoMemento2) {
    editor.restore(undoMemento2)
    console.log(editor.getContent())
}

const redoMemento = history.redo()
if (redoMemento) {
    editor.restore(redoMemento)
    console.log(editor.getContent())
}
