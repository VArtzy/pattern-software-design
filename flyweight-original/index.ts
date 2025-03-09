import TreeFactory from "./TreeFactory";
import Forest from "./forest";
import { serialize } from "v8";
import NormalTree from "./normalTree";

const forest = new Forest()

forest.plantTree(1, 2, "pine", "green", "pine texture")
forest.plantTree(2, 3, "oak", "brown", "oak texture")

forest.draw("canvas")

const trees: NormalTree[] = []
const tree1 = new NormalTree(1, 2, "pine", "green", "pine texture")
const tree2 = new NormalTree(2, 3, "oak", "brown", "oak texture")
trees.push(tree1, tree2)

const treeTypeSize = TreeFactory.treeTypes.reduce((acc, tree) => acc + serialize(tree).byteLength, 0)
const treeSize = forest.trees.reduce((acc, tree) => acc + serialize(tree).byteLength, 0)

console.log(forest.trees)
console.log(trees)

console.log(`Flyweight pattern (intrinsic + extrinsic): ${treeSize} + ${treeTypeSize} = ${treeTypeSize + treeSize} bytes`)
console.log(`Flyweight pattern: ${treeSize} bytes`)
console.log("Without Flyweight: " + trees.reduce((acc, tree) => acc + serialize(tree).byteLength, 0) + " bytes")

// summary: flyweight pattern didn't work this way in typescript
