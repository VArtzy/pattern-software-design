import Shape from "./shape";
import Visitor from "./visitor";

export default class Gabungan implements Shape {
    accept(v: Visitor): void {
        v.visitGabungan(this)
    }
    move(x: number, y: number): string {
        return `Bentuk gabungan berpindah ke x: ${x} dan y: ${y}`
    }
    draw(): string {
        return "Menggambar bentuk gabungan"
    }
}
