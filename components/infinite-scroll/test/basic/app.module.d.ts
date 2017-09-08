import { InfiniteScroll, NavController } from '../../../..';
export declare class MyContent {
    navCtrl: NavController;
    infiniteScroll: InfiniteScroll;
    items: number[];
    enabled: boolean;
    constructor(navCtrl: NavController);
    doInfinite(): Promise<any>;
    goToPage2(): void;
    toggleInfiniteScroll(): void;
}
export declare class E2EPage1 {
}
export declare class E2EPage2 {
    navCtrl: NavController;
    constructor(navCtrl: NavController);
}
export declare class AppComponent {
    root: typeof E2EPage1;
}
export declare class AppModule {
}
