function populateTodoList(todos) {
  for (const todo of todos) {
    addOneTodo(todo);
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
function addOneTodo(todo) {
  let list = document.getElementById("todo-list");
  let todoElement = document.createElement("li");
  todoElement.innerText = todo.task;
  todoElement.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let iElementComplete = document.createElement("i");
  iElementComplete.className = "fa fa-check";
  iElementComplete.ariaHidden = "true";

  let iElementRemove = document.createElement("i");
  iElementRemove.className = "fa fa-trash";
  iElementRemove.ariaHidden = "true";

  iElementComplete.addEventListener("click", function () {
    todoElement.classList.toggle("completed");
  });

  iElementRemove.addEventListener("click", function () {
    list.removeChild(todoElement);
  });

  span.appendChild(iElementComplete);
  span.appendChild(iElementRemove);
  list.appendChild(todoElement);
  todoElement.appendChild(span);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputElement = document.querySelector("#todoInput");
  todos.push({ task: inputElement.value, completed: false });
  addOneTodo(todos.slice(-1));
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
