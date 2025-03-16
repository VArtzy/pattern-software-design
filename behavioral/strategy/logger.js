import LogStategy from "./logStrategy.js"
import config from "./config.json" with { type: "json" }
class Logger {
    constructor(strategy = "toConsole") {
        this.logs = []
        this.strategy = LogStategy[strategy]
    }

    get count() {
        return this.logs.length
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStategy[newStrategy]
    }

    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.strategy(timestamp, message)
    }
}

export default new Logger(config.logger.strategy)
