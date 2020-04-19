"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_service_1 = require("./test.service");
var test_validation_1 = require("./test.validation");
var TestController = /** @class */ (function () {
    function TestController(app) {
        this.app = app;
        this.testService = new test_service_1.TestService();
        this.testvalidation = new test_validation_1.TestValidation();
        this.routes();
    }
    TestController.prototype.routes = function () {
        this.app.route('/').get(this.testvalidation.createTestValidation, this.testService.welcomeMessage);
    };
    return TestController;
}());
exports.TestController = TestController;
