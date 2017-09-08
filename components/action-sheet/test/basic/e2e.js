"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should open action sheet', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenActionSheet')).click();
});
it('should close with backdrop click', function () {
    protractor_1.element(protractor_1.by.css('ion-backdrop')).click();
});
//# sourceMappingURL=e2e.js.map