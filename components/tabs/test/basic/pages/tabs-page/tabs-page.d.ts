import { Config, Tab } from '../../../../../..';
import { TabOne } from '../tab-one/tab-one';
export declare class TabsPage {
    root1: typeof TabOne;
    root2: string;
    root3: string;
    myColor: string;
    constructor(config: Config);
    onChange(ev: Tab): void;
    onSelect(ev: Tab): void;
}
