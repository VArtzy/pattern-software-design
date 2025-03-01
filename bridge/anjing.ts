import BinatangDarat from "./binatangDarat";

export default class Anjing extends BinatangDarat {
    getJumlahTelinga(): number {
        return 2
    }

    getNama(): string {
        return "Anjing"
    }

    getJumlahKaki() {
        return 4
    }
}
