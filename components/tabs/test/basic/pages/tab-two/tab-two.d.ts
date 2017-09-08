import { App, Tabs } from '../../../../../..';
export declare class TabTwo {
    private tabs;
    private app;
    sessions: any[];
    constructor(tabs: Tabs, app: App);
    selectPrevious(): void;
    appNavPop(): void;
}
