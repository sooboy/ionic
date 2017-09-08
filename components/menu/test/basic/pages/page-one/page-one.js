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
const page_two_1 = require("../page-two/page-two");
let PageOne = class PageOne {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.changeDetectionCount = 0;
        this.rootPage = page_two_1.PageTwo;
        this.pages = [
            { title: 'Page 1', component: page_two_1.PageTwo },
            { title: 'Page 2', component: 'PageThree' },
            { title: 'Page 3', component: 'PageFour' },
        ];
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component).then(() => {
            // wait for the root page to be completely loaded
            // then close the menu
            this.menuCtrl.close();
        });
    }
    openRightMenu() {
        this.menuCtrl.open('right');
    }
    openLeftMenu() {
        this.menuCtrl.open('left');
    }
    onDrag(ev) {
        console.log('Menu is being dragged', ev);
    }
    onOpen(ev) {
        console.log('Menu is open', ev);
    }
    onClose(ev) {
        console.log('Menu is closed', ev);
    }
    isChangeDetecting() {
        console.log('Change detection', ++this.changeDetectionCount);
        return true;
    }
};
__decorate([
    core_1.ViewChild(__1.Nav),
    __metadata("design:type", __1.Nav)
], PageOne.prototype, "nav", void 0);
PageOne = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html'
    }),
    __metadata("design:paramtypes", [__1.MenuController])
], PageOne);
exports.PageOne = PageOne;
//# sourceMappingURL=page-one.js.map