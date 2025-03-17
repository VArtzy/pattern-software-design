import Customer from "./customer";
import Mall from "./mall";
import Toko from "./toko";

const aliodas = new Toko("Aliodas")

const farrel = new Customer("Farrel")
aliodas.events.subscribe("sale", farrel)
aliodas.events.subscribe("inflation", farrel)

const hartono = new Mall("Hartono")
aliodas.events.subscribe("sale", hartono)
aliodas.events.subscribe("inflation", hartono)

aliodas.events.unsubscribe("inflation", farrel)

aliodas.sale(10)
aliodas.inflation(5)

hartono.printSales()
