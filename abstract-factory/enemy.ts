export default interface Enemy {
    start(): void
}

export class EnemyEasy implements Enemy {
    start(): void {
        console.log("Enemy Easy")
    }
}

export class EnemyMedium implements Enemy {
    start(): void {
        console.log("Enemy Medium")
    }
}

export class EnemyHard implements Enemy {
    start(): void {
        console.log("Enemy Hard")
    }
}
