"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../server/db"));
function default_1(app) {
    // get all todo lists
    app.get("/todo-lists", function (req, res) {
        res.send(JSON.stringify(db_1.default.todoLists));
    });
    // create a new todo list
    // req.body: 
    // {
    //    "title": ""
    // }
    app.post("/todo-lists", function (req, res) {
        res.json(req.body);
        var list = req.body;
        list.id = db_1.default.todoLists.length + 1;
        db_1.default.todoLists.push(list);
        res.send(list.id);
    });
    // update an existing todo list
    // req.body: 
    // {
    //    "title": ""
    // }
    app.put("/todo-lists/:listId", function (req, res) {
        var list = db_1.default.todoLists.find(function (l) {
            return l.id == parseInt(req.params.listId);
        });
        if (list) {
            list.title = req.body.title;
        }
        res.sendStatus(200);
    });
}
exports.default = default_1;
