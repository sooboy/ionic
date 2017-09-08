import { App, Tabs } from '../../../../../..';
export declare class Tab2 {
    private tabs;
    private app;
    sessions: any[];
    constructor(tabs: Tabs, app: App);
    selectPrevious(): void;
    appNavPop(): void;
}
