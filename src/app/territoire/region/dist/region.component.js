"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegionComponent = void 0;
var core_1 = require("@angular/core");
var ajouter_component_1 = require("./ajouter/ajouter.component");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var Supprimer_component_1 = require("./Supprimer/Supprimer.component");
var RegionComponent = /** @class */ (function () {
    function RegionComponent(service, dialogMat, snackBar, token) {
        this.service = service;
        this.dialogMat = dialogMat;
        this.snackBar = snackBar;
        this.token = token;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.isMatds = false;
        this.displayedColumns = ['id', 'code', 'libelle', 'cheflieu'];
        this.listRegion = [];
        this.dataSource = new table_1.MatTableDataSource(this.listRegion);
        this.rechercheGeneral = '';
        this.getData();
        if (token.getUser().roles[0].name === 'ROLE_MATDS') {
            this.isMatds = true;
            this.displayedColumns = ['id', 'code', 'libelle', 'cheflieu', 'option'];
        }
    }
    RegionComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    RegionComponent.prototype.getData = function () {
        var _this = this;
        this.listRegion = [];
        this.service.getAllRegion().subscribe(function (data) {
            _this.listRegion = data;
            _this.dataSource = new table_1.MatTableDataSource(_this.listRegion);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    RegionComponent.prototype.edit = function (value) {
        var _this = this;
        var dialogRef = this.dialogMat.open(ajouter_component_1.AjouterComponent, {
            width: '350px',
            data: { region: value },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getData();
        });
    };
    RegionComponent.prototype["delete"] = function (value) {
        var _this = this;
        var dialogRef = this.dialogMat.open(Supprimer_component_1.SupprimerComponent, {
            width: '350px',
            data: { region: value },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
        });
    };
    RegionComponent.prototype.addRegion = function () {
        var _this = this;
        var mat = this.dialogMat.open(ajouter_component_1.AjouterComponent, { width: '350px', data: {}, disableClose: true });
        mat.afterClosed().subscribe(function () {
            _this.ngOnInit();
        });
    };
    RegionComponent.prototype.annulerRechercheGeneral = function () {
        this.rechercheGeneral = '';
        this.recherche();
    };
    RegionComponent.prototype.recherche = function () {
        this.dataSource.filter = this.rechercheGeneral.trim().toLowerCase();
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], RegionComponent.prototype, "paginator");
    RegionComponent = __decorate([
        core_1.Component({
            selector: 'app-region',
            templateUrl: './region.component.html',
            styleUrls: ['./region.component.css']
        })
    ], RegionComponent);
    return RegionComponent;
}());
exports.RegionComponent = RegionComponent;
