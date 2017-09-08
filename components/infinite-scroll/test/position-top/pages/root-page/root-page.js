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
let RootPage = class RootPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        this.enabled = true;
        for (var i = 0; i < 30; i++) {
            this.items.unshift(this.items.length);
        }
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        getAsyncData().then(newData => {
            for (var i = 0; i < newData.length; i++) {
                this.items.unshift(this.items.length);
            }
            console.log('Finished receiving data, async operation complete');
            infiniteScroll.complete();
            if (this.items.length > 90) {
                this.enabled = false;
            }
        });
    }
    goToPage2() {
        this.navCtrl.push(page_two_1.PageTwo);
    }
    toggleInfiniteScroll() {
        this.enabled = !this.enabled;
    }
};
__decorate([
    core_1.ViewChild(__1.InfiniteScroll),
    __metadata("design:type", __1.InfiniteScroll)
], RootPage.prototype, "infiniteScroll", void 0);
__decorate([
    core_1.ViewChild(__1.Content),
    __metadata("design:type", __1.Content)
], RootPage.prototype, "content", void 0);
RootPage = __decorate([
    core_1.Component({
        templateUrl: 'root-page.html'
    }),
    __metadata("design:paramtypes", [__1.NavController])
], RootPage);
exports.RootPage = RootPage;
function getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
        setTimeout(() => {
            let data = [];
            for (var i = 0; i < 30; i++) {
                data.unshift(i);
            }
            resolve(data);
        }, 2000);
    });
}
//# sourceMappingURL=root-page.js.map