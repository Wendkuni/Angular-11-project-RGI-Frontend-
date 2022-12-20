"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePageComponent = void 0;
var core_1 = require("@angular/core");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(token) {
        this.token = token;
        this.panelOpenState = false;
        this.isAct = false;
        this.user = token.getUser();
        if (token.getUser().roles[0].name === 'ROLE_APPLICATIF') {
            this.isAct = true;
        }
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.yourToken = this.token.getToken();
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-HomePage',
            templateUrl: './HomePage.component.html',
            styleUrls: ['./HomePage.component.css']
        })
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
