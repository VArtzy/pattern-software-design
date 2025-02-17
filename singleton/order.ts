import DatabaseHelper from "./databaseHelper";

export default class Order {
    save(orderId: string) {
        DatabaseHelper.conn().sql(`INSERT INTO orders VALUES (${orderId})`)
    }
}
