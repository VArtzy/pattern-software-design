import Store from "./store.js"
import Shopper from "./shopper.js"
import Mall from "./mall.js"

const catsAndThings = new Store("Cats & Things")
const insAndOuts = new Store("Ins and Outs")

const farrel = new Shopper("Farrel")
const eko = new Shopper("Eko")
const budi = new Shopper("Budi")
const rully = new Shopper("Rully")

const valleyMall = new Mall()

catsAndThings.subscribe(farrel)
catsAndThings.subscribe(eko)
catsAndThings.subscribe(rully)
catsAndThings.subscribe(valleyMall)

insAndOuts.subscribe(budi)
insAndOuts.subscribe(valleyMall)

catsAndThings.sale(20)
insAndOuts.sale(50)

console.log(valleyMall.sales)
