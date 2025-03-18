import Strategy from "./strategy";

export default class ToMorseCodeStrategy implements Strategy {
    log(message: string, timestamp: string): void {
        const morseCodeMessage = message
            .split('')
            .map(char => this.log[char.toLowerCase()] || char)
            .join(' ')

        console.log(`${timestamp} - ${morseCodeMessage}`)
    }
}
