import TreeType from "./TreeType"

export default class NormalTree {
    public x: number
    public y: number
    public name: string
    public color: string
    public texture: string

    constructor(x: number, y: number, name: string, color: string, texture: string) {
        this.x = x
        this.y = y
        this.name = name
        this.color = color
        this.texture = texture
    }

    draw(canvas: string) {
        console.log(canvas, this.x, this.y, this.name, this.color, this.texture)
    }
}
