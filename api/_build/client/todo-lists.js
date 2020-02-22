"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../server/db");
function default_1(app) {
    app.get("/todo-lists", function (req, res) {
        res.send(JSON.stringify(db_1.todoLists));
    });
    app.post("/todo-lists", function (req, res) {
        res.json(req.body);
        db_1.todoLists.push(req.body);
    });
}
exports.default = default_1;
