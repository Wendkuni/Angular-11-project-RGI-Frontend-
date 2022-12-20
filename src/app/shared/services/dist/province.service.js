"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProvinceService = void 0;
var environment_1 = require("./../../../environments/environment");
var core_1 = require("@angular/core");
var ProvinceService = /** @class */ (function () {
    function ProvinceService(http) {
        this.http = http;
        this.API = environment_1.environment;
    }
    ProvinceService.prototype.getAllProvince = function () {
        return this.http.get(this.API.PROVINCE_API);
    };
    ProvinceService.prototype.addProvince = function (province) {
        return this.http.post(this.API.PROVINCE_API, province, { observe: 'response' });
    };
    ProvinceService.prototype.updateProvince = function (province) {
        return this.http.put("" + this.API.PROVINCE_API + province.id, province, { observe: "response" });
    };
    ProvinceService.prototype.deleteProvince = function (id) {
        return this.http["delete"]("" + this.API.PROVINCE_API + id);
    };
    ProvinceService.prototype.getAllRegion = function () {
        return this.http.get("" + this.API.REGION_API);
    };
    ProvinceService.prototype.getRegionByLibelle = function (libelle) {
        return this.http.get(this.API.REGION_API + "?libelle=" + libelle);
    };
    ProvinceService.prototype.getRegionById = function (id) {
        return this.http.get(this.API.REGION_API + "/" + id);
    };
    ProvinceService.prototype.getAllProvinceUser = function (id) {
        return this.http.get(this.API.PROVINCE_API + "userAssigne/" + id);
    };
    ProvinceService.prototype.addProvinceuser = function (province) {
        return this.http.post(this.API.PROVINCE_API + "saveProvinceFromUser", province);
    };
    ProvinceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProvinceService);
    return ProvinceService;
}());
exports.ProvinceService = ProvinceService;
