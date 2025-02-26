import Connection from "./connection"

export default class OrderDetail {
    save(orderId: string, product: string) {
        Connection.conn().sql(`INSERT INTO order (id, product) VALUES (${orderId}, ${product})`)
    }
}
