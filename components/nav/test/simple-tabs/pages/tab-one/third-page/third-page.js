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
const __1 = require("../../../../../../..");
let ThirdPage = class ThirdPage {
    constructor(nav, params) {
        this.nav = nav;
        this.params = params;
    }
    ionViewWillEnter() {
        this.paramOne = this.params.data.paramOne;
        this.paramTwo = this.params.data.paramTwo;
    }
};
ThirdPage = __decorate([
    __1.IonicPage({
        segment: 'pageThree/paramOne/:paramOne/paramTwo/:paramTwo'
    }),
    core_1.Component({
        templateUrl: 'third-page.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.NavParams])
], ThirdPage);
exports.ThirdPage = ThirdPage;
//# sourceMappingURL=third-page.js.map