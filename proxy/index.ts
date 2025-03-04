import CachedYoutubeClass from "./cachedYoutubeClass";
import ThirdPartyYoutubeClass from "./thirdPartyYoutubeClass";
import YoutubeManager from "./youtubeManager";

const aYoutubeService = new ThirdPartyYoutubeClass()
const aYoutubeProxy = new CachedYoutubeClass(aYoutubeService)
const manager = new YoutubeManager(aYoutubeProxy)
manager.reactOnUserInput(1)
