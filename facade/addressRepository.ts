import Address from "./address";

export default class AddressRepository {
    save(address: Address) {
        console.log("Saving address to database: " + address.getId())
    }
}
