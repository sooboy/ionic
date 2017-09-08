"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
  * @name Row
  * @module ionic
  * @description
  *
  * Rows are horizontal components of the [grid](../Grid) system and contain varying numbers of
  * [columns](../Col). They ensure the columns are positioned properly.
  *
  * ## Row attributes
  *
  * By default, columns will stretch to fill the entire height of the row and wrap when necessary.
  * There are several attributes that can be added to a row to customize this behavior.
  *
  * | Property                    | Description                                                                                                                                      |
  * |-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
  * | nowrap                      | Adds `flex-wrap: nowrap`. Forces the columns to a single row.                                                                                    |
  * | wrap-reverse                | Adds `flex-wrap: wrap-reverse`. The columns will wrap in reverse.                                                                                |
  * | align-items-start           | Adds `align-items: flex-start`. All columns will be vertically aligned at the top, unless they specify their own alignment.                      |
  * | align-items-center          | Adds `align-items: center`. All columns will be vertically aligned in the center, unless they specify their own alignment.                       |
  * | align-items-end             | Adds `align-items: flex-end`. All columns will be vertically aligned at the bottom, unless they specify their own alignment.                     |
  * | align-items-stretch         | Adds `align-items: stretch`. All columns will be stretched to take up the entire height of the row, unless they specify their own alignment.     |
  * | align-items-baseline        | Adds `align-items: baseline`. All columns will be vertically aligned at their baselines, unless they specify their own alignment.                |
  * | justify-content-start       | Adds `justify-content: start`. All columns will be horizontally aligned at the start.                                                            |
  * | justify-content-center      | Adds `justify-content: center`. All columns will be horizontally aligned at the center.                                                          |
  * | justify-content-end         | Adds `justify-content: end`. All columns will be horizontally aligned at the end.                                                                |
  * | justify-content-around      | Adds `justify-content: space-around`. All columns will be horizontally aligned with equal space around them.                                     |
  * | justify-content-between     | Adds `justify-content: space-between`. All columns will be horizontally aligned with a half-size space on either end.                            |
  *
  *
 */
let Row = class Row {
};
Row = __decorate([
    core_1.Directive({
        selector: 'ion-row, [ion-row]',
        host: {
            'class': 'row'
        }
    })
], Row);
exports.Row = Row;
//# sourceMappingURL=row.js.map