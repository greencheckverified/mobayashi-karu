import { todoItem } from "./todoItem";

export interface todoList {
  id: number;
  title: string;
  items: todoItem[];
}
