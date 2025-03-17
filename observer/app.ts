import Customer from "./customer";
import Mall from "./mall";
import Toko from "./toko";

const aliodas = new Toko("Aliodas")
const ibox = new Toko("Ibox")

const farrel = new Customer("Farrel")
const eko = new Customer("Eko")
const budi = new Customer("Budi")
const rully = new Customer("Rully")

const hartono = new Mall("Hartono")

aliodas.subscribe(farrel)
aliodas.subscribe(eko)
aliodas.subscribe(rully)
aliodas.subscribe(hartono)

ibox.subscribe(farrel)
ibox.subscribe(budi)
ibox.subscribe(hartono)

aliodas.sale(20)
ibox.sale(10)

hartono.printSales()
