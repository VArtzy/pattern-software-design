export default class TreeType {
    public name: string
    public color: string
    public texture: string

    constructor(name: string, color: string, texture: string) {
        this.name = name
        this.color = color
        this.texture = texture
    }

    draw(canvas: string, x: number, y: number) {
        console.log(canvas, x, y, this.name, this.color, this.texture)
    }
}
