import CompressionDecorator from "./compressionDecorator"
import EncryptionDecorator from "./encryptionDecorator"
// import fileCompressionEncryptionSource from "./fileCompressionEncryptionSource"
// import fileCompressionSource from "./fileCompressionSource"
import FileDataSource from "./fileDataSource"

const data = `hello`

const source = new FileDataSource(`gaji.txt`)
source.writeData(data)

//const compression = new fileCompressionSource(`gaji.txt`)
//compression.writeData(data)

//const compressedEncryption = new fileCompressionEncryptionSource(`gaji.txt`)
//compressedEncryption.writeData(data)

// compressedEncrypted !== EncryptedCompressed => new fileEncryptionCompressionSource()

const compression = new CompressionDecorator(source)
compression.writeData(data)

const compressedEncryption = new EncryptionDecorator(compression)
compressedEncryption.writeData(data)
