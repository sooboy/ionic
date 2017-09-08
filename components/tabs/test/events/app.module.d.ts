import { Events } from '../../../..';
export declare class Tab1 {
    events: Events;
    datatest: string;
    called: number;
    constructor(events: Events);
    change(): void;
}
export declare class Tab2 {
}
export declare class TabsPage {
    events: Events;
    root1: typeof Tab1;
    root2: typeof Tab2;
    constructor(events: Events);
    takePhoto(): void;
}
export declare class AppComponent {
    root: typeof TabsPage;
}
export declare class AppModule {
}
