import Image from "./image"
import Table from "./table"
import Text from "./text"

export default interface Visitor {
    visitText(text: Text): void
    visitImage(image: Image): void
    visitTable(table: Table): void
}
