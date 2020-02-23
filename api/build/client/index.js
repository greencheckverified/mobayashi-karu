"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app
var todo_lists_1 = __importDefault(require("./todo-lists"));
var todo_items_1 = __importDefault(require("./todo-items"));
function default_1(app) {
    todo_lists_1.default(app);
    todo_items_1.default(app);
}
exports.default = default_1;
