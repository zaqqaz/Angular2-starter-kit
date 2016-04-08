import {Component} from 'angular2/core';
import { TypingCarouselDirective } from 'ng2-typing-carousel';

@Component({
    selector: 'main',
    template: require('./main.html'),
    directives: [TypingCarouselDirective]
})
export class MainComponent {
    public carousel:Array<string>;

    constructor() {
        this.carousel = ['Typescript', 'Babel', 'Webpack', 'Gulp'];
    }
}