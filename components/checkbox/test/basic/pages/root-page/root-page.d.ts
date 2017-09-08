import { FormControl, FormGroup } from '@angular/forms';
import { Checkbox } from '../../../../../../';
export declare class RootPage {
    grapeDisabled: boolean;
    grapeChecked: boolean;
    kiwiValue: boolean;
    strawberryValue: boolean;
    standAloneChecked: boolean;
    formResults: string;
    dangerColor: string;
    appleCtrl: FormControl;
    bananaCtrl: FormControl;
    cherryCtrl: FormControl;
    grapeCtrl: FormControl;
    fruitsForm: FormGroup;
    checked: boolean;
    disabled: boolean;
    constructor();
    toggleGrapeChecked(): void;
    toggleGrapeDisabled(): void;
    kiwiChange(checkbox: Checkbox): void;
    strawberryChange(checkbox: Checkbox): void;
    doSubmit(ev: UIEvent): void;
}
