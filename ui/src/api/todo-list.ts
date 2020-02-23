import TodoList from "../models/todo-list";

// can be provided by environment variables
const baseUrl = "http://localhost:8000";

const todoListClient = {
  get: async (): Promise<TodoList[]> => {
    var requestOptions = {
      method: "GET"
    };

    return await fetch(`${baseUrl}/todo-lists`, requestOptions)
      .then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(error => console.log("error", error));
  },
  post: (todoList: TodoList) => {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");

    var json = JSON.stringify(todoList);

    var requestOptions = {
      method: "POST",
      headers: requestHeaders,
      body: json
    };

    fetch(`${baseUrl}/todo-lists`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  },
  put: (todoList: TodoList) => {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");

    var json = JSON.stringify(todoList);

    var requestOptions = {
      method: "PUT",
      headers: requestHeaders,
      body: json
    };

    fetch(`${baseUrl}/todo-lists/${todoList.id}`, requestOptions)      
      .catch(error => console.log("error", error));
  }
};

export default todoListClient;
