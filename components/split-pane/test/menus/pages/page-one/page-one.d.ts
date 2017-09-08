import { MenuController, NavController } from '../../../../../..';
export declare class PageOne {
    navCtrl: NavController;
    menuCtrl: MenuController;
    constructor(navCtrl: NavController, menuCtrl: MenuController);
    push(): void;
    menuDefault(): void;
    menuStart(): void;
    menuEnd(): void;
    menuLeft(): void;
    menuRight(): void;
    disableAll(): void;
}
