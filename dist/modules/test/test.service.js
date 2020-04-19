"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.welcomeMessage = function (req, res) {
        return res.status(200).send("Welcome to RestApi by Ron-Okami");
    };
    return TestService;
}());
exports.TestService = TestService;
