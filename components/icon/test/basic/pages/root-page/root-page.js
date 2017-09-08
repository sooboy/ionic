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
let RootPage = class RootPage {
    constructor() {
        this.homeIcon = 'home';
        this.isActive = false;
        this.iconIndex = 0;
        this.icons = [
            'home',
            'star',
            'ios-alert',
            'ios-alert-outline',
            'md-alert',
            'logo-apple'
        ];
        this.dynamicColor = 'danger';
        this.btnIcon = this.icons[0];
    }
    updateIcon() {
        this.iconIndex++;
        if (this.iconIndex >= this.icons.length) {
            this.iconIndex = 0;
        }
        this.btnIcon = this.icons[this.iconIndex];
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [])
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map