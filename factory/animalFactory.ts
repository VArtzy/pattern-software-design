import { Animal, Cat, Dog, Tiger2 } from "./animal";

export default class AnimalFactory {
    public static create(type: string): Animal | null {
        if (type === "tiger") {
            return new Tiger2()
        } else if (type === "cat") {
            return new Cat()
        } else if (type === "dog") {
            return new Dog()
        }
        return null
    }
}
