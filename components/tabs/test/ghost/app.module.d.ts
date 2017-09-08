import { QueryList } from '@angular/core';
import { Tab } from '../../../..';
export declare class Tab1 {
}
export declare class Tab2 {
}
export declare class Tab3 {
}
export declare class QuesaritoPage {
}
export declare class TabsPage {
    root1: typeof Tab1;
    root2: typeof Tab2;
    root3: typeof Tab3;
    tab: QueryList<Tab>;
    ngAfterViewInit(): void;
    openPage(which: string): void;
}
export declare class AppModule {
}
