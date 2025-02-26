export default class Connection {
    private static connection: Connection
    private static host = process.env.HOST || "localhost"
    private static username = process.env.USERNAME || "root"
    private static password = process.env.PASSWORD || "root"

    constructor(host: string, username: string, password: string) {
        Connection.host = host
        Connection.username = username
        Connection.password = password
    }

    sql(command: string) {
        // do real work
        console.log("Success")
    }

    static conn() {
        if (!Connection.connection) {
            Connection.connection = new Connection(Connection.host, Connection.username, Connection.password)
            console.log(`DB connect: ${Connection.host}:${Connection.username}:${Connection.password}`)
        }

        return Connection.connection
    }
}
