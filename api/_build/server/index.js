"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// fx
var express_1 = __importDefault(require("express"));
// app
var client_1 = __importDefault(require("../client"));
var port = 8000;
var app = express_1.default();
app.use(express_1.default.json());
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
client_1.default(app);
