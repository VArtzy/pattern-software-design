import Visitor from "./visitor";

export default interface Element {
    accept(visitor: Visitor): void
}
