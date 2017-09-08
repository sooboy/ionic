"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should check the first checkbox, toggle, and radio', function () {
    protractor_1.element(protractor_1.by.css('.item-0 .checkbox')).click();
    protractor_1.element(protractor_1.by.css('.item-2 .toggle')).click();
    protractor_1.element(protractor_1.by.css('.item-4 .radio')).click();
});
//# sourceMappingURL=e2e.js.map