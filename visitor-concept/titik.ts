import Shape from "./shape";
import Visitor from "./visitor";

export default class Titik implements Shape {
    accept(v: Visitor): void {
        v.visitTitik(this)
    }
    move(x: number, y: number): string {
        return `Titik berpindah ke x: ${x} dan y: ${y}`
    }

    draw(): string {
        return "Menggambar titik"
    }
}
