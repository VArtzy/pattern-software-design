import TreeFactory from "./TreeFactory";
import Tree from "./tree";

export default class Forest {
    private trees: Tree[] = []

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = TreeFactory.getTreeType(name, color, texture)
        const tree = new Tree(x, y, type)
        this.trees.push(tree)
    }

    draw(canvas: string) {
        for(const tree of this.trees) {
            tree.draw(canvas)
        }
    }
}
