"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommuneService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("./../../../environments/environment");
var CommuneService = /** @class */ (function () {
    function CommuneService(http) {
        this.http = http;
        this.API = environment_1.environment;
    }
    CommuneService.prototype.getAllCommune = function () {
        return this.http.get(this.API.COMMUNE_API);
    };
    CommuneService.prototype.addCommune = function (commune) {
        return this.http.post(this.API.COMMUNE_API, commune);
    };
    CommuneService.prototype.updateCommune = function (commune) {
        return this.http.put("" + this.API.COMMUNE_API + commune.id, commune);
    };
    CommuneService.prototype.deleteCommune = function (id) {
        return this.http["delete"](this.API.COMMUNE_API + "/" + id);
    };
    CommuneService.prototype.getAllProvince = function () {
        return this.http.get("" + this.API.PROVINCE_API);
    };
    CommuneService.prototype.getProvinceByLibelle = function (libelle) {
        return this.http.get(this.API.PROVINCE_API + "?libelle=" + libelle);
    };
    CommuneService.prototype.getProvinceById = function (id) {
        return this.http.get(this.API.PROVINCE_API + "/" + id);
    };
    CommuneService.prototype.getAllCommuneUser = function (id) {
        return this.http.get(this.API.COMMUNE_API + "userAssigne/" + id);
    };
    CommuneService.prototype.addCommuneUser = function (commune) {
        return this.http.post(this.API.COMMUNE_API + "saveCommuneFromUser", commune);
    };
    CommuneService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CommuneService);
    return CommuneService;
}());
exports.CommuneService = CommuneService;
