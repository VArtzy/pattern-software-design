import Binatang from "./binatang";
import Anjing from "./anjing";
import Hiu from "./hiu";
import Ikan from "./ikan";
import Kambing from "./kambing";
import Ayam from "./ayam";
import Lele from "./lele";
import BinatangDarat from "./binatangDarat";
import BinatangAir from "./binatangAir";

const animals: Binatang[] = [
    new Anjing(),
    new Ayam(),
    new Kambing(),
    new Ikan(),
    new Lele(),
    new Hiu()
]

//animals.forEach(animal => {
//    if (animal.hidupDiDarat()) {
//        if (animal instanceof Anjing) {
//            console.log(animal.getNama() + " hidup di darat dengan kaki " + animal.getJumlahKaki())
//        } else if (animal instanceof Ayam) {
//            console.log(animal.getNama() + " hidup di darat dengan kaki " + animal.getJumlahKaki())
//        } else if (animal instanceof Kambing) {
//            console.log(animal.getNama() + " hidup di darat dengan kaki " + animal.getJumlahKaki())
//        }
//    } else if (animal.hidupDiAir()) {
//        console.log(animal.getNama() + " hidup di air")
//    }
//})

animals.forEach(animal => {
    if (animal instanceof BinatangDarat) {
        console.log(animal.getNama() + " hidup di darat dengan kaki " + animal.getJumlahKaki() + " dan bertelinga " + animal.getJumlahTelinga())
    } else if (animal instanceof BinatangAir) {
        console.log(animal.getNama() + " hidup di air")
    }
})
