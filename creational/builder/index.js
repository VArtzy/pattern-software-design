// import Person from './person.js';
import PersonBuilder from './personBuilder.js'

// Employees
// const farrel = new Person('Farrel', true, true, 60)
// const eko = new Person('Eko', true, false, 20)
// const rully = new Person('Rully', true, false)

const farrel = new PersonBuilder('Farrel').employee().manager(60).build()
const eko = new PersonBuilder('Eko').employee().partTime().build()
const rully = new PersonBuilder('Rully').employee().build()

// Shoppers
// const budi = new Person('Budi', false, false, 0, 500, ['jeans', 'sunglasses'])
// const tono = new Person('Tono', false, false, 0, 1000)

const budi = new PersonBuilder('Budi').money(500).list(['jeans', 'sunglasses']).build()
const tono = new PersonBuilder('Tono').money(1000).build()

console.log(farrel.toString(), eko.toString(), rully.toString(), budi.toString(), tono.toString())
