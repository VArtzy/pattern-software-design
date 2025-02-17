import DatabaseHelper from "./databaseHelper"

export default class OrderDetail {
    save(orderId: string, product: string) {
        DatabaseHelper.conn().sql(`INSERT INTO order_details VALUES (${orderId}, ${product})`)
    }
}
