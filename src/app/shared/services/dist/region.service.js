"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegionService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("./../../../environments/environment");
var RegionService = /** @class */ (function () {
    function RegionService(http) {
        this.http = http;
        this.API = environment_1.environment;
    }
    RegionService.prototype.getAllRegion = function () {
        return this.http.get(this.API.REGION_API);
    };
    RegionService.prototype.addRegion = function (region) {
        return this.http.post(this.API.REGION_API, region);
    };
    RegionService.prototype.updateRegion = function (region) {
        return this.http.put("" + this.API.REGION_API + region.id, region);
    };
    RegionService.prototype.deleteRegion = function (id) {
        return this.http["delete"]("" + this.API.REGION_API + id);
    };
    RegionService.prototype.getRegionByLibelle = function (libelle) {
        return this.http.get(this.API.REGION_API + "?libelle=" + libelle);
    };
    RegionService.prototype.getRegionById = function (id) {
        return this.http.get("" + this.API.REGION_API + id);
    };
    RegionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RegionService);
    return RegionService;
}());
exports.RegionService = RegionService;
