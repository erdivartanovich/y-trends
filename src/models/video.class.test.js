import { VideoClass } from './video.class';

import expect from 'expect';

let data = {
    id: '',
    snippet: {
        title: '',
        thumbnails: {
            high: {
                url: ''
            }
        },
        publishedAt: ''
    },
    statistics: {
        viewCount: '',
        likeCount: ''
    }
}

it('instantiated without crashing if constructor parameters supplied', () => {
    new VideoClass(data);
});

it('instantiated without crashing if constructor parameters is null', () => {
    new VideoClass();
});

it('instantiated with proper property handling based on constructor parameter', () => {
    let video = new VideoClass(data);
    expect(video.viewCount).toEqual(0); 
    expect(video.likeCount).toEqual(0); 
});