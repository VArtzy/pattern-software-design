import { appendFileSync } from "fs";
import Image from "./image";
import Table from "./table";
import Text from "./text";
import Visitor from "./visitor";

export default class PDFExport implements Visitor {
    private target: string

    constructor(target: string) {
        this.target = target
    }

    visitText(text: Text): void {
        appendFileSync(this.target, `1 0 obj\n<<(${text.sanitaze()})>>\nendobj\n`);
    }
    visitImage(image: Image): void {
        appendFileSync(this.target, `2 0 obj\n<<(${image.src})>>\nendobj\n`);
    }
    visitTable(table: Table): void {
        appendFileSync(this.target, `3 0 obj\n<<(${table.stringify()})>>\nendobj\n`);
    }
}
