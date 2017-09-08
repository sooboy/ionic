"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should check apple, enable/check grape, submit form', function () {
    protractor_1.element(protractor_1.by.css('[formControlName=apple]')).click();
    protractor_1.element(protractor_1.by.css('.e2eGrapeDisabled')).click();
    protractor_1.element(protractor_1.by.css('.e2eGrapeChecked')).click();
    protractor_1.element(protractor_1.by.css('.e2eSubmit')).click();
});
//# sourceMappingURL=e2e.js.map