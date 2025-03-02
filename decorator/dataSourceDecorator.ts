import DataSource from "./dataSource";

export default class DataSourceDecorator implements DataSource {
    private dataSource: DataSource

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource
    }

    writeData(data: string): void {
        this.dataSource.writeData(data)
    }
    readData(): string {
        return this.dataSource.readData()
    }
}
