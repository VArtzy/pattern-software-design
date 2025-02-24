import AnimalFactory from "./animalFactory"
import EmployeeFactory from "./employeeFactory"

const employee1 = EmployeeFactory.createManager("Budi")
const employee2 = EmployeeFactory.createManager("Joko")
const employee3 = EmployeeFactory.createStaff("Eko")
const employee4 = EmployeeFactory.createStaff("Farrel")

const tiger = AnimalFactory.create("tiger")
const cat = AnimalFactory.create("cat")
const dog = AnimalFactory.create("dog")

console.log(employee1, employee2, employee3, employee4, tiger, cat, dog)
