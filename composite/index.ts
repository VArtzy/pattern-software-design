import Category from "./category";
import CompositeCategory from "./compositeCategory";

const categories = [
    new CompositeCategory("Handphone", [
        new Category("Android"),
        new Category("iOS")
    ]),
    new CompositeCategory("Computer", [
        new Category("Laptop"),
        new Category("PC"),
    ]),
    new CompositeCategory("Fashion", [
        new CompositeCategory("Fashion Pria", [
            new Category("Celana Pria"),
            new CompositeCategory("Baju Pria", [
                new Category("Kaos Pria"),
                new Category("Kemeja Pria")
            ])
        ]),
        new Category("Fashion Wanita")
    ])
]

categories.forEach(category => printCategory(category))

function printCategory(category: Category) {
    console.log(category.getName())

    if (category instanceof CompositeCategory) {
        category.getCategories().forEach(category => printCategory(category))
    }
}
