export default class Connection {
    private static connection
    private static host
    private static username
    private static password

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
