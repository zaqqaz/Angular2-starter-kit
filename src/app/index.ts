import 'reflect-metadata';
import 'zone.js/dist/zone-node.js';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide, Component} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TypingCarouselDirective} from 'ng2-typing-carousel';
import {router} from './router';
import template = require('./app.html');
//import {apiConfiguration} from './api/api.configuration';

enableProdMode();

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})
@RouteConfig(router.config)
class AppComponent {
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);