import express from "express";
import db from "../server/db";

export default function(app: express.Application) {
  // get all todo lists
  app.get("/todo-lists", (req, res) => {
    res.send(JSON.stringify(db.todoLists));
  });

  // create a new todo list
  // req.body: 
  // {
  //    "title": ""
  // }
  app.post("/todo-lists", (req, res) => {
    res.json(req.body);

    const list = req.body;
    list.id = db.todoLists.length + 1;

    db.todoLists.push(list);

    res.send(list.id);
  });

  // update an existing todo list
  // req.body: 
  // {
  //    "title": ""
  // }
  app.put("/todo-lists/:listId", (req, res) => {
    const list = db.todoLists.find(l => {
      return l.id == parseInt(req.params.listId);
    });

    if (list) {
      list.title = req.body.title;
    }

    res.sendStatus(200);
  });
}
