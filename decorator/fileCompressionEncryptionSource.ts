import DataSource from "./dataSource";

export default class fileCompressionEncryptionSource implements DataSource {
    private filename: string

    constructor(filename: string) {
        this.filename = filename
    }

    writeData(data: string): void {
        console.log(`compressed encrypted ${data}`)
    }
    readData(): string {
        return `uncompressed decrypted hello`
    }
}
