import Element from "./element";
import Visitor from "./visitor";

export default class Text implements Element {
    private content: string

    constructor(content: string) {
        this.content = content
    }

    sanitaze() {
        return this.content.replace(/<*.script>/g, "")
    }

    accept(visitor: Visitor): void {
        visitor.visitText(this)
    }
}
