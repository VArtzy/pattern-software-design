import Connection from "./connection";

export default class Order {
    save(orderId: string) {
        const { HOST, USERNAME, PASSWORD } = process.env
        const connection = new Connection(HOST!, USERNAME!, PASSWORD!)
        Connection.conn()
        connection.sql(`INSERT INTO orders VALUES (${orderId})`)
    }
}
