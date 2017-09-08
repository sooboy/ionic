import { MenuController, Nav } from '../../../../../..';
export declare class PageOne {
    menuCtrl: MenuController;
    rootPage: any;
    changeDetectionCount: number;
    pages: Array<{
        title: string;
        component: any;
    }>;
    nav: Nav;
    constructor(menuCtrl: MenuController);
    openPage(page: any): void;
    openRightMenu(): void;
    openLeftMenu(): void;
    onDrag(ev: any): void;
    onOpen(ev: any): void;
    onClose(ev: any): void;
    isChangeDetecting(): boolean;
}
