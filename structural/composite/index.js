import CatalogItem from "./catalogItem.js"
import CatalogGroup from "./catalogGroup.js"

const boots = new CatalogItem("Leather Boots", 79.99)
const sneakers = new CatalogItem("Kicks", 39.99)
const flipFlops = new CatalogItem("California work boots", 19.99)

const groupShoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops])

const groupFood = new CatalogGroup("Food for while you try on clothes", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French Fries", 3.99)
])

const keychain = new CatalogItem("Key Chain", 0.99)

const catalog = new CatalogGroup("Clothes and Food", [keychain, groupShoes, groupFood])

console.log(`$${catalog.total}`)
catalog.print()
