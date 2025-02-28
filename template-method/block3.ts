import BlockTemplate from "./blockTemplate"

export default class Block3 extends BlockTemplate {
    getTitle(): string {
        return "START BLOCK 3"
    }
    getEndTitle(): string {
        return "END BLOCK 3"
    }
    getCharacter(): string {
        return "X"
    }
    getHeight(): number {
        return 10
    }
    getWidth(): number {
        return 15
    }
}
