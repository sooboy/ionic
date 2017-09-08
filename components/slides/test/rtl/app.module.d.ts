import { Slides } from '../../../..';
export declare class E2EPage {
    slider: Slides;
    onSlideWillChange(s: Slides): void;
    onSlideDidChange(s: Slides): void;
    onSlideDrag(s: Slides): void;
}
export declare class E2EApp {
    root: typeof E2EPage;
}
export declare class AppModule {
}
