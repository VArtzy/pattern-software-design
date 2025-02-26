import Connection from "./connection";

// This is the DatabaseHelper singleton class that will be used to get the connection object
export default class DatabaseHelper {
    private static connection: Connection
    private static host = process.env.HOST || "localhost"
    private static username = process.env.USERNAME || "root"
    private static password = process.env.PASSWORD || "root"

    static conn() {
        if (!this.connection) {
            this.connection = new Connection(this.host, this.username, this.password)
        }

        return this.connection
    }
}
