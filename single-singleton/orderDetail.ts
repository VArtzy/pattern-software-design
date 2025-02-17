import Connection from "./connection"

export default class OrderDetail {
    save(orderId: string, product: string) {
        const { HOST, USERNAME, PASSWORD } = process.env
        const connection = new Connection(HOST!, USERNAME!, PASSWORD!)
        Connection.conn()
        connection.sql(`INSERT INTO order (id, product) VALUES (${orderId}, ${product})`)
    }
}
