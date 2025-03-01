import BinatangDarat from "./binatangDarat";

export default class Ayam extends BinatangDarat {
    getJumlahTelinga(): number {
        return 2
    }

    getNama(): string {
        return "Ayam"
    }

    getJumlahKaki() {
        return 2
    }
}
