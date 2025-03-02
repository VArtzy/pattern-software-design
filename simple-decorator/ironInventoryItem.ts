import InventoryItem from "./inventoryItem";

/** Decorator class besi */
export default class IronInventoryItem extends InventoryItem {
    constructor(baseItem: InventoryItem) {
        super(`${baseItem.name} besi`, baseItem.price + 10000)
    }
}
