import Store from './store.js'
import inventory from './inventory.json' with { type: 'json' }

const skiShop = new Store('Steep and Deep', inventory)

const searchItem = 'powder skis'
const results = skiShop.find(searchItem)

console.log(results)
