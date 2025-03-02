import DataSourceDecorator from "./dataSourceDecorator";

export default class CompressionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        super.writeData(`compressed ` + data)
    }

    readData(): string {
        return `uncompressed ` + super.readData()
    }
}
