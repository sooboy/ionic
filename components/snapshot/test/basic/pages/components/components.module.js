"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const _1 = require("../../../../../../");
const components_1 = require("./components");
const app_module_1 = require("../../../../../action-sheet/test/basic/app/app.module");
const app_module_2 = require("../../../../../alert/test/basic/app/app.module");
const app_module_3 = require("../../../../../alert/test/dismiss/app.module");
const app_module_4 = require("../../../../../app/test/animations/app.module");
const app_module_5 = require("../../../../../app/test/cordova/app/app.module");
const app_module_6 = require("../../../../../app/test/gesture-collision/app/app.module");
const app_module_7 = require("../../../../../app/test/gestures/app.module");
const app_module_8 = require("../../../../../app/test/typography/app/app.module");
const app_module_9 = require("../../../../../app/test/utilities/app/app.module");
const app_module_10 = require("../../../../../badge/test/basic/app/app.module");
const app_module_11 = require("../../../../../button/test/anchors/app/app.module");
const app_module_12 = require("../../../../../button/test/attributes/app/app.module");
const app_module_13 = require("../../../../../button/test/basic/app/app.module");
const app_module_14 = require("../../../../../button/test/block/app/app.module");
const app_module_15 = require("../../../../../button/test/clear/app/app.module");
const app_module_16 = require("../../../../../button/test/decorator/app/app.module");
const app_module_17 = require("../../../../../button/test/dynamic/app/app.module");
const app_module_18 = require("../../../../../button/test/full/app/app.module");
const app_module_19 = require("../../../../../button/test/icons/app/app.module");
const app_module_20 = require("../../../../../button/test/outline/app/app.module");
const app_module_21 = require("../../../../../button/test/raised/app.module");
const app_module_22 = require("../../../../../button/test/round/app/app.module");
const app_module_23 = require("../../../../../button/test/sizes/app/app.module");
const app_module_24 = require("../../../../../card/test/advanced/app/app.module");
const app_module_25 = require("../../../../../card/test/basic/app/app.module");
const app_module_26 = require("../../../../../card/test/colors/app/app.module");
const app_module_27 = require("../../../../../card/test/images/app/app.module");
const app_module_28 = require("../../../../../card/test/list/app/app.module");
const app_module_29 = require("../../../../../card/test/map/app.module");
const app_module_30 = require("../../../../../card/test/social/app.module");
const app_module_31 = require("../../../../../checkbox/test/basic/app/app.module");
const app_module_32 = require("../../../../../chip/test/basic/app/app.module");
const app_module_33 = require("../../../../../content/test/basic/app/app.module");
const app_module_34 = require("../../../../../content/test/fullscreen/app/app.module");
const app_module_35 = require("../../../../../content/test/header-scroll/app.module");
const app_module_36 = require("../../../../../content/test/no-bounce/app/app.module");
const app_module_37 = require("../../../../../content/test/scroll-down-on-load/app/app.module");
const app_module_38 = require("../../../../../datetime/test/basic/app/app.module");
const app_module_39 = require("../../../../../datetime/test/form/app.module");
const app_module_40 = require("../../../../../datetime/test/issues/app/app.module");
const app_module_41 = require("../../../../../datetime/test/labels/app/app.module");
const app_module_42 = require("../../../../../fab/test/basic/app/app.module");
const app_module_43 = require("../../../../../grid/test/alignment/app.module");
const app_module_44 = require("../../../../../grid/test/basic/app/app.module");
const app_module_45 = require("../../../../../grid/test/card/app.module");
const app_module_46 = require("../../../../../grid/test/full/app.module");
const app_module_47 = require("../../../../../grid/test/responsive/app.module");
const app_module_48 = require("../../../../../icon/test/basic/app/app.module");
const app_module_49 = require("../../../../../img/test/basic/app/app.module");
const app_module_50 = require("../../../../../img/test/cards/app.module");
const app_module_51 = require("../../../../../img/test/lazy-load/app.module");
const app_module_52 = require("../../../../../img/test/list/app.module");
const app_module_53 = require("../../../../../infinite-scroll/test/basic/app.module");
const app_module_54 = require("../../../../../infinite-scroll/test/position-top/app/app.module");
const app_module_55 = require("../../../../../infinite-scroll/test/short-list/app.module");
const app_module_56 = require("../../../../../input/test/basic-form/app/app.module");
const app_module_57 = require("../../../../../input/test/clear-after-edit/app/app.module");
const app_module_58 = require("../../../../../input/test/clear-input/app/app.module");
const app_module_59 = require("../../../../../input/test/events/app/app.module");
const app_module_60 = require("../../../../../input/test/fixed-inline-labels/app/app.module");
const app_module_61 = require("../../../../../input/test/floating-labels/app/app.module");
const app_module_62 = require("../../../../../input/test/footer-inputs/app/app.module");
const app_module_63 = require("../../../../../input/test/form-inputs/app/app.module");
const app_module_64 = require("../../../../../input/test/highlight/app/app.module");
const app_module_65 = require("../../../../../input/test/inline-labels/app/app.module");
const app_module_66 = require("../../../../../input/test/input-focus/app/app.module");
const app_module_67 = require("../../../../../input/test/inset-inputs/app/app.module");
const app_module_68 = require("../../../../../input/test/placeholder-labels/app/app.module");
const app_module_69 = require("../../../../../input/test/stacked-labels/app/app.module");
const app_module_70 = require("../../../../../item/test/buttons/app/app.module");
const app_module_71 = require("../../../../../item/test/colors/app/app.module");
const app_module_72 = require("../../../../../item/test/dividers/app/app.module");
const app_module_73 = require("../../../../../item/test/groups/app/app.module");
const app_module_74 = require("../../../../../item/test/icons/app/app.module");
const app_module_75 = require("../../../../../item/test/images/app/app.module");
const app_module_76 = require("../../../../../item/test/inputs/app/app.module");
const app_module_77 = require("../../../../../item/test/media/app/app.module");
const app_module_78 = require("../../../../../item/test/reorder/app/app.module");
const app_module_79 = require("../../../../../item/test/sliding/app/app.module");
const app_module_80 = require("../../../../../item/test/text/app/app.module");
const app_module_81 = require("../../../../../list/test/chat-list/app.module");
const app_module_82 = require("../../../../../list/test/header-scenarios/app/app.module");
const app_module_83 = require("../../../../../list/test/headers/app/app.module");
const app_module_84 = require("../../../../../list/test/inset/app/app.module");
const app_module_85 = require("../../../../../list/test/no-lines/app/app.module");
const app_module_86 = require("../../../../../list/test/repeat-headers/app.module");
const app_module_87 = require("../../../../../list/test/sticky/app.module");
const app_module_88 = require("../../../../../loading/test/basic/app/app.module");
const app_module_89 = require("../../../../../tabs/test/basic/app/app.module");
const app_module_90 = require("../../../../../menu/test/basic/app/app.module");
// import {AppModule as MenuDisableSwipe} from '../../../../../menu/test/disable-swipe/app.module'; TODO
// import {AppModule as MenuEnableDisable} from '../../../../../menu/test/enable-disable/app.module'; TODO
const app_module_91 = require("../../../../../menu/test/multiple/app/app.module");
const app_module_92 = require("../../../../../menu/test/overlay/app.module");
const app_module_93 = require("../../../../../menu/test/push/app.module");
const app_module_94 = require("../../../../../menu/test/reveal/app.module");
const app_module_95 = require("../../../../../modal/test/basic/app/app.module");
const app_module_96 = require("../../../../../nav/test/basic/app/app.module");
const app_module_97 = require("../../../../../nav/test/child-navs/app/app.module");
const app_module_98 = require("../../../../../nav/test/init-async/app.module");
const app_module_99 = require("../../../../../nav/test/insert-views/app.module");
const app_module_100 = require("../../../../../nav/test/memory/app.module");
const app_module_101 = require("../../../../../nav/test/nav-push-pop/app/app.module");
const app_module_102 = require("../../../../../nav/test/worst-case/app.module");
const app_module_103 = require("../../../../../picker/test/basic/app/app.module");
const app_module_104 = require("../../../../../popover/test/basic/app/app.module");
const app_module_105 = require("../../../../../radio/test/basic/app/app.module");
const app_module_106 = require("../../../../../range/test/basic/app/app.module");
const app_module_107 = require("../../../../../refresher/test/basic/app.module");
// import {AppModule as RefresherNavigation} from '../../../../../refresher/test/navigation/app.module'; TODO
const app_module_108 = require("../../../../../scroll/test/basic/app.module");
const app_module_109 = require("../../../../../searchbar/test/basic/app/app.module");
const app_module_110 = require("../../../../../searchbar/test/nav/app/app.module");
const app_module_111 = require("../../../../../searchbar/test/toolbar/app/app.module");
const app_module_112 = require("../../../../../segment/test/basic/app/app.module");
const app_module_113 = require("../../../../../segment/test/nav/app/app.module");
const app_module_114 = require("../../../../../segment/test/swipe/app/app.module");
const app_module_115 = require("../../../../../select/test/multiple-value/app/app.module");
const app_module_116 = require("../../../../../select/test/single-value/app/app.module");
const app_module_117 = require("../../../../../show-hide-when/test/basic/app.module");
const app_module_118 = require("../../../../../slides/test/basic/app.module");
const app_module_119 = require("../../../../../slides/test/control/app.module");
const app_module_120 = require("../../../../../slides/test/controller/app.module");
const app_module_121 = require("../../../../../slides/test/images/app.module");
const app_module_122 = require("../../../../../slides/test/intro/app.module");
const app_module_123 = require("../../../../../slides/test/loop/app.module");
const app_module_124 = require("../../../../../slides/test/options/app.module");
const app_module_125 = require("../../../../../slides/test/rtl/app.module");
const app_module_126 = require("../../../../../slides/test/scroll/app.module");
const app_module_127 = require("../../../../../spinner/test/basic/app.module");
const app_module_128 = require("../../../../../spinner/test/colors/app.module");
const app_module_129 = require("../../../../../split-pane/test/basic/app/app.module");
const app_module_130 = require("../../../../../split-pane/test/menus/app/app.module");
const app_module_131 = require("../../../../../split-pane/test/nested/app/app.module");
const app_module_132 = require("../../../../../split-pane/test/tabs/app/app.module");
const app_module_133 = require("../../../../../tabs/test/advanced/app/app.module");
const app_module_134 = require("../../../../../tabs/test/badges/app/app.module");
const app_module_135 = require("../../../../../tabs/test/basic/app/app.module");
const app_module_136 = require("../../../../../tabs/test/colors/app/app.module");
const app_module_137 = require("../../../../../tabs/test/events/app.module");
const app_module_138 = require("../../../../../tabs/test/ghost/app.module");
const app_module_139 = require("../../../../../tabs/test/lifecyles/app.module");
const app_module_140 = require("../../../../../tabs/test/tab-bar-scenarios/app/app.module");
const app_module_141 = require("../../../../../tabs/test/top/app.module");
const app_module_142 = require("../../../../../toast/test/basic/app/app.module");
const app_module_143 = require("../../../../../toggle/test/basic/app/app.module");
const app_module_144 = require("../../../../../toolbar/test/basic/app/app.module");
const app_module_145 = require("../../../../../toolbar/test/colors/app/app.module");
const app_module_146 = require("../../../../../toolbar/test/scenarios/app/app.module");
const app_module_147 = require("../../../../../typography/test/basic/app/app.module");
const app_module_148 = require("../../../../../virtual-scroll/test/basic/app.module");
const app_module_149 = require("../../../../../virtual-scroll/test/cards/app.module");
const app_module_150 = require("../../../../../virtual-scroll/test/image-gallery/app.module");
const app_module_151 = require("../../../../../virtual-scroll/test/infinite-scroll/app.module");
const app_module_152 = require("../../../../../virtual-scroll/test/list/app.module");
const app_module_153 = require("../../../../../virtual-scroll/test/media/app/app.module");
const app_module_154 = require("../../../../../virtual-scroll/test/sliding-item/app.module");
const app_module_155 = require("../../../../../virtual-scroll/test/variable-size/app.module");
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    core_1.NgModule({
        declarations: [
            components_1.ComponentsPage
        ],
        imports: [
            _1.IonicPageModule.forChild(components_1.ComponentsPage),
            app_module_1.AppModule,
            app_module_2.AppModule,
            app_module_3.AppModule,
            app_module_4.AppModule,
            app_module_5.AppModule,
            app_module_6.AppModule,
            app_module_7.AppModule,
            app_module_8.AppModule,
            app_module_9.AppModule,
            app_module_10.AppModule,
            app_module_11.AppModule,
            app_module_12.AppModule,
            app_module_13.AppModule,
            app_module_14.AppModule,
            app_module_15.AppModule,
            app_module_16.AppModule,
            app_module_17.AppModule,
            app_module_18.AppModule,
            app_module_19.AppModule,
            app_module_20.AppModule,
            app_module_21.AppModule,
            app_module_22.AppModule,
            app_module_23.AppModule,
            app_module_24.AppModule,
            app_module_25.AppModule,
            app_module_26.AppModule,
            app_module_27.AppModule,
            app_module_28.AppModule,
            app_module_29.AppModule,
            app_module_30.AppModule,
            app_module_31.AppModule,
            app_module_32.AppModule,
            app_module_33.AppModule,
            app_module_34.AppModule,
            app_module_35.AppModule,
            app_module_36.AppModule,
            app_module_37.AppModule,
            app_module_38.AppModule,
            app_module_39.AppModule,
            app_module_40.AppModule,
            app_module_41.AppModule,
            app_module_42.AppModule,
            app_module_43.AppModule,
            app_module_44.AppModule,
            app_module_45.AppModule,
            app_module_46.AppModule,
            app_module_47.AppModule,
            app_module_48.AppModule,
            app_module_49.AppModule,
            app_module_50.AppModule,
            app_module_51.AppModule,
            app_module_52.AppModule,
            app_module_53.AppModule,
            app_module_54.AppModule,
            app_module_55.AppModule,
            app_module_56.AppModule,
            app_module_57.AppModule,
            app_module_58.AppModule,
            app_module_59.AppModule,
            app_module_60.AppModule,
            app_module_61.AppModule,
            app_module_62.AppModule,
            app_module_63.AppModule,
            app_module_64.AppModule,
            app_module_65.AppModule,
            app_module_66.AppModule,
            app_module_67.AppModule,
            app_module_68.AppModule,
            app_module_69.AppModule,
            app_module_70.AppModule,
            app_module_71.AppModule,
            app_module_72.AppModule,
            app_module_73.AppModule,
            app_module_74.AppModule,
            app_module_75.AppModule,
            app_module_76.AppModule,
            app_module_77.AppModule,
            app_module_78.AppModule,
            app_module_79.AppModule,
            app_module_80.AppModule,
            app_module_81.AppModule,
            app_module_82.AppModule,
            app_module_83.AppModule,
            app_module_84.AppModule,
            app_module_85.AppModule,
            app_module_86.AppModule,
            app_module_87.AppModule,
            app_module_88.AppModule,
            app_module_89.AppModule,
            app_module_90.AppModule,
            // MenuDisableSwipe, TODO
            // MenuEnableDisable, TODO
            app_module_91.AppModule,
            app_module_92.AppModule,
            app_module_93.AppModule,
            app_module_94.AppModule,
            app_module_95.AppModule,
            app_module_96.AppModule,
            app_module_97.AppModule,
            app_module_98.AppModule,
            app_module_99.AppModule,
            app_module_100.AppModule,
            app_module_101.AppModule,
            app_module_102.AppModule,
            app_module_103.AppModule,
            app_module_104.AppModule,
            app_module_105.AppModule,
            app_module_106.AppModule,
            app_module_107.AppModule,
            // RefresherNavigation, TODO
            app_module_108.AppModule,
            app_module_109.AppModule,
            app_module_110.AppModule,
            app_module_111.AppModule,
            app_module_112.AppModule,
            app_module_113.AppModule,
            app_module_114.AppModule,
            app_module_115.AppModule,
            app_module_116.AppModule,
            app_module_117.AppModule,
            app_module_118.AppModule,
            app_module_119.AppModule,
            app_module_120.AppModule,
            app_module_121.AppModule,
            app_module_122.AppModule,
            app_module_123.AppModule,
            app_module_124.AppModule,
            app_module_125.AppModule,
            app_module_126.AppModule,
            app_module_127.AppModule,
            app_module_128.AppModule,
            app_module_129.AppModule,
            app_module_130.AppModule,
            app_module_131.AppModule,
            app_module_132.AppModule,
            app_module_133.AppModule,
            app_module_134.AppModule,
            app_module_135.AppModule,
            app_module_136.AppModule,
            app_module_137.AppModule,
            app_module_138.AppModule,
            app_module_139.AppModule,
            app_module_140.AppModule,
            app_module_141.AppModule,
            app_module_142.AppModule,
            app_module_143.AppModule,
            app_module_144.AppModule,
            app_module_145.AppModule,
            app_module_146.AppModule,
            app_module_147.AppModule,
            app_module_148.AppModule,
            app_module_149.AppModule,
            app_module_150.AppModule,
            app_module_151.AppModule,
            app_module_152.AppModule,
            app_module_153.AppModule,
            app_module_154.AppModule,
            app_module_155.AppModule,
        ],
        entryComponents: [
            components_1.ComponentsPage
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map