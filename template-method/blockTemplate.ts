export default abstract class BlockTemplate {
    start() {
        process.stdout.write(this.getTitle() + '\n')

        for (let i = 0; i < this.getHeight(); i++) {
            for (let j = 0; j < this.getWidth(); j++) {
                process.stdout.write(this.getCharacter())
            }
            process.stdout.write("\n\r")
        }

        process.stdout.write(this.getEndTitle() + '\n')
    }

    abstract getTitle(): string

    abstract getEndTitle(): string

    abstract getCharacter(): string

    abstract getHeight(): number

    abstract getWidth(): number
}
