"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import Angular
 */
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const common_2 = require("@angular/common");
/**
 * Global Providers
 */
const app_1 = require("./components/app/app");
const app_root_1 = require("./components/app/app-root");
const config_1 = require("./config/config");
const deep_linker_1 = require("./navigation/deep-linker");
const dom_controller_1 = require("./platform/dom-controller");
const events_1 = require("./util/events");
const form_1 = require("./util/form");
const gesture_controller_1 = require("./gestures/gesture-controller");
const gesture_config_1 = require("./gestures/gesture-config");
const haptic_1 = require("./tap-click/haptic");
const keyboard_1 = require("./platform/keyboard");
const module_loader_1 = require("./util/module-loader");
const ng_module_loader_1 = require("./util/ng-module-loader");
const platform_1 = require("./platform/platform");
const platform_registry_1 = require("./platform/platform-registry");
const tap_click_1 = require("./tap-click/tap-click");
const mode_registry_1 = require("./config/mode-registry");
const transition_controller_1 = require("./transitions/transition-controller");
const url_serializer_1 = require("./navigation/url-serializer");
/**
 * Import Components/Directives/Etc
 */
const action_sheet_component_1 = require("./components/action-sheet/action-sheet-component");
const action_sheet_controller_1 = require("./components/action-sheet/action-sheet-controller");
const alert_component_1 = require("./components/alert/alert-component");
const alert_controller_1 = require("./components/alert/alert-controller");
const click_block_1 = require("./components/app/click-block");
const app_root_2 = require("./components/app/app-root");
const overlay_portal_1 = require("./components/app/overlay-portal");
const avatar_1 = require("./components/avatar/avatar");
const backdrop_1 = require("./components/backdrop/backdrop");
const badge_1 = require("./components/badge/badge");
const button_1 = require("./components/button/button");
const card_1 = require("./components/card/card");
const card_content_1 = require("./components/card/card-content");
const card_header_1 = require("./components/card/card-header");
const card_title_1 = require("./components/card/card-title");
const checkbox_1 = require("./components/checkbox/checkbox");
const chip_1 = require("./components/chip/chip");
const content_1 = require("./components/content/content");
const datetime_1 = require("./components/datetime/datetime");
const fab_1 = require("./components/fab/fab");
const fab_container_1 = require("./components/fab/fab-container");
const fab_list_1 = require("./components/fab/fab-list");
const col_1 = require("./components/grid/col");
const grid_1 = require("./components/grid/grid");
const row_1 = require("./components/grid/row");
const icon_1 = require("./components/icon/icon");
const img_1 = require("./components/img/img");
const infinite_scroll_1 = require("./components/infinite-scroll/infinite-scroll");
const infinite_scroll_content_1 = require("./components/infinite-scroll/infinite-scroll-content");
const input_1 = require("./components/input/input");
const item_1 = require("./components/item/item");
const item_content_1 = require("./components/item/item-content");
const item_divider_1 = require("./components/item/item-divider");
const item_group_1 = require("./components/item/item-group");
const item_options_1 = require("./components/item/item-options");
const item_reorder_1 = require("./components/item/item-reorder");
const item_sliding_1 = require("./components/item/item-sliding");
const reorder_1 = require("./components/item/reorder");
const label_1 = require("./components/label/label");
const list_1 = require("./components/list/list");
const list_header_1 = require("./components/list/list-header");
const loading_component_1 = require("./components/loading/loading-component");
const loading_controller_1 = require("./components/loading/loading-controller");
const menu_1 = require("./components/menu/menu");
const menu_close_1 = require("./components/menu/menu-close");
const menu_controller_1 = require("./components/app/menu-controller");
const menu_toggle_1 = require("./components/menu/menu-toggle");
const modal_component_1 = require("./components/modal/modal-component");
const modal_controller_1 = require("./components/modal/modal-controller");
const nav_1 = require("./components/nav/nav");
const nav_pop_1 = require("./components/nav/nav-pop");
const nav_pop_anchor_1 = require("./components/nav/nav-pop-anchor");
const nav_push_1 = require("./components/nav/nav-push");
const nav_push_anchor_1 = require("./components/nav/nav-push-anchor");
const note_1 = require("./components/note/note");
const option_1 = require("./components/option/option");
const picker_component_1 = require("./components/picker/picker-component");
const picker_column_1 = require("./components/picker/picker-column");
const picker_controller_1 = require("./components/picker/picker-controller");
const popover_component_1 = require("./components/popover/popover-component");
const popover_controller_1 = require("./components/popover/popover-controller");
const radio_button_1 = require("./components/radio/radio-button");
const radio_group_1 = require("./components/radio/radio-group");
const range_1 = require("./components/range/range");
const range_knob_1 = require("./components/range/range-knob");
const refresher_1 = require("./components/refresher/refresher");
const refresher_content_1 = require("./components/refresher/refresher-content");
const scroll_1 = require("./components/scroll/scroll");
const searchbar_1 = require("./components/searchbar/searchbar");
const segment_1 = require("./components/segment/segment");
const select_1 = require("./components/select/select");
const select_popover_component_1 = require("./components/select/select-popover-component");
const segment_button_1 = require("./components/segment/segment-button");
const show_when_1 = require("./components/show-hide-when/show-when");
const hide_when_1 = require("./components/show-hide-when/hide-when");
const slide_1 = require("./components/slides/slide");
const slides_1 = require("./components/slides/slides");
const spinner_1 = require("./components/spinner/spinner");
const split_pane_1 = require("./components/split-pane/split-pane");
const tab_1 = require("./components/tabs/tab");
const tab_button_1 = require("./components/tabs/tab-button");
const tab_highlight_1 = require("./components/tabs/tab-highlight");
const tabs_1 = require("./components/tabs/tabs");
const thumbnail_1 = require("./components/thumbnail/thumbnail");
const toast_component_1 = require("./components/toast/toast-component");
const toast_controller_1 = require("./components/toast/toast-controller");
const toggle_1 = require("./components/toggle/toggle");
const toolbar_footer_1 = require("./components/toolbar/toolbar-footer");
const toolbar_header_1 = require("./components/toolbar/toolbar-header");
const toolbar_1 = require("./components/toolbar/toolbar");
const toolbar_item_1 = require("./components/toolbar/toolbar-item");
const toolbar_title_1 = require("./components/toolbar/toolbar-title");
const navbar_1 = require("./components/toolbar/navbar");
const typography_1 = require("./components/typography/typography");
const virtual_footer_1 = require("./components/virtual-scroll/virtual-footer");
const virtual_header_1 = require("./components/virtual-scroll/virtual-header");
const virtual_item_1 = require("./components/virtual-scroll/virtual-item");
const virtual_scroll_1 = require("./components/virtual-scroll/virtual-scroll");
/**
 * @name IonicModule
 * @description
 * IonicModule is an [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html) that bootstraps
 * an Ionic App. By passing a root component, IonicModule will make sure that all of the components,
 * directives, and providers from the framework are imported.
 *
 * Any configuration for the app can be passed as the second argument to `forRoot`. This can be any
 * valid property from the [Config](/docs/api/config/Config/).
 *
 * @usage
 * ```ts
 * import { NgModule } from '@angular/core';
 *
 * import { IonicApp, IonicModule } from 'ionic-angular';
 *
 * import { MyApp } from './app.component';
 * import { HomePage } from '../pages/home/home';
 *
 * @NgModule({
 *   declarations: [
 *     MyApp,
 *     HomePage
 *   ],
 *   imports: [
 *     BrowserModule,
 *     IonicModule.forRoot(MyApp, {
 *
 *     })
 *   ],
 *   bootstrap: [IonicApp],
 *   entryComponents: [
 *     MyApp,
 *     HomePage
 *   ],
 *   providers: []
 * })
 * export class AppModule {}
 * ```
 */
