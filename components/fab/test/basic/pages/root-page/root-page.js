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
        this.array = [];
        this.log = '';
    }
    add() {
        this.array.push(1);
        this.log += 'add\n';
    }
    clickMainFAB() {
        let message = 'Clicked open social menu';
        console.log(message);
        this.log += message + '\n';
    }
    openSocial(network, fab) {
        let message = 'Share in ' + network;
        console.log(message);
        this.log += message + '\n';
        fab.close();
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map