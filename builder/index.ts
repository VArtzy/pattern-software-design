import CustomerBuilder from './customerBuilder'

const customer1 = new CustomerBuilder().setFirstName("John").setPhone("123123").setAge(30).build()
const customer2 = new CustomerBuilder().setFirstName("Jane").setAddress("123 Main St").setPhone("456456").setAge(35).build()
const customer3 = new CustomerBuilder().setFirstName("Joe").setLastName("Doe").setPhone("789789").setAge(40).build()
const customer4 = new CustomerBuilder().setFirstName("Jill").setLastName("Hoen").setPhone("101010").setAge(45).setHobby("Reading").build()

console.log(customer1)
console.log(customer2)
console.log(customer3)
console.log(customer4)
