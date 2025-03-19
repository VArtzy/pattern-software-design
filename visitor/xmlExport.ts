import { appendFileSync } from "fs";
import Image from "./image";
import Table from "./table";
import Text from "./text";
import Visitor from "./visitor";

export default class XMLExport implements Visitor {
    private target: string

    constructor(target: string) {
        this.target = target
    }

    visitText(text: Text): void {
        appendFileSync(this.target, `<text>${text.sanitaze()}</text>`);
    }
    visitImage(image: Image): void {
        appendFileSync(this.target, `<image>${image.src}</image>`);
    }
    visitTable(table: Table): void {
        appendFileSync(this.target, `<table>${table.stringify()}</table>`);
    }
}
