import TreeType from "./TreeType"

/** Flyweight class (also known as Cache) */
export default class Tree {
    public x: number
    public y: number
    public type: TreeType

    constructor(x: number, y: number, type: TreeType) {
        this.x = x
        this.y = y
        this.type = type
    }

    draw(canvas: string) {
        this.type.draw(canvas, this.x, this.y)
    }
}
