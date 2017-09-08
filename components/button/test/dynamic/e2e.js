"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should unify buttons', function () {
    protractor_1.element(protractor_1.by.css('.e2eButtonDynamicUnify')).click();
});
it('should toggle buttons', function () {
    protractor_1.element(protractor_1.by.css('.e2eButtonToggle')).click();
});
//# sourceMappingURL=e2e.js.map