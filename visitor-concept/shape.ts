import Visitor from "./visitor"

export default interface Shape {
    move(x: number, y: number): string
    draw(): string
    accept(v: Visitor): void
}
