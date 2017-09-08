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
let SearchPage = class SearchPage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.value = '';
        this.initializeItems();
    }
    showDetail(item) {
        this.navCtrl.push('DetailPage', { city: item });
    }
    initializeItems() {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    }
    getItems(q) {
        // Reset items back to all of the items
        this.initializeItems();
        // if the value is an empty string don't filter the items
        if (!q || q.trim() === '') {
            return;
        }
        this.items = this.items.filter((v) => v.toLowerCase().indexOf(q.toLowerCase()) > -1);
    }
    openModal() {
        let modal = this.modalCtrl.create('ModalPage');
        modal.present();
    }
};
SearchPage = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'search-page.html'
    }),
    __metadata("design:paramtypes", [__1.NavController, __1.ModalController])
], SearchPage);
exports.SearchPage = SearchPage;
//# sourceMappingURL=search-page.js.map