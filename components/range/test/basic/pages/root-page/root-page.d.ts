import { FormControl, FormGroup } from '@angular/forms';
import { Range } from '../../../../../..';
export declare class RootPage {
    singleValue: number;
    singleValue2: number;
    singleValue3: number;
    singleValue4: number;
    singleValue5: number;
    dualValue: any;
    dualValue2: {
        lower: number;
        upper: number;
    };
    min: number;
    max: number;
    rangeCtrl: FormControl;
    dualRangeCtrl: FormControl;
    rangeForm: FormGroup;
    rangeChange(range: Range): void;
}
