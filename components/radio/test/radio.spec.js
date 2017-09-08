"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const radio_group_1 = require("../radio-group");
const radio_button_1 = require("../radio-button");
const form_1 = require("../../../util/form");
const mock_providers_1 = require("../../../util/mock-providers");
describe('RadioGroup', () => {
    describe('_update', () => {
        it('should set checked via string values', () => {
            let rb1 = createRadioButton();
            rb1.value = 'string1';
            let rb2 = createRadioButton();
            rb2.value = 'string2';
            let rb3 = createRadioButton();
            rb3.value = 'string3';
            rg.value = 'string1';
            rg._update();
            expect(rb1.checked).toEqual(true);
            expect(rb2.checked).toEqual(false);
            expect(rb3.checked).toEqual(false);
        });
        it('should set checked via string group value, and number button values', () => {
            let rb1 = createRadioButton();
            rb1.value = 1;
            let rb2 = createRadioButton();
            rb2.value = 2;
            let rb3 = createRadioButton();
            rb3.value = 3;
            rg.value = '1';
            rg._update();
            expect(rb1.checked).toEqual(true);
            expect(rb2.checked).toEqual(false);
            expect(rb3.checked).toEqual(false);
        });
        it('should set checked via number group value, and string button values', () => {
            let rb1 = createRadioButton();
            rb1.value = '1';
            let rb2 = createRadioButton();
            rb2.value = '2';
            let rb3 = createRadioButton();
            rb3.value = '3';
            rg.value = 1;
            rg._update();
            expect(rb1.checked).toEqual(true);
            expect(rb2.checked).toEqual(false);
            expect(rb3.checked).toEqual(false);
        });
        it('should set checked via empty string group value, and one empty string button value', () => {
            let rb1 = createRadioButton();
            rb1.value = '';
            let rb2 = createRadioButton();
            rb2.value = 'value2';
            let rb3 = createRadioButton();
            rb3.value = 'value3';
            rg.value = '';
            rg._update();
            expect(rb1.checked).toEqual(true);
            expect(rb2.checked).toEqual(false);
            expect(rb3.checked).toEqual(false);
        });
        it('should only check at most one value', () => {
            let rb1 = createRadioButton();
            rb1.value = 'string1';
            let rb2 = createRadioButton();
            rb2.value = 'string1';
            let rb3 = createRadioButton();
            rb3.value = 'string1';
            rg.value = 'string1';
            rg._update();
            expect(rb1.checked).toEqual(true);
            expect(rb2.checked).toEqual(false);
            expect(rb3.checked).toEqual(false);
        });
    });
    beforeEach(() => {
        rg = new radio_group_1.RadioGroup(mock_providers_1.mockRenderer(), mock_providers_1.mockElementRef(), mock_providers_1.mockChangeDetectorRef());
        form = new form_1.Form();
    });
});
describe('RadioButton', () => {
    describe('ngOnDestroy', () => {
        it('should work without a group', () => {
            let rb1 = createRadioButton(false);
            expect(() => rb1.ngOnDestroy()).not.toThrowError();
        });
        it('should remove button from group if part of a radio group', () => {
            let rb1 = createRadioButton();
            spyOn(rg, 'remove');
            rb1.ngOnDestroy();
            expect(rg.remove).toHaveBeenCalledWith(rb1);
        });
    });
    beforeEach(() => {
        rg = new radio_group_1.RadioGroup(mock_providers_1.mockRenderer(), mock_providers_1.mockElementRef(), mock_providers_1.mockChangeDetectorRef());
        form = new form_1.Form();
    });
});
let rg;
let form;
function createRadioButton(shouldIncludeGroup = true) {
    return new radio_button_1.RadioButton(form, mock_providers_1.mockConfig(), mock_providers_1.mockElementRef(), mock_providers_1.mockRenderer(), null, shouldIncludeGroup ? rg : null);
}
//# sourceMappingURL=radio.spec.js.map