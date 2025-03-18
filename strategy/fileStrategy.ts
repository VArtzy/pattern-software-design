import { appendFile } from "fs";
import Strategy from "./strategy";

export default class FileStrategy implements Strategy {
    log(message: string, timestamp: string): void {
        const filename = "./log"
        appendFile(filename, `${timestamp} - ${message}\n`, (error: Error) => {
            if (error) throw new Error("Error writing to file")
        })
    }
}
