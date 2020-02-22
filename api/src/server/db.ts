import TodoList from "../models/todo-list";

const todoLists: TodoList[] = new Array<TodoList>();

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
const db = {
  todoLists
};

export default db;