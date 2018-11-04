import Axios from 'axios';
import {appConfig} from '../../config';
import {VideoClass} from '../../models/video.class';
import { CategoryClass } from '../../models/category.class';

const axios = Axios.create({
  baseURL: appConfig.getYoutubeEndPoint()
});

export class YoutubeService {
  getTrendingVideos(videosPerPage = appConfig.maxVideosToLoad) {
    const params = {
      part: appConfig.videoPartsToLoad,
      chart: appConfig.chart,
      videoCategoryId: appConfig.defaultCategoryId,
      regionCode: appConfig.defaultRegion,
      maxResults: videosPerPage,
      key: appConfig.youtubeApiKey
    };

    return axios.get('/videos', {params}).then((res) => {
      return res.data.items
        .map((item) => new VideoClass(item))
        .filter((item) => item.id !== '');
    }).catch((err) => err);
  }

  getCategoryList() {
    const params = {
      part: appConfig.categoryPartsToLoad,
      key: appConfig.youtubeApiKey,
      regionCode: appConfig.defaultRegion
    };

    return axios.get('/videoCategories', {params}).then((res) => {
      return res.data.items
        .map((item) => new CategoryClass(item))
        .filter((item) => item.id !== '');
    }).catch((err) => err);
  }
}
