import { App, Tabs } from '../../../../../..';
export declare class TabOne {
    private tabs;
    private app;
    items: any[];
    constructor(tabs: Tabs, app: App);
    selectPrevious(): void;
    appNavPop(): void;
}
