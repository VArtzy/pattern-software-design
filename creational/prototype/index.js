import scout from './scout.js';

const farrel = scout.clone()
farrel.name = 'Farrel Nikoson'
farrel.addItemToList('Asus ROG')

const eko = scout.clone()
eko.name = 'Eko Khannedy'
eko.addItemToList('Macbook Pro')

console.log(`${farrel.name}: ${farrel.shoppingList}`)
console.log(`${eko.name}: ${eko.shoppingList}`)
