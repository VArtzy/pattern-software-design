import Editor from "./editor";
import Snapshot from "./snapshot";

export default class Command {
    private editor: Editor
    private backup: Snapshot

    constructor(editor: Editor, backup: Snapshot) {
        this.editor = editor
        this.backup = backup
    }

    createBackup() {
        this.backup = this.editor.snapshot()
    }

    undo() {
        if (this.backup) {
            this.backup.restore()
        }
    }
}
