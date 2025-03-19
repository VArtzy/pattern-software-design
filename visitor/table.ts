import Element from "./element";
import Visitor from "./visitor";

export default class Table implements Element {
    private rows: string[][]

    constructor(rows: string[][]) {
        this.rows = rows
    }

    stringify() {
        return JSON.stringify(this.rows)
    }

    accept(visitor: Visitor): void {
        visitor.visitTable(this)
    }
}
