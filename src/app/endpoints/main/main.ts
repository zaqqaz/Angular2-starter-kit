import {Component} from 'angular2/core';
import {TypingCarouselDirective} from 'ng2-typing-carousel';
import {Api} from 'angular2-rest-api';

@Component({
    selector: 'main',
    template: require('./main.html'),
    styles: [require('./main.scss')],
    directives: [TypingCarouselDirective]
})

export class MainComponent {
    public carousel:Array<string>;

    constructor(public api:Api) {
        this.carousel = ['Typescript', 'Babel', 'Webpack', 'Gulp'];
        this.api['feature'].query().subscribe(
            ([features, headers]) => {
                console.log(features, headers)
            }
        );
    }
}