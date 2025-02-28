import AccountFacade from "./accountFacade";
import Address from "./address";
import Customer from "./customer";
import CustomerFacade from "./customerFacade";

// Facade for hiding `helper` complexity (often called Helper class)
const customer = new Customer("1", "Farrel")
console.log(CustomerFacade.toVon(customer))

// Facade for hiding database & repository complexity (often called Facade class)
const customer1 = new Customer("2", "Joko")

const address1 = new Address("1", "Imam Bonjol", "Indonesia")
const address2 = new Address("2", "Gatot Subroto", "Indonesia")

customer1.getAddresses().push(address1)
customer1.getAddresses().push(address2)

CustomerFacade.save(customer1)

// Facade for hiding bussiness logic complexity (ofted called Service class)
const accountFacade = new AccountFacade()
accountFacade.transfer("0001", "0002", 1000000)
