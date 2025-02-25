import Arena from "./arena"
import Enemy from "./enemy"
import GameFactory from "./gameFactory"
import Level from "./level"

export default class Game {
    private level: Level
    private arena: Arena
    private enemy: Enemy

    constructor(gameFactory: GameFactory) {
        this.level = gameFactory.createLevel()
        this.arena = gameFactory.createArena()
        this.enemy = gameFactory.createEnemy()
    }

    start() {
        this.level.start()
        this.arena.start()
        this.enemy.start()
    }
}
