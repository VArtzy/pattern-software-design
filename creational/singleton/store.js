import logger from './logger.js'

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New store: ${name} has ${inventory.length} items in stock.`) 
    }
}

export default Store
