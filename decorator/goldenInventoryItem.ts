import InventoryItem from "./inventoryItem";

/** Decorator class emas */
export default class GoldenInventoryItem extends InventoryItem {
    private keras: boolean

    constructor(baseItem: InventoryItem) {
        super(`${baseItem.name} emas`, baseItem.price + 20000)
        this.keras = true
    }

    print(): void {
        console.log(`${this.name} cukup berat...`)
    }
}
