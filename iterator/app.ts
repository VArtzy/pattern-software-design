import WordsCollection from "./wordsCollection";

const collection = new WordsCollection()
collection.addItem('Satu')
collection.addItem('Dua')
collection.addItem('Tiga')

const iterator = collection.getIterator()

console.log('Traversal maju')
while (iterator.valid()) {
    console.log(iterator.next())
}

const reverseIterator = collection.getReverseIterator()

console.log('\nTraversal mundur')
while(reverseIterator.valid()) {
    console.log(reverseIterator.next())
}

// kita melihat dua jenis cara/metode traverse menggunakan iterator, yaitu alur maju dan mundur. Membawa fleksibilitas dan kemudahan dalam mengakses elemen dalam sebuah struktur data sehingga client/code dengan mudah mengakses dan menggunakan data tanpa tahu apa yang dilakukan iterator (abstraksi) tanpa mengubah pengunaan kode (dapat kita lihat, seperti while loop yang sama pada kode diatas)
