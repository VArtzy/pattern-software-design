import Product from "./product";
import ProductRepository from "./productRepository";

const product = new Product()
product.setId("1")
product.setName("Contoh 1")
product.setPrice(1000)

const repository = new ProductRepository()

repository.insert(product)

product.setPrice(2000)
repository.update(product)

repository.delete(product.getId())

const products = repository.all()
console.log(products)
