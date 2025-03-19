import Gabungan from "./gabungan";
import Kotak from "./kotak";
import Lingkaran from "./lingkaran";
import Titik from "./titik";

export default interface Visitor {
    visitTitik(t: Titik): void
    visitLingkaran(l: Lingkaran): void
    visitKotak(k: Kotak): void
    visitGabungan(g: Gabungan): void
}
