import ThirdPartyYoutubeLib from "./thirdPartyYoutubeLib";

export default class CachedYoutubeClass implements ThirdPartyYoutubeLib {
    private service: ThirdPartyYoutubeLib
    private listCache: string[]
    private videoCache: string
    public needReset: boolean

    constructor(service: ThirdPartyYoutubeLib) {
        this.service = service
    }

    listVideos(): string[] {
        if (this.listCache === undefined || this.needReset) {
            this.listCache = this.service.listVideos()
        }
        return this.listCache
    }

    getVideoInfo(id: number): string {
        if (this.videoCache === undefined || this.needReset) {
            this.videoCache = this.service.getVideoInfo(id)
        }
        return this.videoCache
    }

    downloadVideo(id: number): void {
        if (this.needReset) {
            this.service.downloadVideo(id)
        }
    }
}
