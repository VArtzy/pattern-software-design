import Handler from "./handler";
import { MonyetHandler } from "./monyetHandler";
import { PandaHandler } from "./pandaHandler";
import { TupaiHandler } from "./tupaiHandler";

function clientCode(handler: Handler) {
    const makanan = ['kacang', 'pisang', 'nasi goreng']

    for (const m of makanan) {
        console.log(`Client: siapa mau makan ${m}?`)

        try {
            const hasil = handler.handle(m)
            console.log(`   ${hasil}`)
        } catch(e) {
            console.log(`   ${m} gagal dimakan.`)
        }
    }
}

const monyet = new MonyetHandler()
const tupai = new TupaiHandler()
const panda = new PandaHandler()

monyet.setNext(tupai).setNext(panda)

console.log('Chain: Monyet > Tupai > Panda\n')
clientCode(monyet)

console.log('\nSubchain: Tupai > Panda\n')
clientCode(tupai)
