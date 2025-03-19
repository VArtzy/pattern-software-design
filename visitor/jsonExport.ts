import { appendFileSync } from "fs";
import Image from "./image";
import Table from "./table";
import Text from "./text";
import Visitor from "./visitor";

export default class JSONExport implements Visitor {
    private target: string

    constructor(target: string) {
        this.target = target
    }

    visitText(text: Text): void {
        appendFileSync(this.target, JSON.stringify({paragraph: text.sanitaze()}))
    }
    visitImage(image: Image): void {
        appendFileSync(this.target, JSON.stringify({image: image.src}))
    }
    visitTable(table: Table): void {
        appendFileSync(this.target, JSON.stringify({table: table.stringify()}))
    }
}
