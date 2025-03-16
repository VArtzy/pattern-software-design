import Shopper from "./shopper.js"
import { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } from "./inventoryItem.js"

const farrel = new Shopper("Farrel", 4000)

const walkman = new InventoryItem("Walkman", 29.99)
const necklace = new InventoryItem("Necklace", 9.99)

const goldNecklace = new GoldenInventoryItem(necklace)
const diamondGoldNecklace = new DiamondInventoryItem(goldNecklace)

const diamondWalkman = new DiamondInventoryItem(walkman)

farrel.purchase(diamondGoldNecklace)
farrel.purchase(diamondWalkman)

farrel.printStatus()
diamondWalkman.print()
