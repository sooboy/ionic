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
/**
 * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
 */
let NgModuleLoader = class NgModuleLoader {
    constructor(_compiler) {
        this._compiler = _compiler;
    }
    load(modulePath, ngModuleExport) {
        const offlineMode = this._compiler instanceof core_1.Compiler;
        return offlineMode ? loadPrecompiledFactory(modulePath, ngModuleExport) : loadAndCompile(this._compiler, modulePath, ngModuleExport);
    }
};
NgModuleLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], NgModuleLoader);
exports.NgModuleLoader = NgModuleLoader;
function loadAndCompile(compiler, modulePath, ngModuleExport) {
    if (!ngModuleExport) {
        ngModuleExport = 'default';
    }
    return System.import(modulePath)
        .then((rawModule) => {
        const module = rawModule[ngModuleExport];
        if (!module) {
            throw new Error(`Module ${modulePath} does not export ${ngModuleExport}`);
        }
        return compiler.compileModuleAsync(module);
    });
}
function loadPrecompiledFactory(modulePath, ngModuleExport) {
    return System.import(modulePath)
        .then((rawModule) => {
        const ngModuleFactory = rawModule[ngModuleExport];
        if (!ngModuleFactory) {
            throw new Error(`Module ${modulePath} does not export ${ngModuleExport}`);
        }
        return ngModuleFactory;
    });
}
//# sourceMappingURL=ng-module-loader.js.map