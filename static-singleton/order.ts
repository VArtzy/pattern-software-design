import Connection from "./connection";

export default class Order {
    save(orderId: string) {
        Connection.conn().sql(`INSERT INTO orders VALUES (${orderId})`)
    }
}
