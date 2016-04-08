import {MainComponent} from './endpoints/main/main';

export const router = {
    config: [
        {path: '/', component: MainComponent, name: 'Main', useAsDefault: true},
    ]
};
