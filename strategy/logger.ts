import config from "./config.json" with { type: "json" };
import ConsoleStrategy from "./consoleStrategy";
import FileStrategy from "./fileStrategy";
import NoDateStrategy from "./noDateStrategy";
import NoneStrategy from "./noneStrategy";
import ToMorseCodeStrategy from "./toMorseCodeStrategy";
import Strategy from "./strategy";

type Log = {
    message: string,
    timestamp: string
}

class Logger {
    private logs: Log[]
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.logs = []
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    log(message: string) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.strategy.log(message, timestamp)
    }
}

globalThis.strategy = {
    none: NoneStrategy,
    console: ConsoleStrategy,
    file: FileStrategy,
    noDate: NoDateStrategy,
    toMorseCode: ToMorseCodeStrategy
}

/** Strict */
//let strategy: Strategy
//try {
//    strategy = new globalThis.strategy[config.logger.strategy]()
//} catch (e) {
//    if (e instanceof TypeError) console.error(`Error: strategy not defined. List of strategy:\n${Object.keys(globalThis.strategy).map(key => `   ${key}`).join('\n')}`)
//    process.exit()
//}

/** Flexible */
let strategy: Strategy = new NoneStrategy()
try {
    strategy = new globalThis.strategy[config.logger.strategy]()
} catch (e) {
    if (e instanceof TypeError) console.warn(`Warning: strategy not defined, using default strategy "none". List of strategy:\n${Object.keys(globalThis.strategy).map(key => `   ${key}`).join('\n')}`)
}

export default new Logger(strategy)
