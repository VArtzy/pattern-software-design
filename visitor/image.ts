import Element from "./element";
import Visitor from "./visitor";

export default class Image implements Element {
    public src: string

    constructor(src: string) {
        this.src = src
    }

    accept(visitor: Visitor): void {
        visitor.visitImage(this)
    }
}
