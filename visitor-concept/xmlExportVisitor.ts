import { appendFile } from "fs";
import Gabungan from "./gabungan";
import Kotak from "./kotak";
import Lingkaran from "./lingkaran";
import Titik from "./titik";
import Visitor from "./visitor";

export default class XMLExportVisitor implements Visitor {
    visitTitik(t: Titik): void {
        appendFile("xml", t.draw(), (err: Error) => {
            if (err) throw err
            console.log("Titik was exported to file")
        })
    }
    visitLingkaran(l: Lingkaran): void {
        appendFile("xml", l.draw(), (err: Error) => {
            if (err) throw err
            console.log("Lingkaran was exported to file")
        })
    }
    visitKotak(k: Kotak): void {
        appendFile("xml", k.draw(), (err: Error) => {
            if (err) throw err
            console.log("Kotak was exported to file")
        })
    }
    visitGabungan(g: Gabungan): void {
        appendFile("xml", g.draw(), (err: Error) => {
            if (err) throw err
            console.log("Gabungan was exported to file")
        })
    }
}
