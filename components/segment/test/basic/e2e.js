"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('friends and standard should be selected', function () {
    protractor_1.element(protractor_1.by.css('.e2eSegmentFriends')).click();
    protractor_1.element(protractor_1.by.css('.e2eSegmentStandard')).click();
});
it('model c and top grossing should be selected', function () {
    protractor_1.element(protractor_1.by.css('.e2eSegmentModelC')).click();
    protractor_1.element(protractor_1.by.css('.e2eSegmentTopGrossing')).click();
});
//# sourceMappingURL=e2e.js.map