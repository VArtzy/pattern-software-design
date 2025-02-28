import BlockTemplate from "./blockTemplate"

export default class Block2 extends BlockTemplate {
    getTitle(): string {
        return "START BLOCK 2"
    }

    getEndTitle(): string {
        return "END BLOCK 2"
    }

    getCharacter(): string {
        return "A"
    }

    getHeight(): number {
        return 20
    }

    getWidth(): number {
        return 20
    }
}
