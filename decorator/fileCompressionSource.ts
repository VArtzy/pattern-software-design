import DataSource from "./dataSource";

export default class fileCompressionSource implements DataSource {
    private filename: string

    constructor(filename: string) {
        this.filename = filename
    }

    writeData(data: string): void {
        console.log(`compressed ${data}`)
    }
    readData(): string {
        return `uncompressed hello`
    }
}
