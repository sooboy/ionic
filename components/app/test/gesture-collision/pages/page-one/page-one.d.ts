import { MenuController, Nav } from '../../../../../..';
export declare class PageOne {
    private menu;
    rootPage: any;
    changeDetectionCount: number;
    pages: Array<{
        title: string;
        component: any;
    }>;
    nav: Nav;
    constructor(menu: MenuController);
    openPage(page: any): void;
}
