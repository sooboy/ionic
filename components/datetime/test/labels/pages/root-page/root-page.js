"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RootPage = class RootPage {
    constructor() {
        this.stacked1 = '1994-12-15T13:47:20.789';
        this.stacked2 = '1994-12-15T13:47:20.789';
        this.floating1 = '1995-04-15';
        this.floating2 = '1995-04-15';
        this.floating3 = '';
        this.fixed1 = '2002-09-23T15:03:46.789';
        this.fixed2 = '2002-09-23T15:03:46.789';
        this.inline1 = '2005-06-17T11:06Z';
        this.inline2 = '2005-06-17T11:06Z';
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map