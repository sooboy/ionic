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
let Tab2Page2 = class Tab2Page2 {
    constructor() {
        this.tab2Page3 = 'tab2-page3';
    }
    ionViewWillEnter() {
        console.log('Tab2Page2, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab2Page2, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab2Page2, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab2Page2, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab2Page2, ionViewWillUnload');
    }
};
Tab2Page2 = __decorate([
    __1.IonicPage({
        name: 'tab2-page2'
    }),
    core_1.Component({
        templateUrl: './tab2-page2.html'
    })
], Tab2Page2);
exports.Tab2Page2 = Tab2Page2;
//# sourceMappingURL=tab2-page2.js.map