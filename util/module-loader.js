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
const ng_module_loader_1 = require("./ng-module-loader");
const util_1 = require("./util");
exports.LAZY_LOADED_TOKEN = new core_1.OpaqueToken('LZYCMP');
/**
 * @hidden
 */
let ModuleLoader = class ModuleLoader {
    constructor(_ngModuleLoader, _injector) {
        this._ngModuleLoader = _ngModuleLoader;
        this._injector = _injector;
        /** @internal */
        this._cfrMap = new Map();
        this._promiseMap = new Map();
    }
    load(modulePath) {
        console.time(`ModuleLoader, load: ${modulePath}'`);
        const splitString = modulePath.split(SPLITTER);
        let promise = this._promiseMap.get(modulePath);
        if (!promise) {
            promise = this._ngModuleLoader.load(splitString[0], splitString[1]);
            this._promiseMap.set(modulePath, promise);
        }
        return promise.then(loadedModule => {
            console.timeEnd(`ModuleLoader, load: ${modulePath}'`);
            const ref = loadedModule.create(this._injector);
            const component = ref.injector.get(exports.LAZY_LOADED_TOKEN);
            this._cfrMap.set(component, ref.componentFactoryResolver);
            return {
                componentFactoryResolver: ref.componentFactoryResolver,
                component: component
            };
        });
    }
    getComponentFactoryResolver(component) {
        return this._cfrMap.get(component);
    }
};
ModuleLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_module_loader_1.NgModuleLoader,
        core_1.Injector])
], ModuleLoader);
exports.ModuleLoader = ModuleLoader;
const SPLITTER = '#';
/**
 * @hidden
 */
function provideModuleLoader(ngModuleLoader, injector) {
    return new ModuleLoader(ngModuleLoader, injector);
}
exports.provideModuleLoader = provideModuleLoader;
/**
 * @hidden
 */
function setupPreloadingImplementation(config, deepLinkConfig, moduleLoader) {
    if (!deepLinkConfig || !deepLinkConfig.links || !config.getBoolean('preloadModules')) {
        return Promise.resolve();
    }
    const linksToLoad = deepLinkConfig.links.filter(link => !!link.loadChildren && link.priority !== 'off');
    // Load the high priority modules first
    const highPriorityPromises = linksToLoad
        .filter(link => link.priority === 'high')
        .map(link => moduleLoader.load(link.loadChildren));
    return Promise.all(highPriorityPromises).then(() => {
        // Load the low priority modules after the high priority are done
        const lowPriorityPromises = linksToLoad
            .filter(link => link.priority === 'low')
            .map(link => moduleLoader.load(link.loadChildren));
        return Promise.all(lowPriorityPromises);
    }).catch(err => {
        console.error(err.message);
    });
}
exports.setupPreloadingImplementation = setupPreloadingImplementation;
/**
 * @hidden
 */
function setupPreloading(config, deepLinkConfig, moduleLoader, ngZone) {
    return function () {
        util_1.requestIonicCallback(() => {
            ngZone.runOutsideAngular(() => {
                setupPreloadingImplementation(config, deepLinkConfig, moduleLoader);
            });
        });
    };
}
exports.setupPreloading = setupPreloading;
//# sourceMappingURL=module-loader.js.map