import Command from "./command";
import Editor from "./editor";

const editor = new Editor()
editor.setText("Ini adalah (memento) atau snapshot pattern")
editor.setCursor(1, 2)
editor.setSelectionWidth(50)
editor.print()

const snapshot = editor.snapshot()

editor.setText("Memento digunakan untuk snapshot state objek (originator)")
editor.setCursor(3, 4)
editor.setSelectionWidth(100)
editor.print()

const command = new Command(editor, snapshot)

editor.setText("Snapshot disimpan oleh history object (caretaker) yang akan memento pakai untuk mengembalikan state originator")
editor.setCursor(5, 6)
editor.setSelectionWidth(25)
editor.print()

command.undo()

editor.print()
