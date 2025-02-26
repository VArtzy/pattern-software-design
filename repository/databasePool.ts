import Connection from "./connection";

export default class DatabasePool {
    private static MAX = 10
    private static connection = new Connection(process.env.HOST, process.env.USERNAME, process.env.PASSWORD)
    private static pool: Connection[] = new Array(this.MAX).fill(this.connection)

    /**
        * Manual initialization
    static {
        for(let i = 0; i < DatabasePool.MAX; i++) {
            this.pool.push(new Connection(process.env.HOST, process.env.USERNAME, process.env.PASSWORD))
        }
    } */

    static conn() {
        if (this.pool.length === 0) {
            throw new EvalError("Koneksi sudah habis")
        }

        return this.pool.pop()!
    }

    static close(connection: Connection) {
        if (this.pool.length >= this.MAX) {
            throw new EvalError("Pool koneksi melebihi batas yang ditentukan")
        }

        this.pool.push(connection)
    }
}
