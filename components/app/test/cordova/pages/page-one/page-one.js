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
const __1 = require("../../../../../..");
const provider_one_1 = require("./provider-one");
const provider_two_1 = require("./provider-two");
let PageOne = class PageOne {
    constructor(navCtrl, someData, otherData) {
        this.navCtrl = navCtrl;
        this.someData = someData;
        this.otherData = otherData;
        this.page2 = 'page-two';
        this.sort = 'all';
        console.log('Got some data from', someData.getData());
        console.log('Got some data from', otherData.getData());
    }
    goToTabs() {
        this.navCtrl.push('tabs-page');
    }
};
PageOne = __decorate([
    __1.IonicPage({
        name: 'page-one'
    }),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, provider_one_1.SomeData, provider_two_1.OtherData])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map