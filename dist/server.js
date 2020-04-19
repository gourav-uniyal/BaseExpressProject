"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var constants_1 = require("./utils/constants");
app_1.default.listen(constants_1.PORT, function () {
    console.log('Example app listening on port ' + constants_1.PORT + ' !');
});
