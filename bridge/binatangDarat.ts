import Binatang from "./binatang";

export default abstract class BinatangDarat implements Binatang {
    abstract getNama(): string
    abstract getJumlahKaki(): number
    abstract getJumlahTelinga(): number

    hidupDiAir(): boolean {
        return false
    }

    hidupDiDarat(): boolean {
        return true
    }
}
