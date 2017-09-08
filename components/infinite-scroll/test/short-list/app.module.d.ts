import { InfiniteScroll } from '../../../..';
export declare class E2EPage {
    items: number[];
    constructor();
    doInfinite(infiniteScroll: InfiniteScroll): void;
}
export declare class AppComponent {
    rootPage: typeof E2EPage;
}
export declare class AppModule {
}
