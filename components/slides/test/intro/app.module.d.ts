import { NavController, Slides } from '../../../..';
export declare class IntroPage {
    navCtrl: NavController;
    slider: Slides;
    continueText: string;
    mySlideOptions: any;
    showSlide: boolean;
    constructor(navCtrl: NavController);
    ngOnInit(): void;
    onSlideChanged(slider: any): void;
    onSlideChangeStart(slider: any): void;
    onSlideMove(slider: any): void;
    toggleLastSlide(): void;
    skip(): void;
}
export declare class MainPage {
}
export declare class AppComponent {
    root: typeof IntroPage;
}
export declare class AppModule {
}
