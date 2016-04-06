import Post from './models/Post';

export const apiConfiguration = {
    baseUrl: '',
    endpoints: {

        posts: {
            route: 'test.json',
            model: Post,
            actions: {
                getAll: {
                    method: 'GET',
                    isArray: true,
                    headersForReading: ['Content-Type'],
                    params: {
                        state: "current",
                        test: 'test_ok',
                        aza: '@username'
                    }
                }
            }
        }

    }
};