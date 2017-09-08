"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should go from 1 to 2', function () {
    protractor_1.element(protractor_1.by.css('.e2eFrom1To2')).click();
});
it('should go from 2 to 3', function () {
    protractor_1.element(protractor_1.by.css('.e2eFrom2To3')).click();
});
it('should go from 3 to 2', function () {
    protractor_1.element(protractor_1.by.css('.e2eFrom3To2')).click();
});
it('should go from 2 to 1', function () {
    protractor_1.element(protractor_1.by.css('.e2eFrom2To1')).click();
});
//# sourceMappingURL=e2e.js.map