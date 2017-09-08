"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should navigate to page 2', function () {
    protractor_1.element(protractor_1.by.css('.e2eCordovaPage2')).click();
});
it('should navigate to page 3', function () {
    protractor_1.element(protractor_1.by.css('.e2eCordovaPage3')).click();
});
it('should navigate back', function () {
    protractor_1.element(protractor_1.by.css('.e2eCordovaGoBack')).click();
});
it('should open modal', function () {
    protractor_1.element(protractor_1.by.css('.e2eCordovaOpenModal')).click();
});
it('should close modal', function () {
    protractor_1.element(protractor_1.by.css('.e2eCordovaCloseModal')).click();
});
//# sourceMappingURL=e2e.js.map