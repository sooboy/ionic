"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should toggle left menu', function () {
    protractor_1.element(protractor_1.by.css('.e2eContentToggleLeftMenu')).click();
});
it('should close left menu', function () {
    protractor_1.element(protractor_1.by.css('.e2eCloseLeftMenu')).click();
});
it('should toggle right menu', function () {
    protractor_1.element(protractor_1.by.css('.e2eContentToggleRightMenu')).click();
});
it('should close right menu', function () {
    protractor_1.element(protractor_1.by.css('.e2eCloseRightMenu')).click();
});
//# sourceMappingURL=e2e.js.map