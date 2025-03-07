import TreeType from "./TreeType"

/** Flyweight class (also known as Cache) */
export default class Tree {
    private x: number
    private y: number
    private type: TreeType

    constructor(x: number, y: number, type: TreeType) {
        this.x = x
        this.y = y
        this.type = type
    }

    draw(canvas: string) {
        this.type.draw(canvas, this.x, this.y)
    }
}
