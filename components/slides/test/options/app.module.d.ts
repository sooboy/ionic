import { Slides } from '../../../..';
export declare class E2EPage {
    slider: Slides;
    onSlideWillChange(s: Slides): void;
    onSlideDidChange(s: Slides): void;
    onSlideDrag(s: Slides): void;
    ngAfterViewInit(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}
