import Product from "./product"

export default class Connection {
    private host
    private username
    private password

    constructor(host: string, username: string, password: string) {
        this.host = host
        this.username = username
        this.password = password
        // do real db connect
        console.log(`DB connect: ${this.host}:${this.username}:${this.password}`)
    }

    sql(command: string, ...params) {
        // do real work
        console.log("Success")
        const product1 = new Product()
        product1.setId("2")
        product1.setName("Contoh 2")
        product1.setPrice(2000)
        const product2 = new Product()
        product2.setId("3")
        product2.setName("Contoh 3")
        product2.setPrice(3000)
        return [product1, product2]
    }
}
