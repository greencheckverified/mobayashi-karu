import { todoList } from "../models/todoList";

export const todoLists: todoList[] = new Array<todoList>();
todoLists.push({
  id: 1,
  title: "First List",
  items: [
    {
      id: 1,
      category: "Empty",
      description: "A new item",
      isComplete: false,
      listId: 1
    }
  ]
});
