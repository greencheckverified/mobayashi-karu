"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoLists = new Array();
todoLists.push({
    id: 1,
    title: "First List",
    items: [
        {
            id: 1,
            category: "none",
            description: "A new item",
            isComplete: false,
            listId: 1
        }
    ]
});
// in memory storage
var db = {
    todoLists: todoLists
};
exports.default = db;
