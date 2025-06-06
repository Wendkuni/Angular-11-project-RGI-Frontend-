"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginRoutingModule = void 0;
var ForgetPassword_component_1 = require("./ForgetPassword/ForgetPassword.component");
var Inscription_component_1 = require("./Inscription/Inscription.component");
var core_1 = require("@angular/core");
var Login_component_1 = require("./Login/Login.component");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        component: Login_component_1.LoginComponent
    },
    {
        path: 'Inscription',
        component: Inscription_component_1.InscriptionComponent
    },
    {
        path: 'ForgetPassword',
        component: ForgetPassword_component_1.ForgetPasswordComponent
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
exports.LoginRoutingModule = LoginRoutingModule;
