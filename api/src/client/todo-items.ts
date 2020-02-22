// fx
import express from "express";

// app
import TodoItem from "../models/todo-item";
import db from "../server/db";

export default function(app: express.Application) {
  // get todo items for a specific list
  app.get("/todo-items/:listId", (req, res) => {
    const list = db.todoLists.find(l => {
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
  app.post("/todo-items", (req, res) => {
    const list = db.todoLists.find(l => {
      return l.id === req.body.listId;
    });

    if (!list) {
      res.sendStatus(404);
      return;
    }

    const item: TodoItem = {
      id: list.items.length + 1,
      category: req.body.category,
      description: req.body.description,
      isComplete: req.body.isComplete,
      listId: req.body.listId
    };

    list.items.push(item);

    res.send({itemId: item.id});
  });

  // update an existing todo item
  // req.body:
  // {  
  //    "category": "",
  //    "description": "",
  //    "isComplete": false,
  //    "listId": 0
  // }
  app.put("/todo-items/:itemId", (req, res) => {
    const list = db.todoLists.find(l => {
      return l.id === req.body.listId;
    });

    if (!list) {
      res.sendStatus(404);
      return;
    }

    const item = list.items.find(i => {
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
