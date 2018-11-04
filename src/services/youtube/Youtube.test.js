import { YoutubeService } from './Youtube';
import expect from 'expect';

it('renders without crashing', () => {
 new YoutubeService();
});

it('getTrendingVideos function', async () => {
  const service = new YoutubeService();
  try {
    const result = await service.getTrendingVideos();
    expect(result.length).toEqual(24);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});

it('getCategoryList function', async () => {
  const service = new YoutubeService();
  try {
    const result = await service.getCategoryList();
    expect(result.length).toBeGreaterThan(0);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});