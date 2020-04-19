"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var constants_1 = require("./utils/constants");
var test_controller_1 = require("./modules/test/test.controller");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.setConfig();
        this.setMongoConfig();
        this.testController = new test_controller_1.TestController(this.app);
    }
    App.prototype.setConfig = function () {
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors_1.default({ credentials: true, origin: true }));
    };
    App.prototype.setMongoConfig = function () {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(constants_1.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }).then(function () {
            return console.log("Successfully connected to Database");
        }).catch(function (error) {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    };
    return App;
}());
exports.default = new App().app;
