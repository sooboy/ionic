import { Content, InfiniteScroll, NavController } from '../../../../../..';
export declare class RootPage {
    navCtrl: NavController;
    infiniteScroll: InfiniteScroll;
    content: Content;
    items: number[];
    enabled: boolean;
    constructor(navCtrl: NavController);
    doInfinite(infiniteScroll: InfiniteScroll): void;
    goToPage2(): void;
    toggleInfiniteScroll(): void;
}
