// fx
import express from "express";

// app
import todoListClient from "./todo-lists";
import todoItemClient from "./todo-items";

export default function(app: express.Application) {
  todoListClient(app);
  todoItemClient(app);
}
