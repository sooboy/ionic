import { Slides } from '../../../..';
export declare class E2EPage {
    slides: any[];
    loopSlider: Slides;
    startingIndex: number;
    myTopSlideOptions: any;
    constructor();
    onSlideChanged(slider: Slides): void;
    ngAfterViewInit(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}
