import Shape from "./shape";
import Visitor from "./visitor";

export default class Kotak implements Shape {
    accept(v: Visitor): void {
        v.visitKotak(this)
    }
    move(x: number, y: number): string {
        return `Kotak berpindah ke x: ${x} dan y: ${y}`
    }
    draw(): string {
        return "Menggambar kotak"
    }
}
