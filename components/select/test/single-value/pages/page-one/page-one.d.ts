import { FormControl, FormGroup } from '@angular/forms';
export interface Currency {
    symbol: string;
    code: string;
    name: string;
}
export declare class PageOne {
    notifications: any;
    musicSelectOpts: any;
    notificationSelectOpts: any;
    gender: string;
    gaming: string;
    os: string;
    years: Array<number>;
    music: string;
    month: string;
    year: string;
    notification: string;
    status: string;
    currencies: Currency[];
    currency: Currency;
    fruitCtrl: FormControl;
    fruitsForm: FormGroup;
    constructor();
    gamingCancel(): void;
    gamingChange(selectedValue: any): void;
    musicSelect(selectedValue: any): void;
    notificationSelect(selectedValue: any): void;
    statusChange(ev: any): void;
    resetGender(): void;
    selectedText(): string;
}
