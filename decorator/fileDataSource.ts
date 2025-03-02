import DataSource from "./dataSource";

export default class FileDataSource implements DataSource {
    private filename: string

    constructor(filename: string) {
        this.filename = filename
    }

    writeData(data: string): void {
        console.log(data)
    }
    readData(): string {
        return `hallo`
    }
}
