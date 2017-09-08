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
let Tab1Page2 = class Tab1Page2 {
    constructor(tabs) {
        this.tabs = tabs;
        this.tab1Page3 = 'tab1-page3';
    }
    favoritesTab() {
        // TODO fix this with tabsHideOnSubPages=true
        this.tabs.select(1);
    }
    ionViewWillEnter() {
        console.log('Tab1Page2, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab1Page2, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab1Page2, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab1Page2, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab1Page2, ionViewWillUnload');
    }
};
Tab1Page2 = __decorate([
    __1.IonicPage({
        name: 'tab1-page2'
    }),
    core_1.Component({
        templateUrl: './tab1-page2.html'
    }),
    __metadata("design:paramtypes", [__1.Tabs])
], Tab1Page2);
exports.Tab1Page2 = Tab1Page2;
//# sourceMappingURL=tab1-page2.js.map