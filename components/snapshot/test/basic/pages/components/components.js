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
const _1 = require("../../../../../../");
const assistive_touch_1 = require("../../providers/assistive-touch/assistive-touch");
const nav_controller_1 = require("../../../../../../navigation/nav-controller");
const app_component_1 = require("../../../../../action-sheet/test/basic/app/app.component");
const app_component_2 = require("../../../../../alert/test/basic/app/app.component");
const app_module_1 = require("../../../../../alert/test/dismiss/app.module");
const app_module_2 = require("../../../../../app/test/animations/app.module");
const app_component_3 = require("../../../../../app/test/cordova/app/app.component");
const app_component_4 = require("../../../../../app/test/gesture-collision/app/app.component");
const app_module_3 = require("../../../../../app/test/gestures/app.module");
const app_component_5 = require("../../../../../app/test/typography/app/app.component");
const app_component_6 = require("../../../../../app/test/utilities/app/app.component");
const app_component_7 = require("../../../../../badge/test/basic/app/app.component");
const app_component_8 = require("../../../../../button/test/anchors/app/app.component");
const app_component_9 = require("../../../../../button/test/attributes/app/app.component");
const app_component_10 = require("../../../../../button/test/basic/app/app.component");
const app_component_11 = require("../../../../../button/test/block/app/app.component");
const app_component_12 = require("../../../../../button/test/clear/app/app.component");
const app_component_13 = require("../../../../../button/test/decorator/app/app.component");
const app_component_14 = require("../../../../../button/test/dynamic/app/app.component");
const app_component_15 = require("../../../../../button/test/full/app/app.component");
const app_component_16 = require("../../../../../button/test/icons/app/app.component");
const app_component_17 = require("../../../../../button/test/outline/app/app.component");
const app_module_4 = require("../../../../../button/test/raised/app.module");
const app_component_18 = require("../../../../../button/test/round/app/app.component");
const app_component_19 = require("../../../../../button/test/sizes/app/app.component");
const app_component_20 = require("../../../../../card/test/advanced/app/app.component");
const app_component_21 = require("../../../../../card/test/basic/app/app.component");
const app_component_22 = require("../../../../../card/test/colors/app/app.component");
const app_component_23 = require("../../../../../card/test/images/app/app.component");
const app_component_24 = require("../../../../../card/test/list/app/app.component");
const app_module_5 = require("../../../../../card/test/map/app.module");
const app_module_6 = require("../../../../../card/test/social/app.module");
const app_component_25 = require("../../../../../checkbox/test/basic/app/app.component");
const app_component_26 = require("../../../../../chip/test/basic/app/app.component");
const app_component_27 = require("../../../../../content/test/basic/app/app.component");
const app_component_28 = require("../../../../../content/test/fullscreen/app/app.component");
const app_module_7 = require("../../../../../content/test/header-scroll/app.module");
const app_component_29 = require("../../../../../content/test/no-bounce/app/app.component");
const app_component_30 = require("../../../../../content/test/scroll-down-on-load/app/app.component");
const app_component_31 = require("../../../../../datetime/test/basic/app/app.component");
const app_module_8 = require("../../../../../datetime/test/form/app.module");
const app_component_32 = require("../../../../../datetime/test/issues/app/app.component");
const app_component_33 = require("../../../../../datetime/test/labels/app/app.component");
const app_component_34 = require("../../../../../fab/test/basic/app/app.component");
const app_module_9 = require("../../../../../grid/test/alignment/app.module");
const app_component_35 = require("../../../../../grid/test/basic/app/app.component");
const app_module_10 = require("../../../../../grid/test/card/app.module");
const app_module_11 = require("../../../../../grid/test/full/app.module");
const app_module_12 = require("../../../../../grid/test/responsive/app.module");
const app_component_36 = require("../../../../../icon/test/basic/app/app.component");
const app_component_37 = require("../../../../../img/test/basic/app/app.component");
const app_module_13 = require("../../../../../img/test/cards/app.module");
const app_module_14 = require("../../../../../img/test/lazy-load/app.module");
const app_module_15 = require("../../../../../img/test/list/app.module");
const app_module_16 = require("../../../../../infinite-scroll/test/basic/app.module");
const app_component_38 = require("../../../../../infinite-scroll/test/position-top/app/app.component");
const app_module_17 = require("../../../../../infinite-scroll/test/short-list/app.module");
const app_component_39 = require("../../../../../input/test/basic-form/app/app.component");
const app_component_40 = require("../../../../../input/test/clear-after-edit/app/app.component");
const app_component_41 = require("../../../../../input/test/clear-input/app/app.component");
const app_component_42 = require("../../../../../input/test/events/app/app.component");
const app_component_43 = require("../../../../../input/test/fixed-inline-labels/app/app.component");
const app_component_44 = require("../../../../../input/test/floating-labels/app/app.component");
const app_component_45 = require("../../../../../input/test/footer-inputs/app/app.component");
const app_component_46 = require("../../../../../input/test/form-inputs/app/app.component");
const app_component_47 = require("../../../../../input/test/highlight/app/app.component");
const app_component_48 = require("../../../../../input/test/inline-labels/app/app.component");
const app_module_18 = require("../../../../../input/test/input-focus/app/app.module");
const app_component_49 = require("../../../../../input/test/inset-inputs/app/app.component");
const app_component_50 = require("../../../../../input/test/placeholder-labels/app/app.component");
const app_component_51 = require("../../../../../input/test/stacked-labels/app/app.component");
const app_component_52 = require("../../../../../item/test/buttons/app/app.component");
const app_component_53 = require("../../../../../item/test/colors/app/app.component");
const app_component_54 = require("../../../../../item/test/dividers/app/app.component");
const app_component_55 = require("../../../../../item/test/groups/app/app.component");
const app_component_56 = require("../../../../../item/test/icons/app/app.component");
const app_component_57 = require("../../../../../item/test/images/app/app.component");
const app_component_58 = require("../../../../../item/test/inputs/app/app.component");
const app_component_59 = require("../../../../../item/test/media/app/app.component");
const app_module_19 = require("../../../../../item/test/reorder/app/app.module");
const app_component_60 = require("../../../../../item/test/sliding/app/app.component");
const app_component_61 = require("../../../../../item/test/text/app/app.component");
const app_module_20 = require("../../../../../list/test/chat-list/app.module");
const app_component_62 = require("../../../../../list/test/header-scenarios/app/app.component");
const app_component_63 = require("../../../../../list/test/headers/app/app.component");
const app_component_64 = require("../../../../../list/test/inset/app/app.component");
const app_component_65 = require("../../../../../list/test/no-lines/app/app.component");
const app_module_21 = require("../../../../../list/test/repeat-headers/app.module");
const app_module_22 = require("../../../../../list/test/sticky/app.module");
const app_component_66 = require("../../../../../loading/test/basic/app/app.component");
const app_component_67 = require("../../../../../tabs/test/basic/app/app.component");
const app_component_68 = require("../../../../../menu/test/basic/app/app.component");
// import { AppComponent as MenuDisableSwipe } from '../../../../../menu/test/disable-swipe/app.module';
// import { AppComponent as MenuEnableDisable } from '../../../../../menu/test/enable-disable/app.module';
const app_component_69 = require("../../../../../menu/test/multiple/app/app.component");
const app_module_23 = require("../../../../../menu/test/overlay/app.module");
const app_module_24 = require("../../../../../menu/test/push/app.module");
const app_module_25 = require("../../../../../menu/test/reveal/app.module");
const app_component_70 = require("../../../../../modal/test/basic/app/app.component");
const app_component_71 = require("../../../../../nav/test/basic/app/app.component");
const app_component_72 = require("../../../../../nav/test/child-navs/app/app.component");
const app_module_26 = require("../../../../../nav/test/init-async/app.module");
const app_module_27 = require("../../../../../nav/test/insert-views/app.module");
const app_module_28 = require("../../../../../nav/test/memory/app.module");
const app_component_73 = require("../../../../../nav/test/nav-push-pop/app/app.component");
const app_module_29 = require("../../../../../nav/test/worst-case/app.module");
const app_component_74 = require("../../../../../picker/test/basic/app/app.component");
const app_component_75 = require("../../../../../popover/test/basic/app/app.component");
const app_component_76 = require("../../../../../radio/test/basic/app/app.component");
const app_component_77 = require("../../../../../range/test/basic/app/app.component");
const app_module_30 = require("../../../../../refresher/test/basic/app.module");
// import { AppComponent as RefresherNavigation } from '../../../../../refresher/test/navigation/app.module';
const app_module_31 = require("../../../../../scroll/test/basic/app.module");
const app_component_78 = require("../../../../../searchbar/test/basic/app/app.component");
const app_component_79 = require("../../../../../searchbar/test/nav/app/app.component");
const app_component_80 = require("../../../../../searchbar/test/toolbar/app/app.component");
const app_component_81 = require("../../../../../segment/test/basic/app/app.component");
const app_component_82 = require("../../../../../segment/test/nav/app/app.component");
const app_component_83 = require("../../../../../segment/test/swipe/app/app.component");
const app_component_84 = require("../../../../../select/test/multiple-value/app/app.component");
const app_component_85 = require("../../../../../select/test/single-value/app/app.component");
const app_module_32 = require("../../../../../show-hide-when/test/basic/app.module");
const app_module_33 = require("../../../../../slides/test/basic/app.module");
const app_module_34 = require("../../../../../slides/test/control/app.module");
const app_module_35 = require("../../../../../slides/test/controller/app.module");
const app_module_36 = require("../../../../../slides/test/images/app.module");
const app_module_37 = require("../../../../../slides/test/intro/app.module");
const app_module_38 = require("../../../../../slides/test/loop/app.module");
const app_module_39 = require("../../../../../slides/test/options/app.module");
const app_module_40 = require("../../../../../slides/test/rtl/app.module");
const app_module_41 = require("../../../../../slides/test/scroll/app.module");
const app_module_42 = require("../../../../../spinner/test/basic/app.module");
const app_module_43 = require("../../../../../spinner/test/colors/app.module");
const app_component_86 = require("../../../../../split-pane/test/basic/app/app.component");
const app_component_87 = require("../../../../../split-pane/test/menus/app/app.component");
const app_component_88 = require("../../../../../split-pane/test/nested/app/app.component");
const app_component_89 = require("../../../../../split-pane/test/tabs/app/app.component");
const app_component_90 = require("../../../../../tabs/test/advanced/app/app.component");
const app_component_91 = require("../../../../../tabs/test/badges/app/app.component");
const app_component_92 = require("../../../../../tabs/test/basic/app/app.component");
const app_component_93 = require("../../../../../tabs/test/colors/app/app.component");
const app_module_44 = require("../../../../../tabs/test/events/app.module");
const app_module_45 = require("../../../../../tabs/test/ghost/app.module");
const app_module_46 = require("../../../../../tabs/test/lifecyles/app.module");
const app_component_94 = require("../../../../../tabs/test/tab-bar-scenarios/app/app.component");
const app_module_47 = require("../../../../../tabs/test/top/app.module");
const app_component_95 = require("../../../../../toast/test/basic/app/app.component");
const app_component_96 = require("../../../../../toggle/test/basic/app/app.component");
const app_component_97 = require("../../../../../toolbar/test/basic/app/app.component");
const app_component_98 = require("../../../../../toolbar/test/colors/app/app.component");
const app_component_99 = require("../../../../../toolbar/test/scenarios/app/app.component");
const app_component_100 = require("../../../../../typography/test/basic/app/app.component");
const app_module_48 = require("../../../../../virtual-scroll/test/basic/app.module");
const app_module_49 = require("../../../../../virtual-scroll/test/cards/app.module");
const app_module_50 = require("../../../../../virtual-scroll/test/image-gallery/app.module");
const app_module_51 = require("../../../../../virtual-scroll/test/infinite-scroll/app.module");
const app_module_52 = require("../../../../../virtual-scroll/test/list/app.module");
const app_component_101 = require("../../../../../virtual-scroll/test/media/app/app.component");
const app_module_53 = require("../../../../../virtual-scroll/test/sliding-item/app.module");
const app_module_54 = require("../../../../../virtual-scroll/test/variable-size/app.module");
let ComponentsPage = class ComponentsPage {
    constructor(navCtrl, assistive) {
        this.navCtrl = navCtrl;
        this.components = [
            {
                name: 'Action Sheet',
                components: [
                    { name: 'basic', component: app_component_1.AppComponent }
                ]
            }, {
                name: 'Alert',
                components: [
                    { name: 'basic', component: app_component_2.AppComponent },
                    { name: 'dismiss', component: app_module_1.AppComponent }
                ]
            }, {
                name: 'App',
                components: [
                    { name: 'animations', component: app_module_2.AppComponent },
                    { name: 'cordova', component: app_component_3.AppComponent },
                    { name: 'gesture-collision', component: app_component_4.AppComponent },
                    { name: 'gestures', component: app_module_3.AppComponent },
                    { name: 'typography', component: app_component_5.AppComponent },
                    { name: 'utilities', component: app_component_6.AppComponent }
                ]
            }, {
                name: 'Avatar',
                components: []
            }, {
                name: 'Backdrop',
                components: []
            }, {
                name: 'Badge',
                components: [
                    { name: 'basic', component: app_component_7.AppComponent }
                ]
            }, {
                name: 'Button',
                components: [
                    { name: 'anchors', component: app_component_8.AppComponent },
                    { name: 'attributes', component: app_component_9.AppComponent },
                    { name: 'basic', component: app_component_10.AppComponent },
                    { name: 'block', component: app_component_11.AppComponent },
                    { name: 'clear', component: app_component_12.AppComponent },
                    { name: 'decorator', component: app_component_13.AppComponent },
                    { name: 'dynamic', component: app_component_14.AppComponent },
                    { name: 'full', component: app_component_15.AppComponent },
                    { name: 'icons', component: app_component_16.AppComponent },
                    { name: 'outline', component: app_component_17.AppComponent },
                    { name: 'raised', component: app_module_4.AppComponent },
                    { name: 'round', component: app_component_18.AppComponent },
                    { name: 'sizes', component: app_component_19.AppComponent }
                ]
            }, {
                name: 'Card',
                components: [
                    { name: 'advanced', component: app_component_20.AppComponent },
                    { name: 'basic', component: app_component_21.AppComponent },
                    { name: 'colors', component: app_component_22.AppComponent },
                    { name: 'images', component: app_component_23.AppComponent },
                    { name: 'list', component: app_component_24.AppComponent },
                    { name: 'map', component: app_module_5.AppComponent },
                    { name: 'social', component: app_module_6.AppComponent }
                ]
            }, {
                name: 'Checkbox',
                components: [
                    { name: 'basic', component: app_component_25.AppComponent }
                ]
            }, {
                name: 'Chip',
                components: [
                    { name: 'basic', component: app_component_26.AppComponent }
                ]
            }, {
                name: 'Content',
                components: [
                    { name: 'basic', component: app_component_27.AppComponent },
                    { name: 'fullscreen', component: app_component_28.AppComponent },
                    { name: 'header-scroll', component: app_module_7.AppComponent },
                    { name: 'no-bounce', component: app_component_29.AppComponent },
                    { name: 'scroll-down-on-load', component: app_component_30.AppComponent }
                ]
            }, {
                name: 'Datetime',
                components: [
                    { name: 'basic', component: app_component_31.AppComponent },
                    { name: 'form', component: app_module_8.AppComponent },
                    { name: 'issues', component: app_component_32.AppComponent },
                    { name: 'labels', component: app_component_33.AppComponent }
                ]
            }, {
                name: 'Fab',
                components: [
                    { name: 'basic', component: app_component_34.AppComponent }
                ]
            }, {
                name: 'Grid',
                components: [
                    { name: 'alignment', component: app_module_9.AppComponent },
                    { name: 'basic', component: app_component_35.AppComponent },
                    { name: 'card', component: app_module_10.AppComponent },
                    { name: 'full', component: app_module_11.AppComponent },
                    { name: 'responsive', component: app_module_12.AppComponent }
                ]
            }, {
                name: 'Icon',
                components: [
                    { name: 'basic', component: app_component_36.AppComponent }
                ]
            }, {
                name: 'Img',
                components: [
                    { name: 'basic', component: app_component_37.AppComponent },
                    { name: 'cards', component: app_module_13.AppComponent },
                    { name: 'lazy-load', component: app_module_14.AppComponent },
                    { name: 'list', component: app_module_15.AppComponent }
                ]
            }, {
                name: 'Infinite Scroll',
                components: [
                    { name: 'basic', component: app_module_16.AppComponent },
                    { name: 'position-top', component: app_component_38.AppComponent },
                    { name: 'short-list', component: app_module_17.AppComponent }
                ]
            }, {
                name: 'Inputs',
                components: [
                    { name: 'basic-form', component: app_component_39.AppComponent },
                    { name: 'clear-after-edit', component: app_component_40.AppComponent },
                    { name: 'clear-input', component: app_component_41.AppComponent },
                    { name: 'events', component: app_component_42.AppComponent },
                    { name: 'fixed-inline-labels', component: app_component_43.AppComponent },
                    { name: 'floating-labels', component: app_component_44.AppComponent },
                    { name: 'footer-inputs', component: app_component_45.AppComponent },
                    { name: 'form-inputs', component: app_component_46.AppComponent },
                    { name: 'highlight', component: app_component_47.AppComponent },
                    { name: 'inline-labels', component: app_component_48.AppComponent },
                    { name: 'input-focus', component: app_module_18.AppComponent },
                    { name: 'inset-inputs', component: app_component_49.AppComponent },
                    { name: 'placeholder-labels', component: app_component_50.AppComponent },
                    { name: 'stacked-labels', component: app_component_51.AppComponent }
                ]
            }, {
                name: 'Item',
                components: [
                    { name: 'buttons', component: app_component_52.AppComponent },
                    { name: 'colors', component: app_component_53.AppComponent },
                    { name: 'dividers', component: app_component_54.AppComponent },
                    { name: 'groups', component: app_component_55.AppComponent },
                    { name: 'icons', component: app_component_56.AppComponent },
                    { name: 'images', component: app_component_57.AppComponent },
                    { name: 'inputs', component: app_component_58.AppComponent },
                    { name: 'media', component: app_component_59.AppComponent },
                    { name: 'reorder', component: app_module_19.AppComponent },
                    { name: 'sliding', component: app_component_60.AppComponent },
                    { name: 'text', component: app_component_61.AppComponent }
                ]
            }, {
                name: 'Label',
                components: []
            }, {
                name: 'List',
                components: [
                    { name: 'chat-list', component: app_module_20.AppComponent },
                    { name: 'header-scenarios', component: app_component_62.AppComponent },
                    { name: 'headers', component: app_component_63.AppComponent },
                    { name: 'inset', component: app_component_64.AppComponent },
                    { name: 'no-lines', component: app_component_65.AppComponent },
                    { name: 'repeat-headers', component: app_module_21.AppComponent },
                    { name: 'sticky', component: app_module_22.AppComponent },
                ]
            }, {
                name: 'Loading',
                components: [
                    { name: 'basic', component: app_component_66.AppComponent },
                    { name: 'tabs', component: app_component_67.AppComponent }
                ]
            }, {
                name: 'Menu',
                components: [
                    { name: 'basic', component: app_component_68.AppComponent },
                    // {name: 'disable-swipe', component: MenuDisableSwipe},
                    // {name: 'enable-disable', component: MenuEnableDisable},
                    { name: 'multiple', component: app_component_69.AppComponent },
                    { name: 'overlay', component: app_module_23.AppComponent },
                    { name: 'push', component: app_module_24.AppComponent },
                    { name: 'reveal', component: app_module_25.AppComponent },
                ]
            }, {
                name: 'Modal',
                components: [
                    { name: 'basic', component: app_component_70.AppComponent }
                ]
            }, {
                name: 'Nav',
                components: [
                    { name: 'basic', component: app_component_71.AppComponent },
                    { name: 'child-navs', component: app_component_72.AppComponent },
                    { name: 'init-async', component: app_module_26.AppComponent },
                    { name: 'insert-views', component: app_module_27.AppComponent },
                    { name: 'memory', component: app_module_28.AppComponent },
                    { name: 'nav-push-pop', component: app_component_73.AppComponent },
                    { name: 'worst-case', component: app_module_29.AppComponent }
                ]
            }, {
                name: 'Note',
                components: []
            }, {
                name: 'Option',
                components: []
            }, {
                name: 'Picker',
                components: [
                    { name: 'basic', component: app_component_74.AppComponent }
                ]
            }, {
                name: 'Popover',
                components: [
                    { name: 'basic', component: app_component_75.AppComponent }
                ]
            }, {
                name: 'Radio',
                components: [
                    { name: 'basic', component: app_component_76.AppComponent }
                ]
            }, {
                name: 'Range',
                components: [
                    { name: 'basic', component: app_component_77.AppComponent }
                ]
            }, {
                name: 'Refresher',
                components: [
                    { name: 'basic', component: app_module_30.AppComponent },
                ]
            }, {
                name: 'Scroll',
                components: [
                    { name: 'basic', component: app_module_31.AppComponent }
                ]
            }, {
                name: 'Searchbar',
                components: [
                    { name: 'basic', component: app_component_78.AppComponent },
                    { name: 'nav', component: app_component_79.AppComponent },
                    { name: 'toolbar', component: app_component_80.AppComponent },
                ]
            }, {
                name: 'Segment',
                components: [
                    { name: 'basic', component: app_component_81.AppComponent },
                    { name: 'nav', component: app_component_82.AppComponent },
                    { name: 'swipe', component: app_component_83.AppComponent },
                ]
            }, {
                name: 'Select',
                components: [
                    { name: 'multiple-value', component: app_component_84.AppComponent },
                    { name: 'single-value', component: app_component_85.AppComponent }
                ]
            }, {
                name: 'Show-hide-when',
                components: [
                    { name: 'basic', component: app_module_32.AppComponent }
                ]
            }, {
                name: 'Show-hide-when',
                components: [
                    { name: 'basic', component: app_module_33.AppComponent },
                    { name: 'control', component: app_module_34.AppComponent },
                    { name: 'controller', component: app_module_35.AppComponent },
                    { name: 'images', component: app_module_36.AppComponent },
                    { name: 'intro', component: app_module_37.AppComponent },
                    { name: 'loop', component: app_module_38.AppComponent },
                    { name: 'options', component: app_module_39.AppComponent },
                    { name: 'rtl', component: app_module_40.E2EApp },
                    { name: 'scroll', component: app_module_41.AppComponent },
                ]
            }, {
                name: 'Spinner',
                components: [
                    { name: 'basic', component: app_module_42.AppComponent },
                    { name: 'colors', component: app_module_43.AppComponent }
                ]
            }, {
                name: 'Split-pane',
                components: [
                    { name: 'basic', component: app_component_86.AppComponent },
                    { name: 'menus', component: app_component_87.AppComponent },
                    { name: 'nested', component: app_component_88.AppComponent },
                    { name: 'tabs', component: app_component_89.AppComponent }
                ]
            }, {
                name: 'Tabs',
                components: [
                    { name: 'advanced', component: app_component_90.AppComponent },
                    { name: 'badges', component: app_component_91.AppComponent },
                    { name: 'basic', component: app_component_92.AppComponent },
                    { name: 'colors', component: app_component_93.AppComponent },
                    { name: 'events', component: app_module_44.AppComponent },
                    { name: 'ghost', component: app_module_45.TabsPage },
                    { name: 'lifecyles', component: app_module_46.AppComponent },
                    { name: 'tab-bar-scenarios', component: app_component_94.AppComponent },
                    { name: 'top', component: app_module_47.AppComponent }
                ]
            }, {
                name: 'Thumbnail',
                components: []
            }, {
                name: 'Toast',
                components: [
                    { name: 'basic', component: app_component_95.AppComponent }
                ]
            }, {
                name: 'Toggle',
                components: [
                    { name: 'basic', component: app_component_95.AppComponent }
                ]
            }, {
                name: 'Toggle',
                components: [
                    { name: 'basic', component: app_component_96.AppComponent }
                ]
            }, {
                name: 'Toolbar',
                components: [
                    { name: 'basic', component: app_component_97.AppComponent },
                    { name: 'colors', component: app_component_98.AppComponent },
                    { name: 'scenarios', component: app_component_99.AppComponent }
                ]
            }, {
                name: 'Typography',
                components: [
                    { name: 'basic', component: app_component_100.AppComponent }
                ]
            }, {
                name: 'Virtual-scroll',
                components: [
                    { name: 'basic', component: app_module_48.AppComponent },
                    { name: 'cards', component: app_module_49.AppComponent },
                    { name: 'image-gallery', component: app_module_50.AppComponent },
                    { name: 'infinite-scroll', component: app_module_51.E2EApp },
                    { name: 'list', component: app_module_52.AppComponent },
                    { name: 'media', component: app_component_101.AppComponent },
                    { name: 'sliding-item', component: app_module_53.AppComponent },
                    { name: 'variable-size', component: app_module_54.AppComponent },
                ]
            }
        ];
        assistive.closeButton.subscribe(this.close.bind(this));
    }
    open(component) {
        this.navCtrl.push(component);
    }
    close() {
        this.navCtrl.popToRoot();
    }
};
ComponentsPage = __decorate([
    _1.IonicPage(),
    core_1.Component({
        templateUrl: 'components.html'
    }),
    __metadata("design:paramtypes", [nav_controller_1.NavController, assistive_touch_1.AssistiveTouchProvider])
], ComponentsPage);
exports.ComponentsPage = ComponentsPage;
//# sourceMappingURL=components.js.map