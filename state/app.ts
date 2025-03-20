import Document from "./document";
import User from "./user";

const user = new User(`Farrel`, `user`)

const document = new Document(user, `Dokumen Asli`)
document.render()

user.setRole(`author`)

document.render()

document.publish()

document.render()

user.setRole(`admin`)

document.render()

document.publish()

document.render()

document.publish()
document.publish()
document.publish()

document.render()

user.setRole(`author`)

document.render()

user.setRole(`user`)

document.render()

// state pattern juga bisa backward tergantung dengan business logicnya. Misal jika dengan kita membuat method unpublish. Contoh state pattern yang cukup kompleks (mengandung backward, interchange, dll) ada di direktori ../state-example (https://github.com/VArtzy/pattern-software-design/tree/main/state-example)
