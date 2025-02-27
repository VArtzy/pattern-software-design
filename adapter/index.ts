import Book from "./book";
import BookCatalogAdapter from "./bookCatalogAdapter";
import CatalogAdapter from "./catalogAdapter";
import Podcast from "./podcast";
import PodcastCatalogAdapter from "./podcastCatalogAdapter";

const book1 = new BookCatalogAdapter(new Book(`Title 1`, `Farrel`))
const book2 = new BookCatalogAdapter(new Book(`Title 2`, `Eko`))
const book3 = new BookCatalogAdapter(new Book(`Title 3`, `Budi`))

const podcast1 = new PodcastCatalogAdapter(new Podcast(`Podcast 1`, `Ariel`, 360))
const podcast2 = new PodcastCatalogAdapter(new Podcast(`Podcast 2`, `Martin`, 420))
const podcast3 = new PodcastCatalogAdapter(new Podcast(`Podcast 3`, `Chip`, 500))

const list: CatalogAdapter[] = []
list.push(book1)
list.push(book2)
list.push(book3)
list.push(podcast1)
list.push(podcast2)
list.push(podcast3)

//list.forEach(item => {
//    if (item instanceof Book) {
//        console.log(`${item.title} by ${item.author}`)
//    } else if (item instanceof Podcast) {
//        console.log(`${item.title} by ${item.author} with ${item.duration} second(s)`)
//    } else {
//        console.log(`Unidentified object`)
//    }
//})

list.forEach(item => {
    console.log(item.getCatalogTitle())
})
