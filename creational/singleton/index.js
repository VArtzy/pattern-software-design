import logger from './logger.js'
import Store from './store.js'
import Shopper from './shopper.js'

logger.log('Starting app...')

const farrel = new Shopper('Farrel', 1000)
const laptop = new Store('Laptop', [
    {
        item: 'HP Laptop',
        qty: 100,
        price: 1000
    },
    {
        item: 'Dell Laptop',
        qty: 100,
        price: 1000
    }
])


logger.log('Finished config...')

console.log(`${logger.count} logs total`)
logger.logs.map(log => console.log(`   ${log.message}`))
