import { appendFile } from 'fs'
class LogStategy {
    static noDate(_, message) {
        console.log(message);
    }

    static toFile(timestamp, message) {
        const filename = './logs.txt';
        appendFile(filename, `${timestamp} - ${message} \n`, error => {
            if (error) throw new Error('Error writing to file')
        })
    }

    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`);
    }

    static toMorseCode(timestamp, message) {
        const morseCodeMessage = message
            .split('')
            .map(char => LogStategy.toMorseCode[char.toLowerCase()] || char)
            .join(' ');

        console.log(`${timestamp} - ${morseCodeMessage}`);
    }

    static none() {}
}

export default LogStategy
