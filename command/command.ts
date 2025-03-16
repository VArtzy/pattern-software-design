/** Command pattern divide request/action into object (class) so it is more easy composable (e.g: we creating history -- undo/redo system) */
export default interface Command {
    get name(): string
    execute(): void
    undo(): void
}
