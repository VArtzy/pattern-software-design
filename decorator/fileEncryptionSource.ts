import DataSource from "./dataSource";

export default class fileEncryptionSource implements DataSource {
    private filename: string

    constructor(filename: string) {
        this.filename = filename
    }

    writeData(data: string): void {
        console.log(`encrypted ${data}`)
    }
    readData(): string {
        return `decrypted hello`
    }
}
