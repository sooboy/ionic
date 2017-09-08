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
const tab_one_1 = require("../tab-one/tab-one");
let TabsPage = class TabsPage {
    constructor(config) {
        this.root1 = tab_one_1.TabOne;
        this.root2 = 'TabTwo';
        this.root3 = 'TabThree';
        this.myColor = (config.get('mode') !== 'ios') ? 'primary' : null;
    }
    onChange(ev) {
        console.log('Changed tab', ev);
    }
    onSelect(ev) {
        console.log('Selected tab', ev);
    }
};
TabsPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'tabs-page.html'
    }),
    __metadata("design:paramtypes", [__1.Config])
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs-page.js.map