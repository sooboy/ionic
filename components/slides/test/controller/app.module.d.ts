import { Slides } from '../../../..';
export declare class MyPage {
    slider: Slides;
    onSlideChanged(): void;
    onSlideMove(ev: any): void;
    goToPrevSlide(): void;
    goToNextSlide(): void;
    goToSlide(index: number): void;
    getIndex(): void;
    getLength(): void;
}
export declare class AppComponent {
    root: any;
}
export declare class AppModule {
}
