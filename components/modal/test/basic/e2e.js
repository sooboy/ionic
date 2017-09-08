"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should open modal', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenModal')).click();
});
it('should close alert with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button')).click();
});
it('should close with close button click', function () {
    protractor_1.element(protractor_1.by.css('.e2eCloseMenu')).click();
});
it('should open toolbar modal', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenToolbarModal')).click();
});
it('should close alert with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button')).click();
});
it('should close toolbar modal', function () {
    protractor_1.element(protractor_1.by.css('.e2eCloseToolbarModal')).click();
});
//# sourceMappingURL=e2e.js.map