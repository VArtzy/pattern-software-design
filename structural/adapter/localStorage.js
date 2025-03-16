import { writeFile, existsSync, readFileSync, unlink } from 'fs'

class LocalStorage {
    constructor() {
        if (existsSync('localStorage.json')) {
            console.log('Loading items from local storage')
            const items = readFileSync('localStorage.json')
            this.items = JSON.parse(items)
        } else {
            this.items = {}
        }
    }
    get length() {
        return Object.keys(this.items).length
    } 

    getItem(key) {
        return this.items[key]
    }

    setItem(key, value) {
        this.items[key] = value
        const data = JSON.stringify(this.items)
        writeFile('localStorage.json', data, error => {
            if (error) throw Error(error)
        })
    }

    clear() {
        this.items = {}
        unlink('localStorage.json', () => {
            console.log('Local storage file removed')
        })
    }
}

export default new LocalStorage()
