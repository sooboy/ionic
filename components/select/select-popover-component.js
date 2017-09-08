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
const nav_params_1 = require("../../navigation/nav-params");
const view_controller_1 = require("../../navigation/view-controller");
/** @hidden */
let SelectPopover = class SelectPopover {
    constructor(navParams, viewController) {
        this.navParams = navParams;
        this.viewController = viewController;
    }
    get value() {
        let checkedOption = this.options.find(option => option.checked);
        return checkedOption ? checkedOption.value : undefined;
    }
    set value(value) {
        let checkedOption = this.options.find(option => option.value === value);
        if (checkedOption && checkedOption.handler) {
            checkedOption.handler();
        }
        this.viewController.dismiss(value);
    }
    ngOnInit() {
        this.options = this.navParams.data.options;
    }
};
SelectPopover = __decorate([
    core_1.Component({
        template: `
    <ion-list radio-group [(ngModel)]="value">
      <ion-item *ngFor="let option of options">
        <ion-label>{{option.text}}</ion-label>
        <ion-radio [checked]="option.checked" [value]="option.value" [disabled]="option.disabled"></ion-radio>
      </ion-item>
    </ion-list>
  `
    }),
    __metadata("design:paramtypes", [nav_params_1.NavParams,
        view_controller_1.ViewController])
], SelectPopover);
exports.SelectPopover = SelectPopover;
//# sourceMappingURL=select-popover-component.js.map