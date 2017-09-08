import { App, NavController, Tabs } from '../../../../../..';
export declare class Tab1 {
    private tabs;
    private app;
    private nav;
    items: any[];
    constructor(tabs: Tabs, app: App, nav: NavController);
    goBack(): void;
    goTo(): void;
    selectPrevious(): void;
    appNavPop(): void;
}
