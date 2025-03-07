import Forest from "./forest";

const forest = new Forest()

forest.plantTree(1, 2, "pine", "green", "pine texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")

forest.draw("canvas")
