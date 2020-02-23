import TodoItem from "../models/todo-item";

// can be provided by environment variables
const baseUrl = "http://localhost:8000";

const todoItemsClient = {
  get: async (listId: number): Promise<TodoItem[]> => {
    var requestOptions = {
      method: "GET"
    };

    return await fetch(`${baseUrl}/todo-items/${listId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(error => console.log("error", error));
  },
  post: (todoItem: TodoItem) => {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");

    var json = JSON.stringify(todoItem);

    var requestOptions = {
      method: "POST",
      headers: requestHeaders,
      body: json
    };

    fetch(`${baseUrl}/todo-items`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  },
  put: async (todoItem: TodoItem): Promise<void> => {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");

    var json = JSON.stringify(todoItem);
    console.log(json);
    var requestOptions = {
      method: "PUT",
      headers: requestHeaders,
      body: json
    };

    await fetch(`${baseUrl}/todo-items/${todoItem.id}`, requestOptions)      
      .catch(error => console.log("error", error));
  }
};

export default todoItemsClient;
