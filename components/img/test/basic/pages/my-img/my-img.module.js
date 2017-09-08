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
const my_img_1 = require("./my-img");
let MyImgModule = class MyImgModule {
};
MyImgModule = __decorate([
    core_1.NgModule({
        declarations: [
            my_img_1.MyImg,
        ],
        exports: [
            my_img_1.MyImg
        ],
        imports: [
            __1.IonicPageModule.forChild(my_img_1.MyImg)
        ]
    })
], MyImgModule);
exports.MyImgModule = MyImgModule;
//# sourceMappingURL=my-img.module.js.map