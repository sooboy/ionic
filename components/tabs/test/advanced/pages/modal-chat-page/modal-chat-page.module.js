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
const modal_chat_page_1 = require("./modal-chat-page");
let ModalChatPageModule = class ModalChatPageModule {
};
ModalChatPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            modal_chat_page_1.ModalChatPage,
        ],
        imports: [
            __1.IonicPageModule.forChild(modal_chat_page_1.ModalChatPage)
        ]
    })
], ModalChatPageModule);
exports.ModalChatPageModule = ModalChatPageModule;
//# sourceMappingURL=modal-chat-page.module.js.map