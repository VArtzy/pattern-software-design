class Mall {
    constructor() {
        this.sales = []
    }

    notify(storeName, discount) {
        this.sales.push({ storeName, discount })
    }
}

export default Mall
