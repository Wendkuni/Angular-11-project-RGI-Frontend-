"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AjouterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var AjouterComponent = /** @class */ (function () {
    function AjouterComponent(data, fb, regionService, snackBar) {
        this.data = data;
        this.fb = fb;
        this.regionService = regionService;
        this.snackBar = snackBar;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.myControl = new forms_1.FormControl();
        this.init();
    }
    AjouterComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AjouterComponent.prototype.init = function () {
        if (this.data.region) {
            this.formulaireRegion = this.fb.group({
                id: this.data.region.id,
                libelle: [this.data.region.libelle, forms_1.Validators.required],
                code: [this.data.region.code, [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                chefLieu: [this.data.region.chefLieu, forms_1.Validators.required]
            });
        }
        else {
            this.formulaireRegion = this.fb.group({
                libelle: ['', forms_1.Validators.required],
                code: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
                chefLieu: ['', forms_1.Validators.required]
            });
        }
    };
    AjouterComponent.prototype.ngOnSubmit = function () {
        var _this = this;
        if (this.data.region) {
            this.regionService.updateRegion(this.formulaireRegion.value).subscribe(function () { }, function (err) {
                if (err.status < 400) {
                    _this.snackBar.open("Region modifier avec success", 'OK', {
                        duration: 5000,
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition
                    });
                }
                else {
                    _this.snackBar.open(err.error, 'OK', {
                        duration: 5000,
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition
                    });
                }
            });
        }
        else {
            this.regionService.addRegion(this.formulaireRegion.value).subscribe(function () { }, function (err) {
                if (err.status < 400) {
                    _this.snackBar.open(" Region enregistrer avec success ", 'OK', {
                        duration: 5000,
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition
                    });
                }
                else {
                    _this.snackBar.open(err.error, 'OK', {
                        duration: 5000,
                        horizontalPosition: _this.horizontalPosition,
                        verticalPosition: _this.verticalPosition
                    });
                }
            });
        }
    };
    AjouterComponent = __decorate([
        core_1.Component({
            selector: 'app-ajouter',
            templateUrl: './ajouter.component.html',
            styleUrls: ['./ajouter.component.css']
        }),
        __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AjouterComponent);
    return AjouterComponent;
}());
exports.AjouterComponent = AjouterComponent;
