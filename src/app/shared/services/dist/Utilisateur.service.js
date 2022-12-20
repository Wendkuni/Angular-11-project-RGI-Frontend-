"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UtilisateurService = void 0;
var environment_1 = require("./../../../environments/environment");
var core_1 = require("@angular/core");
var UtilisateurService = /** @class */ (function () {
    function UtilisateurService(http) {
        this.http = http;
        this.API = environment_1.environment;
    }
    UtilisateurService.prototype.getUtilisateur = function () {
        return this.http.get(this.API.UTILISATEUR_API);
    };
    UtilisateurService.prototype.activerCompte = function (id) {
        return this.http.get(this.API.UTILISATEUR_API + 'activerCompte/' + id);
    };
    UtilisateurService.prototype.desactiverCompte = function (id) {
        return this.http.get(this.API.UTILISATEUR_API + 'desactiverCompte/' + id);
    };
    UtilisateurService.prototype.getRegion = function () {
        return this.http.get(this.API.REGION_API + 'regionNonAssigner');
    };
    UtilisateurService.prototype.getProvince = function () {
        return this.http.get(this.API.PROVINCE_API + 'provinceNonAssigner');
    };
    UtilisateurService.prototype.getCommune = function () {
        return this.http.get(this.API.COMMUNE_API + 'communeNonAssigner');
    };
    UtilisateurService.prototype.createStructure = function (structure) {
        return this.http.post(this.API.UTILISATEUR_API + 'inscription', structure);
    };
    UtilisateurService.prototype.createStructureAdmin = function (structure) {
        return this.http.post(this.API.UTILISATEUR_API + 'inscriptionAdmin', structure);
    };
    UtilisateurService.prototype.supprimerUser = function (id) {
        return this.http["delete"](this.API.UTILISATEUR_API + 'supprimerCompte/' + id);
    };
    UtilisateurService.prototype.updateCompte = function (structure) {
        return this.http.put(this.API.UTILISATEUR_API + 'updateCompte', structure);
    };
    UtilisateurService.prototype.findUtilisateurById = function (id) {
        return this.http.get(this.API.UTILISATEUR_API + 'user/' + id);
    };
    UtilisateurService.prototype.getUtilisateurFromStruture = function (idUser, idStrucuture) {
        return this.http.get(this.API.UTILISATEUR_API + 'structureUser/' + idUser + '/' + idStrucuture);
    };
    UtilisateurService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UtilisateurService);
    return UtilisateurService;
}());
exports.UtilisateurService = UtilisateurService;
