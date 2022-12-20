"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.authMatdsService = void 0;
var core_1 = require("@angular/core");
var authMatdsService = /** @class */ (function () {
    function authMatdsService(token, route) {
        this.token = token;
        this.route = route;
    }
    authMatdsService.prototype.canActivate = function (route, state
    // tslint:disable-next-line: ban-types
    ) {
        if (this.token.getUser().roles[0].name === 'ROLE_MATDS') {
            return true;
        }
        else {
            this.route.navigate(['/Error/400']);
        }
    };
    authMatdsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
        // tslint:disable-next-line: class-name
    ], authMatdsService);
    return authMatdsService;
}());
exports.authMatdsService = authMatdsService;
