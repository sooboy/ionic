import { FormControl, FormGroup } from '@angular/forms';
import { RadioButton, RadioGroup } from '../../../../../..';
export declare class PageOne {
    currencies: Array<string>;
    items: Array<{
        description: string;
        value: any;
    }>;
    relationship: string;
    selectedTime: number;
    someValue: string;
    fruitsCtrl: FormControl;
    fruitsForm: FormGroup;
    friendsCtrl: FormControl;
    friendsForm: FormGroup;
    currenciesControl: FormControl;
    currencyForm: FormGroup;
    constructor();
    setApple(): void;
    setBanana(): void;
    setCherry(): void;
    doSubmit(ev: UIEvent): void;
    petChange(radioGroup: RadioGroup): void;
    dogSelect(radioButton: RadioButton): void;
    catSelect(radioButton: RadioButton): void;
    turtleSelect(radioButton: RadioButton): void;
}
