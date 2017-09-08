"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const __1 = require("../../../../../..");
let Tab2Page1 = class Tab2Page1 {
    constructor() {
        this.tab2Page2 = 'tab2-page2';
    }
    ionViewWillEnter() {
        console.log('Tab2Page1, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab2Page1, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab2Page1, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab2Page1, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab2Page1, ionViewWillUnload');
    }
};
Tab2Page1 = __decorate([
    __1.IonicPage({
        name: 'tab2-page1'
    }),
    core_1.Component({
        templateUrl: './tab2-page1.html'
    })
], Tab2Page1);
exports.Tab2Page1 = Tab2Page1;
//# sourceMappingURL=tab2-page1.js.map