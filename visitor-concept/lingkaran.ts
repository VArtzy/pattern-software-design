import Shape from "./shape";
import Visitor from "./visitor";

export default class Lingkaran implements Shape {
    accept(v: Visitor): void {
        v.visitLingkaran(this)
    }
    move(x: number, y: number): string {
        return `Lingkaran berpindah ke x: ${x} dan y: ${y}`
    }
    draw(): string {
        return "Menggambar lingkaran"
    }
}
