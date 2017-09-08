import { NavController } from '../../../..';
export declare class Page1 {
    private nav;
    tmr: number;
    constructor(nav: NavController);
    play(): void;
    ionViewDidEnter(): void;
    stop(): void;
}
export declare class Page2 {
    navCtrl: NavController;
    tmr: number;
    constructor(navCtrl: NavController);
    play(): void;
    ionViewDidEnter(): void;
    stop(): void;
}
export declare class AppComponent {
    root: typeof Page1;
}
export declare class AppModule {
}
