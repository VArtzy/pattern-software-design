import { appendFileSync } from "fs";
import Image from "./image";
import Table from "./table";
import Text from "./text";
import Visitor from "./visitor";

export default class LogExport implements Visitor {
    private target: string

    constructor(target: string) {
        this.target = target
    }

    visitText(text: Text): void {
        appendFileSync(this.target, `[${new Date().toISOString()}] Text: ${text.sanitaze()}\n`);
    }
    visitImage(image: Image): void {
        appendFileSync(this.target, `[${new Date().toISOString()}] Source: ${image.src}\n`);
    }
    visitTable(table: Table): void {
        appendFileSync(this.target, `[${new Date().toISOString()}] Table: ${table.stringify()}\n`);
    }
}
