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
let PopoverLongListPage = class PopoverLongListPage {
    constructor() {
        this.items = [];
    }
    ngOnInit() {
        for (let i = 1; i < 21; i++) {
            this.items.push(i);
        }
    }
};
PopoverLongListPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'popover-long-list-page.html'
    })
], PopoverLongListPage);
exports.PopoverLongListPage = PopoverLongListPage;
//# sourceMappingURL=popover-long-list-page.js.map