export default class Connection {
    private host
    private username
    private password

    constructor(host: string, username: string, password: string) {
        this.host = host
        this.username = username
        this.password = password
        // do real db connect
        console.log(`DB connect: ${this.host}:${this.username}:${this.password}`)
    }

    sql(command: string) {
        // do real work
        console.log("Success")
    }
}
