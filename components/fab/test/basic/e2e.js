"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should open fab lists ', function () {
    protractor_1.element(protractor_1.by.css('.e2eFabTopRight')).click();
    protractor_1.element(protractor_1.by.css('.e2eFabBottomRight')).click();
    protractor_1.element(protractor_1.by.css('.e2eFabTopLeft')).click();
    protractor_1.element(protractor_1.by.css('.e2eFabBottomLeft')).click();
    protractor_1.element(protractor_1.by.css('.e2eFabCenter')).click();
});
//# sourceMappingURL=e2e.js.map