let IonicModule = IonicModule_1 = class IonicModule {
    /**
     * Set the root app component for you IonicModule
     * @param {any} appRoot The root AppComponent for this app.
     * @param {any} config Config Options for the app. Accepts any config property.
     * @param {any} deepLinkConfig Any configuration needed for the Ionic Deeplinker.
     */
    static forRoot(appRoot, config = null, deepLinkConfig = null) {
        return {
            ngModule: IonicModule_1,
            providers: [
                // useValue: bootstrap values
                { provide: app_root_1.AppRootToken, useValue: appRoot },
                { provide: config_1.ConfigToken, useValue: config },
                { provide: url_serializer_1.DeepLinkConfigToken, useValue: deepLinkConfig },
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                // useFactory: user values
                { provide: platform_registry_1.PlatformConfigToken, useFactory: platform_registry_1.providePlatformConfigs },
                // useFactory: ionic core providers
                { provide: platform_1.Platform, useFactory: platform_1.setupPlatform, deps: [platform_browser_1.DOCUMENT, platform_registry_1.PlatformConfigToken, core_1.NgZone] },
                { provide: config_1.Config, useFactory: config_1.setupConfig, deps: [config_1.ConfigToken, platform_1.Platform] },
                // useFactory: ionic app initializers
                { provide: core_1.APP_INITIALIZER, useFactory: mode_registry_1.registerModeConfigs, deps: [config_1.Config], multi: true },
                { provide: core_1.APP_INITIALIZER, useFactory: events_1.setupProvideEvents, deps: [platform_1.Platform, dom_controller_1.DomController], multi: true },
                { provide: core_1.APP_INITIALIZER, useFactory: tap_click_1.setupTapClick, deps: [config_1.Config, platform_1.Platform, dom_controller_1.DomController, app_1.App, gesture_controller_1.GestureController], multi: true },
                { provide: core_1.APP_INITIALIZER, useFactory: module_loader_1.setupPreloading, deps: [config_1.Config, url_serializer_1.DeepLinkConfigToken, module_loader_1.ModuleLoader, core_1.NgZone], multi: true },
                // useClass
                { provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: gesture_config_1.IonicGestureConfig },
                // useValue
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: appRoot, multi: true },
                // ionic providers
                action_sheet_controller_1.ActionSheetController,
                alert_controller_1.AlertController,
                app_1.App,
                dom_controller_1.DomController,
                events_1.Events,
                form_1.Form,
                gesture_controller_1.GestureController,
                haptic_1.Haptic,
                keyboard_1.Keyboard,
                loading_controller_1.LoadingController,
                common_1.Location,
                menu_controller_1.MenuController,
                modal_controller_1.ModalController,
                ng_module_loader_1.NgModuleLoader,
                picker_controller_1.PickerController,
                popover_controller_1.PopoverController,
                tap_click_1.TapClick,
                toast_controller_1.ToastController,
                transition_controller_1.TransitionController,
                { provide: module_loader_1.ModuleLoader, useFactory: module_loader_1.provideModuleLoader, deps: [ng_module_loader_1.NgModuleLoader, core_1.Injector] },
                { provide: common_1.LocationStrategy, useFactory: provideLocationStrategy, deps: [common_1.PlatformLocation, [new core_1.Inject(common_1.APP_BASE_HREF), new core_1.Optional()], config_1.Config] },
                { provide: url_serializer_1.UrlSerializer, useFactory: url_serializer_1.setupUrlSerializer, deps: [app_1.App, url_serializer_1.DeepLinkConfigToken] },
                { provide: deep_linker_1.DeepLinker, useFactory: deep_linker_1.setupDeepLinker, deps: [app_1.App, url_serializer_1.UrlSerializer, common_1.Location, module_loader_1.ModuleLoader, core_1.ComponentFactoryResolver] },
            ]
        };
    }
};
IonicModule = IonicModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            action_sheet_component_1.ActionSheetCmp,
            alert_component_1.AlertCmp,
            click_block_1.ClickBlock,
            app_root_2.IonicApp,
            overlay_portal_1.OverlayPortal,
            avatar_1.Avatar,
            backdrop_1.Backdrop,
            badge_1.Badge,
            button_1.Button,
            card_1.Card,
            card_content_1.CardContent,
            card_header_1.CardHeader,
            card_title_1.CardTitle,
            checkbox_1.Checkbox,
            chip_1.Chip,
            col_1.Col,
            content_1.Content,
            datetime_1.DateTime,
            fab_1.FabButton,
            fab_container_1.FabContainer,
            fab_list_1.FabList,
            grid_1.Grid,
            img_1.Img,
            icon_1.Icon,
            infinite_scroll_1.InfiniteScroll,
            infinite_scroll_content_1.InfiniteScrollContent,
            item_1.Item,
            item_content_1.ItemContent,
            item_divider_1.ItemDivider,
            item_group_1.ItemGroup,
            item_options_1.ItemOptions,
            item_reorder_1.ItemReorder,
            item_sliding_1.ItemSliding,
            label_1.Label,
            list_1.List,
            list_header_1.ListHeader,
            reorder_1.Reorder,
            loading_component_1.LoadingCmp,
            menu_1.Menu,
            menu_close_1.MenuClose,
            menu_toggle_1.MenuToggle,
            modal_component_1.ModalCmp,
            nav_1.Nav,
            nav_pop_1.NavPop,
            nav_pop_anchor_1.NavPopAnchor,
            nav_push_1.NavPush,
            nav_push_anchor_1.NavPushAnchor,
            note_1.Note,
            option_1.Option,
            picker_component_1.PickerCmp,
            picker_column_1.PickerColumnCmp,
            popover_component_1.PopoverCmp,
            radio_button_1.RadioButton,
            radio_group_1.RadioGroup,
            range_1.Range,
            range_knob_1.RangeKnob,
            refresher_1.Refresher,
            refresher_content_1.RefresherContent,
            row_1.Row,
            scroll_1.Scroll,
            searchbar_1.Searchbar,
            segment_1.Segment,
            segment_button_1.SegmentButton,
            select_1.Select,
            select_popover_component_1.SelectPopover,
            show_when_1.ShowWhen,
            hide_when_1.HideWhen,
            slide_1.Slide,
            slides_1.Slides,
            spinner_1.Spinner,
            split_pane_1.SplitPane,
            tab_1.Tab,
            tab_button_1.TabButton,
            tab_highlight_1.TabHighlight,
            tabs_1.Tabs,
            input_1.TextInput,
            thumbnail_1.Thumbnail,
            toast_component_1.ToastCmp,
            toggle_1.Toggle,
            toolbar_footer_1.Footer,
            toolbar_header_1.Header,
            toolbar_1.Toolbar,
            toolbar_item_1.ToolbarItem,
            toolbar_title_1.ToolbarTitle,
            navbar_1.Navbar,
            typography_1.Typography,
            virtual_footer_1.VirtualFooter,
            virtual_header_1.VirtualHeader,
            virtual_item_1.VirtualItem,
            virtual_scroll_1.VirtualScroll
        ],
        imports: [
            common_2.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        exports: [
            common_2.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            action_sheet_component_1.ActionSheetCmp,
            alert_component_1.AlertCmp,
            click_block_1.ClickBlock,
            app_root_2.IonicApp,
            overlay_portal_1.OverlayPortal,
            avatar_1.Avatar,
            backdrop_1.Backdrop,
            badge_1.Badge,
            button_1.Button,
            card_1.Card,
            card_content_1.CardContent,
            card_header_1.CardHeader,
            card_title_1.CardTitle,
            checkbox_1.Checkbox,
            chip_1.Chip,
            col_1.Col,
            content_1.Content,
            datetime_1.DateTime,
            fab_1.FabButton,
            fab_container_1.FabContainer,
            fab_list_1.FabList,
            grid_1.Grid,
            img_1.Img,
            icon_1.Icon,
            infinite_scroll_1.InfiniteScroll,
            infinite_scroll_content_1.InfiniteScrollContent,
            item_1.Item,
            item_content_1.ItemContent,
            item_divider_1.ItemDivider,
            item_group_1.ItemGroup,
            item_options_1.ItemOptions,
            item_reorder_1.ItemReorder,
            item_sliding_1.ItemSliding,
            label_1.Label,
            list_1.List,
            list_header_1.ListHeader,
            reorder_1.Reorder,
            loading_component_1.LoadingCmp,
            menu_1.Menu,
            menu_close_1.MenuClose,
            menu_toggle_1.MenuToggle,
            modal_component_1.ModalCmp,
            nav_1.Nav,
            nav_pop_1.NavPop,
            nav_pop_anchor_1.NavPopAnchor,
            nav_push_1.NavPush,
            nav_push_anchor_1.NavPushAnchor,
            note_1.Note,
            option_1.Option,
            picker_component_1.PickerCmp,
            picker_column_1.PickerColumnCmp,
            popover_component_1.PopoverCmp,
            radio_button_1.RadioButton,
            radio_group_1.RadioGroup,
            range_1.Range,
            range_knob_1.RangeKnob,
            refresher_1.Refresher,
            refresher_content_1.RefresherContent,
            row_1.Row,
            scroll_1.Scroll,
            searchbar_1.Searchbar,
            segment_1.Segment,
            segment_button_1.SegmentButton,
            select_1.Select,
            select_popover_component_1.SelectPopover,
            show_when_1.ShowWhen,
            hide_when_1.HideWhen,
            slide_1.Slide,
            slides_1.Slides,
            spinner_1.Spinner,
            split_pane_1.SplitPane,
            tab_1.Tab,
            tab_button_1.TabButton,
            tab_highlight_1.TabHighlight,
            tabs_1.Tabs,
            input_1.TextInput,
            thumbnail_1.Thumbnail,
            toast_component_1.ToastCmp,
            toggle_1.Toggle,
            toolbar_footer_1.Footer,
            toolbar_header_1.Header,
            toolbar_1.Toolbar,
            toolbar_item_1.ToolbarItem,
            toolbar_title_1.ToolbarTitle,
            navbar_1.Navbar,
            typography_1.Typography,
            virtual_footer_1.VirtualFooter,
            virtual_header_1.VirtualHeader,
            virtual_item_1.VirtualItem,
            virtual_scroll_1.VirtualScroll
        ],
        entryComponents: [
            action_sheet_component_1.ActionSheetCmp,
            alert_component_1.AlertCmp,
            app_root_2.IonicApp,
            loading_component_1.LoadingCmp,
            modal_component_1.ModalCmp,
            picker_component_1.PickerCmp,
            popover_component_1.PopoverCmp,
            select_popover_component_1.SelectPopover,
            toast_component_1.ToastCmp
        ]
    })
], IonicModule);
exports.IonicModule = IonicModule;
/**
 * @name IonicPageModule
 * @description
 * IonicPageModule is an [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html) that
 * bootstraps a child [IonicPage](../navigation/IonicPage/) in order to set up routing.
 *
 * @usage
 * ```ts
 * import { NgModule } from '@angular/core';
 *
 * import { IonicPageModule } from 'ionic-angular';
 *
 * import { HomePage } from './home';
 *
 * @NgModule({
 * 	declarations: [
 * 		HomePage
 * 	],
 * 	imports: [
 * 		IonicPageModule.forChild(HomePage)
 * 	],
 * 	entryComponents: [
 * 		HomePage
 * 	]
 * })
 * export class HomePageModule { }
 * ```
 */
let IonicPageModule = IonicPageModule_1 = class IonicPageModule {
    static forChild(page) {
        return {
            ngModule: IonicPageModule_1,
            providers: [
                { provide: module_loader_1.LAZY_LOADED_TOKEN, useValue: page },
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: page, multi: true },
            ]
        };
    }
};
IonicPageModule = IonicPageModule_1 = __decorate([
    core_1.NgModule({
        imports: [IonicModule],
        exports: [IonicModule]
    })
], IonicPageModule);
exports.IonicPageModule = IonicPageModule;
/**
 * @hidden
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, config) {
    return config.get('locationStrategy') === 'path' ?
        new common_1.PathLocationStrategy(platformLocationStrategy, baseHref) :
        new common_1.HashLocationStrategy(platformLocationStrategy, baseHref);
}
exports.provideLocationStrategy = provideLocationStrategy;
var IonicModule_1, IonicPageModule_1;
//# sourceMappingURL=module.js.map