import { FormGroup } from '@angular/forms';
export declare class PageOne {
    toppings: Array<string>;
    carFeatures: Array<string>;
    pets: Array<string>;
    petOptions: Array<{
        text: string;
        value: string;
    }>;
    authForm: FormGroup;
    status: string;
    constructor();
    carChange(selectedValues: any): void;
    onSubmit(data: any): void;
    toppingsSelect(selectedValue: any): void;
}
