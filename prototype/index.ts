import Store from "./store";

const store1 = new Store("Toko X", "Jakarta", "Indonesia", "Gadget")

const store2 = store1.clone()
store2.setName("Toko Y")

const store3 = store1.clone()
store3.setCity("Bandung")
store3.setName("Toko Z")

const store4 = store3.clone()
store4.setName("Toko W")
store4.setCategory("Fashion")

console.log(store1, store2, store3, store4)
