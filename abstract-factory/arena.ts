export default interface Arena {
    start(): void
}

export class ArenaEasy implements Arena {
    start(): void {
        console.log("Arena Easy")
    }
}

export class ArenaMedium implements Arena {
    start(): void {
        console.log("Arena Medium")
    }
}

export class ArenaHard implements Arena {
    start(): void {
        console.log("Arena Hard")
    }
}
