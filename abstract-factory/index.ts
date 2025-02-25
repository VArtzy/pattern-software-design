import Game from "./game";
import { GameFactoryEasy, GameFactoryHard, GameFactoryMedium } from "./gameFactory";

const gameEasy = new Game(new GameFactoryEasy())
gameEasy.start()

const gameMedium = new Game(new GameFactoryMedium())
gameMedium.start()

const gameHard = new Game(new GameFactoryHard())
gameHard.start()
