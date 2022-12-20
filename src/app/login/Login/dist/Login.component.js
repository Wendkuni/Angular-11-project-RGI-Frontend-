"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var Inscription_component_1 = require("./../Inscription/Inscription.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogMat, login, fromBulder, token, snackBar, route) {
        this.dialogMat = dialogMat;
        this.login = login;
        this.fromBulder = fromBulder;
        this.token = token;
        this.snackBar = snackBar;
        this.route = route;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.init();
        this.token.signOut();
    };
    LoginComponent.prototype.init = function () {
        this.user = this.fromBulder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.Onsubmit = function () {
        var _this = this;
        this.login.login(this.user.value).subscribe(function (data) {
            _this.token.saveToken(data.accessToken);
            _this.usr = _this.token.getUser();
            _this.login.findUtilisateurById(data.id).subscribe(function (userC) {
                _this.token.saveUser(userC);
            });
            _this.snackBar.open("Connecte au systeme", 'OK', {
                duration: 5000,
                horizontalPosition: _this.horizontalPosition,
                verticalPosition: _this.verticalPosition
            });
            _this.setMenu(_this.user.get('username').value);
        }, function (err) {
            if (err.status > 399) {
                _this.snackBar.open("Erreur d'authentification ", 'OK', {
                    duration: 5000,
                    horizontalPosition: _this.horizontalPosition,
                    verticalPosition: _this.verticalPosition
                });
            }
        });
    };
    LoginComponent.prototype.register = function () {
        var mat = this.dialogMat.open(Inscription_component_1.InscriptionComponent, { width: '750px', data: {}, disableClose: true });
        mat.afterClosed().subscribe(function () {
        });
    };
    LoginComponent.prototype.setMenu = function (user) {
        var _this = this;
        this.login.getMenu(user).subscribe(function (data) {
            var menu = data;
            _this.token.setMenu(data);
            _this.route.navigate(['/Home/Acceuil']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-Login',
            templateUrl: './Login.component.html',
            styleUrls: ['./Login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
