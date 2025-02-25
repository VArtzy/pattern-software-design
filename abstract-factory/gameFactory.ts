import Arena, { ArenaEasy, ArenaHard, ArenaMedium } from "./arena";
import Enemy, { EnemyEasy, EnemyHard, EnemyMedium } from "./enemy";
import Level, { LevelEasy, LevelHard, LevelMedium } from "./level";

export default interface GameFactory {
    createLevel(): Level
    createArena(): Arena
    createEnemy(): Enemy
}

export class GameFactoryEasy implements GameFactory {
    createEnemy(): Enemy {
        return new EnemyEasy()
    }
    createLevel(): Level {
        return new LevelEasy()
    }
    createArena(): Arena {
        return new ArenaEasy()
    }
}

export class GameFactoryMedium implements GameFactory {
    createEnemy(): Enemy {
        return new EnemyMedium()
    }
    createLevel(): Level {
        return new LevelMedium()
    }
    createArena(): Arena {
        return new ArenaMedium()
    }
}

export class GameFactoryHard implements GameFactory {
    createEnemy(): Enemy {
        return new EnemyHard()
    }
    createLevel(): Level {
        return new LevelHard()
    }
    createArena(): Arena {
        return new ArenaHard()
    }
}
