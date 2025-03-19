import Gabungan from "./gabungan";
import Kotak from "./kotak";
import Lingkaran from "./lingkaran";
import Shape from "./shape";
import Titik from "./titik";
import XMLExportVisitor from "./xmlExportVisitor";

const shapes: Shape[] = [new Kotak(), new Lingkaran(), new Titik(), new Gabungan()]

const exportVisitor = new XMLExportVisitor()

for (const shape of shapes) {
    shape.accept(exportVisitor)
}
