import TokoListener from "./tokoListener";

type Sale = {
    storeName: string,
    discount: number
}

export default class Mall implements TokoListener {
    private name: string
    private sales: Sale[]

    constructor(name: string) {
        this.name = name
        this.sales = []
    }

    notify(name: string, discount: number): void {
        this.sales.push({ discount, storeName: name })
    }

    printSales() {
        console.log(`Outlet ${this.name} mall yang sedang diskon:`)
        this.sales.forEach((sale, i) => console.log(`   ${i + 1}. Toko ${sale.storeName} dengan diskon ${sale.discount}`))
    }
}
