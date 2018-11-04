import { appConfig, isBrowser, storage } from './config';
import expect from 'expect';

it('properly check running env with isBrowser function', async () => {
    let env = isBrowser();
    expect(env).toBeFalsy();
});


it('Storage constant is defined properly', async () => {
    expect(storage).toBeInstanceOf(Object);
});


it('Has needed methods', async () => {
    expect(appConfig.getYoutubeEndPoint).toBeInstanceOf(Function);
    expect(appConfig.getYoutubeEmbdedUrl).toBeInstanceOf(Function);
});

it('It methods return defined value', async () => {
    expect(appConfig.getYoutubeEndPoint()).toBeDefined();
    expect(appConfig.getYoutubeEmbdedUrl()).toBeDefined();
});

it('Has needed properties', async () => {
    expect(appConfig.youtubeApiKey).toBeDefined();
    expect(appConfig.videoPartsToLoad).toBeDefined();
    expect(appConfig.maxVideosToLoad).toBeDefined();
    expect(appConfig.defaultRegion).toBeDefined();
    expect(appConfig.defaultCategoryId).toBeDefined();
    expect(appConfig.countryList.length).toBeGreaterThan(0);
});
