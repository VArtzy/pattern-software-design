import Category from "./category";

export default class CompositeCategory extends Category {
    private categories: Category[]

    constructor(name: string, categories: Category[]) {
        super(name)
        this.categories = categories
    }

    getCategories() {
        return this.categories
    }

    setCategories(categories: Category[]) {
        this.categories = categories
    }
}
