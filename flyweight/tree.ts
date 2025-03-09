export default class Tree {
    private x: number
    private y: number
    private name: string
    private color: string
    private texture: string

    constructor(name: string, color: string, texture: string) {
        this.name = name
        this.color = color
        this.texture = texture
    }

    setPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }

    draw(canvas: string) {
        console.log(canvas, this.x, this.y, this.name, this.color, this.texture)
    }
}
