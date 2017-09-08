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
let Tab3Page1 = class Tab3Page1 {
    ionViewWillEnter() {
        console.log('Tab3Page1, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab3Page1, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab3Page1, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab3Page1, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab3Page1, ionViewWillUnload');
    }
};
Tab3Page1 = __decorate([
    __1.IonicPage({
        name: 'tab3-page1'
    }),
    core_1.Component({
        templateUrl: './tab3-page1.html'
    })
], Tab3Page1);
exports.Tab3Page1 = Tab3Page1;
//# sourceMappingURL=tab3-page1.js.map