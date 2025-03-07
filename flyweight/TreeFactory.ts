import TreeType from "./TreeType"

export default class TreeFactory {
    private static treeTypes: TreeType[] = []

    static getTreeType(name: string, color: string, texture: string) {
        let type = this.treeTypes.find(t => name === t.name && color === t.color && texture === t.texture)
        if (type === undefined) {
            type = new TreeType(name, color, texture)
            this.treeTypes.push(type)
        }

        return type
    }
}
