import BlockTemplate from "./blockTemplate"

export default class Block extends BlockTemplate {
    getTitle(): string {
        return "START BLOCK"
    }

    getEndTitle(): string {
        return "END BLOCK"
    }

    getCharacter(): string {
        return "O"
    }

    getHeight(): number {
        return 10
    }

    getWidth(): number {
        return 10
    }
}
