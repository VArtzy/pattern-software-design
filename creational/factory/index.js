import userFactory from './userFactory.js'

const farrel = userFactory('Farrel Nikoson', 100)
const eko = userFactory('Eko Khannedy', 100, 'employee', 'Budi')

eko.payDay(100)

console.log(farrel)
console.log(eko)
