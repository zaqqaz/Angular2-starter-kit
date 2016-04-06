import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide, Component} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import { TypingCarouselDirective } from 'ng2-typing-carousel';
import template from './app.html';

import {apiConfiguration} from './api/api.configuration';

@Component({
    selector: 'body',
    template: template,
    directives: [TypingCarouselDirective]
})
//@RouteConfig(router.config)
export class AppComponent {
    constructor() {
        this.carousel = ['Typescript', 'Babel', 'Webpack', 'Gulp'];
    }
}

enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);