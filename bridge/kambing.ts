import BinatangDarat from "./binatangDarat";

export default class Kambing extends BinatangDarat {
    getJumlahTelinga(): number {
        return 2
    }

    getNama(): string {
        return "Kambing"
    }

    getJumlahKaki() {
        return 4
    }
}
