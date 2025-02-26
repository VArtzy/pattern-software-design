import DatabasePool from "./databasePool";
import Product from "./product";

/** also known as `Data Access Object (DAO)` */
export default class ProductRepository {
    insert(product: Product) {
        DatabasePool.conn().sql("INSERT INTO products(id, name, price) values (?, ?, ?)", product.getId(), product.getName(), product.getPrice())
    }

    update(product: Product) {
        DatabasePool.conn().sql("UPDATE products SET name = ?, price = ? where id = ?", product.getId(), product.getName(), product.getPrice())
    }

    delete(id: string) {
        DatabasePool.conn().sql("DELETE FROM products where id = ?", id)
    }

    all() {
        return DatabasePool.conn().sql("SELECT * FROM products")
    }
}
