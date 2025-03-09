import Tree from "./tree";

interface TreeType {
    name: string,
    color: string,
    texture: string
}

export default class TreeFactory {
    public static trees: Map<TreeType, Tree> = new Map()

    static getTree(name: string, color: string, texture: string) {
        let tree = this.trees.get({name, color, texture})
        if (!tree) {
            tree = new Tree(name, color, texture)
            this.trees.set({name, color, texture}, tree)
        }
        return tree
    }
}
