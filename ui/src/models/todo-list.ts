import TodoItem from "./todo-item";

export default interface TodoList {
    id: number;
    title: string;
    items: TodoItem[];
}