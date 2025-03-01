import Binatang from "./binatang";

export default abstract class BinatangAir implements Binatang {
    abstract getNama(): string

    hidupDiAir(): boolean {
        return true
    }

    hidupDiDarat(): boolean {
        return false
    }
}
