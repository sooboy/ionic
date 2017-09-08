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
let PageOne = class PageOne {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.disableAll();
        this.menuCtrl.enable(false);
    }
    push() {
        this.navCtrl.push('PageTwo');
    }
    menuDefault() {
        this.disableAll();
        this.menuCtrl.enable(true, 'menu_default');
    }
    menuStart() {
        this.disableAll();
        this.menuCtrl.enable(true, 'menu_start');
    }
    menuEnd() {
        this.disableAll();
        this.menuCtrl.enable(true, 'menu_end');
    }
    menuLeft() {
        this.disableAll();
        this.menuCtrl.enable(true, 'menu_left');
    }
    menuRight() {
        this.disableAll();
        this.menuCtrl.enable(true, 'menu_right');
    }
    disableAll() {
        this.menuCtrl.enable(false);
    }
};
PageOne = __decorate([
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.MenuController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map