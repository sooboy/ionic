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
let PageOne = PageOne_1 = class PageOne {
    constructor(navCtrl, pickerCtrl) {
        this.navCtrl = navCtrl;
        this.pickerCtrl = pickerCtrl;
    }
    push() {
        this.navCtrl.push(PageOne_1);
    }
    twoColumns() {
        let picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Done',
                    handler: (data) => {
                        this.smoothie = `${data.flavor1.value} ${data.flavor2.value}`;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'right',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                },
                {
                    name: 'flavor2',
                    align: 'left',
                    options: [
                        { text: 'Banana' },
                        { text: 'Orange' },
                        { text: 'Grape' },
                        { text: 'Watermelon' },
                        { text: 'Strawberry' },
                        { text: 'Papaya' },
                        { text: 'Kiwi' },
                        { text: 'Cherry' },
                        { text: 'Raspberry' },
                        { text: 'Mango' },
                        { text: 'Pineapple' },
                        { text: 'Peach' },
                        { text: 'Avocado' },
                        { text: 'Honeydew' },
                        { text: 'Blueberry' },
                        { text: 'Coconut' },
                    ]
                },
            ]
        });
        picker.present();
    }
    prefixLabel() {
        let picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'Nerp',
                    role: 'cancel'
                },
                {
                    text: 'Woot!',
                    handler: (data) => {
                        this.smoothie = `${data.flavor1.value}`;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'left',
                    prefix: 'Flavor',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                }
            ]
        });
        picker.present();
    }
    suffixLabel() {
        let picker = this.pickerCtrl.create({
            buttons: [
                {
                    text: 'No',
                    role: 'cancel'
                },
                {
                    text: 'Si',
                    handler: (data) => {
                        this.smoothie = `${data.flavor1.value}`;
                    }
                }
            ],
            columns: [
                {
                    name: 'flavor1',
                    align: 'right',
                    suffix: 'flavor',
                    options: [
                        { text: 'Mango' },
                        { text: 'Banana' },
                        { text: 'Cherry' },
                        { text: 'Strawberry' },
                        { text: 'Raspberry' },
                        { text: 'Blueberry' },
                        { text: 'Peach' },
                        { text: 'Coconut' },
                        { text: 'Pineapple' },
                        { text: 'Honeydew' },
                        { text: 'Watermelon' },
                        { text: 'Grape' },
                        { text: 'Avocado' },
                        { text: 'Kiwi' },
                        { text: 'Orange' },
                        { text: 'Papaya' },
                    ]
                }
            ]
        });
        picker.present();
    }
    columnSizes() {
        let picker = this.pickerCtrl.create();
        picker.addButton({
            text: 'Cancel',
            role: 'cancel'
        });
        picker.addButton({
            text: 'Set Timer',
            handler: (data) => {
                this.timer = `${data.hour.value}:${data.min.value}`;
            }
        });
        picker.addColumn({
            name: 'hour',
            suffix: 'hour',
            optionsWidth: '50px',
            align: 'right',
            options: Array.apply(null, { length: 23 }).map(Number.call, Number)
        });
        let minuteOptions = [];
        for (var i = 0; i < 60; i++) {
            minuteOptions.push({
                text: i,
                value: ('0' + i).slice(-2)
            });
        }
        picker.addColumn({
            name: 'min',
            suffix: 'min',
            optionsWidth: '80px',
            align: 'left',
            options: minuteOptions
        });
        picker.present();
    }
};
PageOne = PageOne_1 = __decorate([
    __1.IonicPage(),
    core_1.Component({
        templateUrl: 'page-one.html',
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [__1.NavController,
        __1.PickerController])
], PageOne);
exports.PageOne = PageOne;
var PageOne_1;
//# sourceMappingURL=page-one.js.map