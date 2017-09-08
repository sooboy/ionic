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
const my_component_two_1 = require("./my-component-two");
let MyCmpTest = class MyCmpTest {
    constructor() {
        this.value = 'Test Failed';
    }
    ngOnInit() {
        this.label = this._label;
    }
};
__decorate([
    core_1.ViewChild(my_component_two_1.MyCmpTest2),
    __metadata("design:type", my_component_two_1.MyCmpTest2)
], MyCmpTest.prototype, "_label", void 0);
MyCmpTest = __decorate([
    core_1.Component({
        selector: 'my-cmp',
        template: `<my-cmp2></my-cmp2> <span style="color:green">{{value}}</span>`
    })
], MyCmpTest);
exports.MyCmpTest = MyCmpTest;
//# sourceMappingURL=my-component.js.map