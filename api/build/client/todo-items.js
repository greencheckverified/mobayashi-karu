"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../server/db"));
function default_1(app) {
    // get todo items for a specific list
    app.get("/todo-items/:listId", function (req, res) {
        var list = db_1.default.todoLists.find(function (l) {
            return l.id === parseInt(req.params.listId);
        });
        if (!list) {
            res.sendStatus(404);
            return;
        }
        res.send(list.items);
    });
    // create a new todo item
    // req.body:
    // {
    //    "category": "",
    //    "description": "",
    //    "isComplete": false,
    //    "listId": 0
    // }
    app.post("/todo-items", function (req, res) {
        var list = db_1.default.todoLists.find(function (l) {
            return l.id === req.body.listId;
        });
        if (!list) {
            res.sendStatus(404);
            return;
        }
        var item = {
            id: list.items.length + 1,
            category: req.body.category,
            description: req.body.description,
            isComplete: req.body.isComplete,
            listId: req.body.listId
        };
        list.items.push(item);
        res.send({ itemId: item.id });
    });
    // update an existing todo item
    // req.body:
    // {  
    //    "category": "",
    //    "description": "",
    //    "isComplete": false,
    //    "listId": 0
    // }
    app.put("/todo-items/:itemId", function (req, res) {
        var list = db_1.default.todoLists.find(function (l) {
            return l.id === req.body.listId;
        });
        if (!list) {
            res.sendStatus(404);
            return;
        }
        var item = list.items.find(function (i) {
            return i.id === parseInt(req.params.itemId);
        });
        if (!item) {
            res.sendStatus(404);
            return;
        }
        item.category = req.body.category;
        item.description = req.body.description;
        item.isComplete = req.body.isComplete;
        res.sendStatus(200);
    });
}
exports.default = default_1;
