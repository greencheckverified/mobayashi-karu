import todoListClient from "./todo-list";
import todoItemClient from "./todo-items";

const client = {
  todoLists: todoListClient,
  todoItems: todoItemClient
};

export default client;
