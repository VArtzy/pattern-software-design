import { Sale } from "./sale";
import TokoListener from "./tokoListener";

export default class Customer implements TokoListener {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    notify(data: Sale): void {
        console.log(`${this.name}, toko ${data.storeName} sedang melakukan perubahan harga ${data.discount}%!`)
    }
}
