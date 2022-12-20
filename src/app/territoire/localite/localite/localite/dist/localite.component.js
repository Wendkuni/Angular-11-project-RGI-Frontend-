"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocaliteComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var addlocalite_component_1 = require("../addlocalite/addlocalite.component");
var deletelocalite_component_1 = require("../deletelocalite/deletelocalite.component");
var paginator_1 = require("@angular/material/paginator");
var LocaliteComponent = /** @class */ (function () {
    function LocaliteComponent(service, dialogMat, _snackBar, token) {
        this.service = service;
        this.dialogMat = dialogMat;
        this._snackBar = _snackBar;
        this.token = token;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.displayedColumns = ['id', 'code', 'libelle', 'type', 'arrondissement'];
        this.rechercheGeneral = '';
        this.isMairie = false;
        this.listLocalite = [];
        this.getData();
        if (token.getUser().roles[0].name === 'ROLE_MAIRIE' || token.getUser().roles[0].name === 'ROLE_MATDS') {
            this.isMairie = true;
            this.displayedColumns = ['id', 'code', 'libelle', 'type', 'arrondissement', 'option'];
        }
    }
    LocaliteComponent.prototype.ngOnInit = function () {
    };
    LocaliteComponent.prototype.getData = function () {
        var _this = this;
        this.listLocalite = [];
        this.service.getAllLocalite().subscribe(function (data) {
            _this.listLocalite = data;
            _this.dataSource = new table_1.MatTableDataSource(_this.listLocalite);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    LocaliteComponent.prototype.edit = function (value) {
        var _this = this;
        var dialogRef = this.dialogMat.open(addlocalite_component_1.AddlocaliteComponent, {
            width: '350px',
            data: { localite: value },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getData();
        });
    };
    LocaliteComponent.prototype["delete"] = function (value) {
        var _this = this;
        var dialogRef = this.dialogMat.open(deletelocalite_component_1.DeletelocaliteComponent, {
            width: '350px',
            data: { localite: value },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getData();
        });
    };
    LocaliteComponent.prototype.addLocalite = function () {
        var _this = this;
        var mat = this.dialogMat.open(addlocalite_component_1.AddlocaliteComponent, { width: '350px', data: {}, disableClose: true });
        mat.afterClosed().subscribe(function () {
            _this.getData();
        });
    };
    LocaliteComponent.prototype.annulerRechercheGeneral = function () {
        this.rechercheGeneral = '';
        this.recherche();
    };
    LocaliteComponent.prototype.recherche = function () {
        this.dataSource.filter = this.rechercheGeneral.trim().toLowerCase();
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], LocaliteComponent.prototype, "paginator");
    LocaliteComponent = __decorate([
        core_1.Component({
            selector: 'app-localite',
            templateUrl: './localite.component.html',
            styleUrls: ['./localite.component.css']
        })
    ], LocaliteComponent);
    return LocaliteComponent;
}());
exports.LocaliteComponent = LocaliteComponent;
