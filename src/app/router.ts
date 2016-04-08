import {MainComponent} from './endpoints/main/main';

export const router = {
    config: [
        {path: '/', name: 'Main', component: MainComponent, useAsDefault: true}
    ]
};
