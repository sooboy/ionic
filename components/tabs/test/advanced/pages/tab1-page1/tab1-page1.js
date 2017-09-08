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
let Tab1Page1 = class Tab1Page1 {
    constructor(navCtrl, app, tabs, params) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.tabs = tabs;
        this.params = params;
        this.tab1Page2 = 'tab1-page2';
        this.userId = params.get('userId');
    }
    goBack() {
        console.log('go back begin');
        this.navCtrl.pop().then((val) => {
            console.log('go back completed', val);
        });
    }
    favoritesTab() {
        this.tabs.select(1);
    }
    logout() {
        // this.app.getRootNavById().setRoot('sign-in', null, { animate: true, direction: 'back' });
    }
    ionViewWillEnter() {
        console.log('Tab1Page1, ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('Tab1Page1, ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('Tab1Page1, ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('Tab1Page1, ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('Tab1Page1, ionViewWillUnload');
    }
};
Tab1Page1 = __decorate([
    __1.IonicPage({
        name: 'tab1-page1'
    }),
    core_1.Component({
        templateUrl: './tab1-page1.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.App, __1.Tabs, __1.NavParams])
], Tab1Page1);
exports.Tab1Page1 = Tab1Page1;
//# sourceMappingURL=tab1-page1.js.map