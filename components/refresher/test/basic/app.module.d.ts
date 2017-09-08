import { Refresher } from '../../../..';
export declare class Page1 {
    items: string[];
    constructor();
    doRefresh(refresher: Refresher): void;
    doStart(): void;
    doPulling(refresher: Refresher): void;
}
export declare class AppComponent {
    rootPage: typeof Page1;
}
export declare class AppModule {
}
