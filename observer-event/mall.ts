import { Sale } from "./sale";
import TokoListener from "./tokoListener";

export default class Mall implements TokoListener {
    private name: string
    private sales: Sale[]

    constructor(name: string) {
        this.name = name
        this.sales = []
    }

    notify(data: Sale): void {
        this.sales.push({ discount: data.discount, storeName: data.storeName })
    }

    printSales() {
        console.log(`Outlet ${this.name} mall yang sedang melakukan perubahan harga:`)
        this.sales.forEach((sale, i) => console.log(`   ${i + 1}. Toko ${sale.storeName} dengan perubahan ${sale.discount}`))
    }
}
