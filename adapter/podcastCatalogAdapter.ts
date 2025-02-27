import CatalogAdapter from "./catalogAdapter";
import Podcast from "./podcast";

export default class PodcastCatalogAdapter implements CatalogAdapter {
    private item: Podcast

    constructor(podcast: Podcast) {
        this.item = podcast
    }

    getCatalogTitle(): string {
        return `${this.item.title} by ${this.item.author} with ${this.item.duration} second(s)`
    }
}
