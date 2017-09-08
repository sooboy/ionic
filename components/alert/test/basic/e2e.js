"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
it('should open basic alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenAlert')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open alert long message', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenAlertLongMessage')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open alert multiple buttons', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenMultipleButtons')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open alert no message', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenAlertNoMessage')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open confirm alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenConfirm')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open prompt alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenPrompt')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open radio alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenRadio')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open checkbox alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eOpenCheckbox')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open and close fast close alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eFastClose')).click();
});
it('should open disabled backdrop alert', function () {
    protractor_1.element(protractor_1.by.css('.e2eDisabledBackdrop')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
it('should open alert with mode', function () {
    protractor_1.element(protractor_1.by.css('.e2eAlertMode')).click();
});
it('should close with button click', function () {
    protractor_1.element(protractor_1.by.css('.alert-button:last-child')).click();
});
//# sourceMappingURL=e2e.js.map