class FsProxy {
    constructor(fs) {
        this.fs = fs
    }
    readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback('Can only read markdown files.')
        }

        this.fs.readFile(path, format, (error, content) => {
            if (error) {
                return callback(error)
            }

            return callback(null, content)
        })
    }
}

export default FsProxy
