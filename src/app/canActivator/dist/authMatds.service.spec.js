"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var authMatdsService_1 = require("./authMatdsService");
describe('sevice: authMatdsService', function () {
    beforeEach((function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [authMatdsService_1.authMatdsService]
        });
    }));
    it('should ...', testing_1.inject([authMatdsService_1.authMatdsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
