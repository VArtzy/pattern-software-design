export default interface ThirdPartyYoutubeLib {
    listVideos(): string[]
    getVideoInfo(id: number): string
    downloadVideo(id: number): void
}
