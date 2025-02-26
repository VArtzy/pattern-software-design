import DatabasePool from "./databasePool"

export default class OrderDetail {
    save(orderId: string, product: string) {
        const connection = DatabasePool.conn()
        connection.sql(`INSERT INTO order_details VALUES (${orderId}, ${product})`)
        DatabasePool.close(connection)
    }
}
