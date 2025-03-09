import TreeFactory from "./treeFactory";
import { serialize } from "v8";

const tree = TreeFactory.getTree("oak", "brown", "oak texture")
const tree1 = TreeFactory.getTree("pine", "green", "pine texture")
tree.setPosition(1, 1)
tree1.setPosition(2, 3)
tree.draw("canvas")
tree1.draw("canvas")
console.log(serialize(tree).byteLength + serialize(tree1).byteLength)
