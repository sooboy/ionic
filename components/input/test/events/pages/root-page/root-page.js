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
    input2() {
        this.value2 = this.ngvalue2;
        console.log('value2', this.value2);
    }
    input3(ref) {
        this.value3 = ref.value;
        console.log('value3', this.value3);
    }
    input4(value) {
        this.value4 = value;
        console.log('value4', this.value4);
    }
    input5(ev) {
        this.value5 = ev.target.value;
        console.log('value5', this.value5);
    }
    input6(value) {
        this.value6 = value;
        console.log('value6', this.value6);
    }
};
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    })
], RootPage);
exports.RootPage = RootPage;
//# sourceMappingURL=root-page.js.map