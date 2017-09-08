"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should open basic datetime picker', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenMMDDYYYY')).click();
});
it('should close with Done button click', function () {
    protractor_1.element(protractor_1.by.css('.picker-toolbar-button:last-child .button')).click();
});
//# sourceMappingURL=e2e.js.map