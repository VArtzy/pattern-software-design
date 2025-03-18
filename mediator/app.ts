import GroupChat from "./groupChat";
import Participant from "./participant";

const chat = new GroupChat()

const farrel = new Participant("Farrel", chat)
const eko = new Participant("Eko", chat)
const budi = new Participant("Budi", chat)

// farrel tidak perlu berketergantungan dengan eko atau budi, dan sebaliknya dengan menggunakan mediator pattern
farrel.send("Hallo guys")
eko.send("Hallo Farrel")
budi.send("Eko, gimana kabarnya?")
