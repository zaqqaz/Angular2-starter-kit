import 'reflect-metadata';
import 'zone.js/dist/zone-node.js';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, provide, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Api, ApiConfig} from 'angular2-rest-api';
import {router} from './router';
import {apiConfiguration} from './api/api.configuration';

enableProdMode();

@Component({
    selector: 'body',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>',
})
@RouteConfig(router.config)
@ApiConfig(apiConfiguration)
class AppComponent {
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Api,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);