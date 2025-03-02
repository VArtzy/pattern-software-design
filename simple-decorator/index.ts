import GoldenInventoryItem from "./goldenInventoryItem";
import InventoryItem from "./inventoryItem";
import IronInventoryItem from "./ironInventoryItem";
import Shopper from "./shopper";

const farrel = new Shopper(`Farrel`, 100000)

const kalung = new InventoryItem(`Kalung`, 10000)
const topi = new InventoryItem(`Topi`, 15000)

const kalungBesi = new IronInventoryItem(kalung)
const kalungBesiEmas = new GoldenInventoryItem(kalungBesi)

const topiEmas = new GoldenInventoryItem(topi)

farrel.purchase(kalungBesiEmas)
farrel.purchase(topiEmas)

farrel.printStatus()
topiEmas.print()
