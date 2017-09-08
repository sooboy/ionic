import { NavController, NavParams } from '../../../..';
import { DomSanitizer } from '@angular/platform-browser';
export declare class Base {
    _name: string;
    constructor(_name: string);
    ionViewWillLoad(): void;
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewDidLeave(): void;
    ionViewWillUnload(): void;
    ionViewCanLeave(): boolean | Promise<any>;
    ionViewCanEnter(): boolean | Promise<any>;
}
export declare class Page1 extends Base {
    constructor();
}
export declare class Page2 extends Base {
    private nav;
    counter: number;
    constructor(nav: NavController);
    ionViewWillEnter(): void;
}
export declare class Page3 extends Base {
    private nav;
    animated: boolean;
    constructor(nav: NavController, params: NavParams);
    ionViewDidEnter(): void;
}
export declare class Page4 extends Base {
    private nav;
    constructor(nav: NavController);
    doSomethingSync(): number;
    ngOnInit(): void;
}
export declare class Page5 extends Base {
    constructor();
    ionViewCanEnter(): Promise<{}>;
}
export declare class Page6 extends Base {
    private nav;
    continue: boolean;
    counter: number;
    counterLeave: number;
    constructor(nav: NavController, params: NavParams);
    ionViewCanLeave(): boolean;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
    ionViewWillUnload(): void;
    pop(): void;
    pushPage7(): void;
}
export declare class Page7 extends Base {
    private nav;
    constructor(nav: NavController);
    ionViewCanEnter(): boolean;
}
export declare class Page8 extends Base {
    constructor();
}
export declare class Results {
    private sanitizer;
    result: any;
    constructor(sanitizer: DomSanitizer);
    ionViewDidEnter(): void;
}
export declare class AppComponent {
    root: any;
    constructor();
}
export declare class AppModule {
}
