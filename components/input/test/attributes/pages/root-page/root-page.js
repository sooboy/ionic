"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const _1 = require("../../../../../../");
let RootPage = class RootPage {
    ionViewDidEnter() {
        this.input1Valid = this.checkInput1();
    }
    checkInput1() {
        const nativeEle = this.input1._native.nativeElement;
        return testAttributes(nativeEle, {
            id: null,
            type: 'number',
            placeholder: 'Placeholder',
            name: 'holaa',
            min: '0',
            max: '10000',
            step: '2',
            autocomplete: 'on',
            autocorrect: 'on',
            autocapitalize: 'on',
            spellcheck: 'true',
            maxLength: '4',
            'aria-labelledby': 'lbl-0',
            readOnly: true,
            disabled: true
        });
    }
};
__decorate([
    core_1.ViewChild('input1'),
    __metadata("design:type", _1.TextInput)
], RootPage.prototype, "input1", void 0);
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
function testAttributes(ele, attributes) {
    for (let attr in attributes) {
        const expected = attributes[attr];
        const value = ele[attr];
        if (expected === null) {
            if (ele.hasAttribute(attr) || value !== '') {
                console.error(`Element should NOT have "${attr}"`);
                return false;
            }
        }
        else {
            if (expected !== value && expected !== ele.getAttribute(attr)) {
                console.error(`Value "${attr}" does not match: ${expected} != ${value}`);
                return false;
            }
        }
    }
    return true;
}
//# sourceMappingURL=root-page.js.map