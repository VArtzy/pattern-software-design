import Customer from "./customer";

export default class CustomerRepository {
    save(customer: Customer) {
        console.log("Saving customer to database: " + customer.getId())
    }
}
