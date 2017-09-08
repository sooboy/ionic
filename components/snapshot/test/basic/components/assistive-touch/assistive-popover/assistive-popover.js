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
const ionic_page_1 = require("../../../../../../../navigation/ionic-page");
const assistive_touch_1 = require("../../../providers/assistive-touch/assistive-touch");
const view_controller_1 = require("../../../../../../../navigation/view-controller");
const platform_1 = require("../../../../../../../platform/platform");
let AssistivePopover = class AssistivePopover {
    constructor(assistive, plt, viewCtrl) {
        this.assistive = assistive;
        this.plt = plt;
        this.viewCtrl = viewCtrl;
    }
    homeButton() {
        this.assistive.closeButton.emit();
        this.close();
    }
    flipDirection() {
        this.plt.setDir(this.plt.dir() === 'ltr' ? 'rtl' : 'ltr', true);
        this.close();
    }
    close() {
        this.viewCtrl.dismiss();
    }
};
AssistivePopover = __decorate([
    ionic_page_1.IonicPage(),
    core_1.Component({
        templateUrl: 'assistive-popover.html'
    }),
    __metadata("design:paramtypes", [assistive_touch_1.AssistiveTouchProvider,
        platform_1.Platform,
        view_controller_1.ViewController])
], AssistivePopover);
exports.AssistivePopover = AssistivePopover;
//# sourceMappingURL=assistive-popover.js.map