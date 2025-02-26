import DatabasePool from "./databasePool";

export default class Order {
    save(orderId: string) {
        const connection = DatabasePool.conn()
        connection.sql(`INSERT INTO orders VALUES (${orderId})`)
        DatabasePool.close(connection)
    }
}
