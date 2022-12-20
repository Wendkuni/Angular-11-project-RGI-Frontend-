"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgetPasswordComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(formBuilder, service, route, snackBar) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.route = route;
        this.snackBar = snackBar;
        this.code = false;
        this.showSpinner = false;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ForgetPasswordComponent.prototype.init = function () {
        this.usernameMail = this.formBuilder.group({
            emailOrUsername: [null, forms_1.Validators.required]
        });
        this.codeValidator = this.formBuilder.group({
            code: [null, forms_1.Validators.required]
        });
    };
    ForgetPasswordComponent.prototype.fermer = function () {
        this.route.navigate(['/']);
    };
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.code) {
            this.code = true;
            this.service.forgetPassword(this.usernameMail.value).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
                _this.spinnerService = false;
            });
        }
        else {
            this.service.sendPassword(this.codeValidator.get('code').value).subscribe(function () { }, function (err) {
                console.log(err);
                _this.spinnerService = false;
                _this.snackBar.open('Votre Password a été modifier avec success', 'OK', {
                    duration: 5000,
                    horizontalPosition: _this.horizontalPosition,
                    verticalPosition: _this.verticalPosition
                });
                _this.route.navigate(['/']);
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-ForgetPassword',
            templateUrl: './ForgetPassword.component.html',
            styleUrls: ['./ForgetPassword.component.css']
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;
