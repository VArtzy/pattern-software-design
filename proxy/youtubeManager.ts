import ThirdPartyYoutubeLib from "./thirdPartyYoutubeLib";

export default class YoutubeManager {
    private service: ThirdPartyYoutubeLib

    constructor(service: ThirdPartyYoutubeLib) {
        this.service = service
    }

    renderVideoPage(id: number) {
        const info = this.service.getVideoInfo(id)
        console.log(info)
    }

    renderListPanel() {
        const list = this.service.listVideos()
        console.log(list)
    }

    reactOnUserInput(id: number) {
        this.renderVideoPage(id)
        this.renderListPanel()
    }
}
