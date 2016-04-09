import Feature from './models/feature';

export const apiConfiguration = {
    baseUrl: '',
    endpoints: {
        feature: {
            route: 'mocks/features.json',
            model: Feature,
            actions: {
                query: {
                    method: 'GET',
                    isArray: true,
                    headersForReading: ['Content-Type']
                }
            }
        }
    }
};