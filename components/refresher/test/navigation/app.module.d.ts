import { NavController, Refresher } from '../../../..';
export declare class Page1 {
    nav: NavController;
    items: string[];
    constructor(nav: NavController);
    doRefresh(refresher: Refresher): void;
    doStart(): void;
    doPulling(refresher: Refresher): void;
    navigate(): void;
}
export declare class Page2 {
    constructor();
}
export declare class AppComponent {
    rootPage: typeof Page1;
}
export declare class AppModule {
}
