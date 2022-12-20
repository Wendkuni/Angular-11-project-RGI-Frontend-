"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var CompteUser_component_1 = require("./pages/CompteUser/CompteUser.component");
var HomePage_component_1 = require("./pages/HomePage/HomePage.component");
var MenuGestion_component_1 = require("./MenuGestion/MenuGestion.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Auth_service_1 = require("./canActivator/Auth.service");
var routes = [
    {
        path: 'Home',
        canActivate: [Auth_service_1.AuthService],
        component: MenuGestion_component_1.MenuGestionComponent,
        children: [
            {
                path: 'Acceuil',
                component: HomePage_component_1.HomePageComponent,
                data: {
                    title: 'Acceuil'
                }
            },
            {
                path: 'CompteUtilisateur',
                component: CompteUser_component_1.CompteUserComponent,
                data: {
                    title: 'Les compte de la Structure'
                }
            },
            {
                path: 'Region',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./territoire/region/region.module'); }).then(function (m) { return m.RegionModule; }); },
                data: {
                    title: 'Région'
                }
            },
            {
                path: 'Province',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./territoire/province/province.module'); }).then(function (m) { return m.ProvinceModule; }); },
                data: {
                    title: 'Province'
                }
            },
            {
                path: 'Arrondissement',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./territoire/arrondissement/arrondissement.module'); }).then(function (m) { return m.ArrondissementModule; }); },
                data: {
                    title: 'Arrondissement'
                }
            },
            {
                path: 'Commune',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./territoire/commune/commune.module'); }).then(function (m) { return m.CommuneModule; }); },
                data: {
                    title: 'Commune'
                }
            },
            {
                path: 'Localite',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./territoire/localite/localite/localite.module'); }).then(function (m) { return m.LocaliteModule; }); },
                data: {
                    title: 'Localite'
                }
            },
            {
                path: 'Profile',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./gestionProfile/gestionProfile.module'); }).then(function (m) { return m.GestionProfileModule; }); },
                data: {
                    title: 'Profile'
                }
            },
            {
                path: 'Compte',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./GestionUtilisateur/GestionUtilisateur.module'); }).then(function (m) { return m.GestionUtilisateurModule; }); },
                data: {
                    title: 'Gestion de Compte'
                }
            },
        ]
    },
    {
        path: 'Login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginModule; }); },
        data: {
            title: 'Login'
        }
    },
    {
        path: 'Error',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./ErrorGestion/ErrorGestion.module'); }).then(function (m) { return m.ErrorGestionModule; }); },
        data: {
            title: 'Error'
        }
    },
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: '**', redirectTo: 'Error/400', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
