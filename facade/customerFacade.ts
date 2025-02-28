import AddressRepository from "./addressRepository"
import Customer from "./customer"
import CustomerRepository from "./customerRepository"

/** can be called as `helper` rather than `facade` */
export default class CustomerFacade {
    private static customerRepository = new CustomerRepository()
    private static addressRepository = new AddressRepository()

    static save(customer: Customer) {
        this.customerRepository.save(customer)

        for (const addr of customer.getAddresses()) {
            this.addressRepository.save(addr)
        }
    }

    /** VArtz Object Notation encoding builder */
    static toVon(customer: Customer) {
        const customerArray = [customer.getId(), customer.getName(), customer.getAddresses()]
        return Object.getOwnPropertyNames(customer).map((prop, i) => prop + ":" + customerArray[i]).join()
    }
}
