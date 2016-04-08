import {Component} from 'angular2/core';
import { TypingCarouselDirective } from 'ng2-typing-carousel';
import template = require('./main.html');

@Component({
    selector: 'main',
    template: template,
    directives: [TypingCarouselDirective]
})
export class MainComponent {
    public carousel: Array<string>;

    constructor() {
        this.carousel = ['Typescript', 'Babel', 'Webpack', 'Gulp'];
    }
}