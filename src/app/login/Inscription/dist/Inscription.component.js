"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InscriptionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Infos_component_1 = require("./Infos/Infos.component");
var InscriptionComponent = /** @class */ (function () {
    function InscriptionComponent(_formBuilder, snackbar, dialogMat, services, route) {
        this._formBuilder = _formBuilder;
        this.snackbar = snackbar;
        this.dialogMat = dialogMat;
        this.services = services;
        this.route = route;
        this.isEditable = false;
        this.isTerritoire = false;
        this.region = [];
        this.province = [];
        this.commune = [];
        this.hide = true;
        this.hideC = true;
    }
    InscriptionComponent.prototype.ngOnInit = function () {
        this.secondFormGroup = this._formBuilder.group({
            nom: ['', forms_1.Validators.required],
            prenom: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            telephone: ['', forms_1.Validators.required],
            pays: ['', forms_1.Validators.required],
            ville: ['', forms_1.Validators.required],
            emailP: ['', [forms_1.Validators.required, forms_1.Validators.email]]
        });
        this.firstFormGroup = this._formBuilder.group({
            typeStructure: ['', [forms_1.Validators.required]],
            nomStructure: ['', forms_1.Validators.required],
            codePostal: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            siteWeb: ['', forms_1.Validators.required],
            contact: ['', forms_1.Validators.required],
            appName: null,
            description: null
        });
    };
    InscriptionComponent.prototype.openSubmitSnackbar = function () {
        var _this = this;
        var structure = {
            "appName": this.firstFormGroup.get('appName').value,
            "codePostal": this.firstFormGroup.get('codePostal').value,
            "contact": this.firstFormGroup.get('contact').value,
            "description": this.firstFormGroup.get('description').value,
            "email": this.firstFormGroup.get('email').value,
            "emailP": this.secondFormGroup.get('emailP').value,
            "nom": this.secondFormGroup.get('nom').value,
            "nomStructure": this.firstFormGroup.get('nomStructure').value,
            "pays": this.secondFormGroup.get('pays').value,
            "prenom": this.secondFormGroup.get('prenom').value,
            "role": "APPLICATIF",
            "siteWeb": this.firstFormGroup.get('siteWeb').value,
            "telephone": this.secondFormGroup.get('telephone').value,
            "territoire": "",
            "typeStructure": this.firstFormGroup.get('typeStructure').value,
            "username": this.secondFormGroup.get('userName').value,
            "ville": this.secondFormGroup.get('ville').value
        };
        console.log(structure);
        this.services.createStructure(structure).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            if (err.status < 399) {
                var dialogRef = _this.dialogMat.open(Infos_component_1.InfosComponent, {
                    width: '600px',
                    disableClose: true
                });
            }
            else {
                _this.snackbar.open(err.error, 'ok', { duration: 10000 });
            }
        });
    };
    InscriptionComponent.prototype.resetClic = function () {
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
    };
    InscriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-Inscription',
            templateUrl: './Inscription.component.html',
            styleUrls: ['./Inscription.component.css']
        })
    ], InscriptionComponent);
    return InscriptionComponent;
}());
exports.InscriptionComponent = InscriptionComponent;
