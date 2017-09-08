export declare class Tab1 {
    items: any[];
    constructor();
}
export declare class Tab2 {
    sessions: any[];
    constructor();
}
export declare class Tab3 {
    constructor();
}
export declare class TabsPage {
    root1: typeof Tab1;
    root2: typeof Tab2;
    root3: typeof Tab3;
}
export declare class AppComponent {
    root: typeof TabsPage;
}
export declare class AppModule {
}
