import { MenuController } from '../../../..';
export declare class Page1 {
    menu: MenuController;
    leftMenuSwipeEnabled: boolean;
    rightMenuSwipeEnabled: boolean;
    constructor(menu: MenuController);
    toggleLeftMenuSwipeable(): void;
    toggleRightMenuSwipeable(): void;
}
export declare class AppComponent {
    root: typeof Page1;
}
export declare class AppModule {
}
