export default interface Level {
    start(): void
}

export class LevelEasy implements Level {
    start(): void {
        console.log("Level Easy")
    }
}

export class LevelMedium implements Level {
    start(): void {
        console.log("Level Medium")
    }
}

export class LevelHard implements Level {
    start(): void {
        console.log("Level Hard")
    }
}
