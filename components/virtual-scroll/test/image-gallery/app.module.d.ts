export declare class E2EPage {
    lastMonth: number;
    items: any[];
    constructor();
    headerFn(record: any): {
        date: string;
    };
    footerFn(_record: any, recordIndex: number, records: any[]): boolean;
    ngDoCheck(): void;
    reload(): void;
}
export declare class AppComponent {
    root: typeof E2EPage;
}
export declare class AppModule {
}
