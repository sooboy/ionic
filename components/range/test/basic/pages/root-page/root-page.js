"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let RootPage = class RootPage {
    constructor() {
        this.singleValue2 = 150;
        this.singleValue3 = 64;
        this.singleValue4 = 1300;
        this.singleValue5 = 0;
        this.dualValue2 = { lower: 33, upper: 60 };
        this.min = -50;
        this.max = 50;
        this.rangeCtrl = new forms_1.FormControl({ value: '66', disabled: true });
        this.dualRangeCtrl = new forms_1.FormControl({ value: { lower: 33, upper: 60 }, disabled: true });
        this.rangeForm = new forms_1.FormGroup({
            'range': this.rangeCtrl,
            'dualRange': this.dualRangeCtrl
        });
    }
    rangeChange(range) {
        console.log(`range, change, ratio: ${range.ratio}, value: ${range.value}`);
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map