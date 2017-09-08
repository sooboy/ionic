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
let TabTwo = class TabTwo {
    constructor(tabs, app) {
        this.tabs = tabs;
        this.app = app;
        this.sessions = [];
        for (var i = 1; i <= 250; i++) {
            this.sessions.push({
                name: 'Name ' + i,
                location: 'Location: ' + i
            });
        }
    }
    selectPrevious() {
        this.tabs.select(this.tabs.previousTab());
    }
    appNavPop() {
        this.app.navPop();
    }
};
TabTwo = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'tab-two.html'
    }),
    __metadata("design:paramtypes", [__1.Tabs, __1.App])
], TabTwo);
exports.TabTwo = TabTwo;
//# sourceMappingURL=tab-two.js.map