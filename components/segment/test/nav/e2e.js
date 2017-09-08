"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('existing should be selected', function () {
    protractor_1.element(protractor_1.by.css('.e2eSegmentExistingSegment')).click();
});
it('test should be selected', function () {
    protractor_1.element(protractor_1.by.css('.e2eSegmentTestButton')).click();
});
//# sourceMappingURL=e2e.js.map