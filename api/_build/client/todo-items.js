"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../server/db");
function default_1(app) {
    app.get("/todo-items/:listId", function (req, res) {
        res.send("todo item here");
    });
    app.post("/todo-items/:listId", function (req, res) {
        var item = {
            category: req.body.category,
            description: req.body.description,
            isComplete: req.body.isComplete,
            listId: parseInt(req.params.listId)
        };
        var list = db_1.todoLists.find(function (l) {
            return l.id == item.listId;
        });
        if (list) {
            list.items.push(item);
        }
        res.send({ item: item });
    });
}
exports.default = default_1;
