import ThirdPartyYoutubeLib from "./thirdPartyYoutubeLib";

export default class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib {
    listVideos(): string[] {
        return ["2 - Adapter Design Pattern - 12min", "3 - Decorator Design Pattern - 8min", "4 - Composite Design Pattern - 7min"]
    }
    getVideoInfo(id: number): string {
        return `${id} - Proxy Design Pattern - 10min`
    }
    downloadVideo(id: number): void {
        console.log(`Download video with id: ${id}`)
    }
}
