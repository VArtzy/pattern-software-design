import TreeFactory from "./TreeFactory";
import Forest from "./forest";
import { serialize } from "v8";
import NormalTree from "./normalTree";

const forest = new Forest()

forest.plantTree(1, 2, "pine", "green", "pine texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")

forest.draw("canvas")

const trees: NormalTree[] = []
const tree1 = new NormalTree(1, 2, "pine", "green", "pine texture")
const tree2 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree3 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree4 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree5 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree6 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree7 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree8 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree9 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree10 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree11 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree12 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree13 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree14 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree15 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree16 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree17 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree18 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree19 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree20 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree21 = new NormalTree(2, 3, "oak", "brown", "oak texture")
const tree22 = new NormalTree(2, 3, "oak", "brown", "oak texture")
trees.push(tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, tree11, tree12, tree13, tree14, tree15, tree16, tree17, tree18, tree19, tree20, tree21, tree22)

const treeTypeSize = TreeFactory.treeTypes.reduce((acc, tree) => acc + serialize(tree).byteLength, 0)
const treeSize = forest.trees.reduce((acc, tree) => acc + serialize(tree).byteLength, 0)
console.log(forest.trees)
console.log(`Flyweight pattern: ${treeTypeSize} + ${treeSize} = ${treeTypeSize + treeSize} bytes`)
console.log("Without Flyweight: " + trees.reduce((acc, tree) => acc + serialize(tree).byteLength, 0) + " bytes")

// summary: flyweight pattern didn't work this way in typescript
