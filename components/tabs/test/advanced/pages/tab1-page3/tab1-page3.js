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
let Tab1Page3 = class Tab1Page3 {
    constructor() { }
    ionViewWillEnter() {
        console.log('Tab1Page3, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab1Page3, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab1Page3, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab1Page3, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab1Page3, ionViewWillUnload');
    }
};
Tab1Page3 = __decorate([
    __1.IonicPage({
        name: 'tab1-page3'
    }),
    core_1.Component({
        templateUrl: './tab1-page3.html'
    }),
    __metadata("design:paramtypes", [])
], Tab1Page3);
exports.Tab1Page3 = Tab1Page3;
//# sourceMappingURL=tab1-page3.js.map