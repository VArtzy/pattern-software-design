import DataSourceDecorator from "./dataSourceDecorator"

export default class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        super.writeData(`encrypted ` + data)
    }

    readData(): string {
        return `decrypted ` + super.readData()
    }
}
