function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }

  todos.forEach((todo) => {
    let task = document.createElement("li");
    task.innerHTML = todo.task;
    list.appendChild(task);
    task.className = "list-group-item d-flex justify-content-between align-items-center";

    let addToDoButton = document.querySelector(".add");
    addToDoButton.addEventListener("click", addNewTodo);

    let completedButton = document.createElement("i");
    completedButton.className = "fa fa-check btn btn-success";
    completedButton.addEventListener("click", checkCompeletedTodo);

    let deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash btn btn-danger";
    deleteButton.addEventListener("click", removeTodo);

    let removeCompletedButton = document.querySelector("#remove-all-completed");
    removeCompletedButton.addEventListener("click", deleteAllCompletedTodos);

    let span = document.createElement("span");
    span.className = "badge bg-light rounded-pill";

    span.appendChild(completedButton);
    span.appendChild(deleteButton);

    task.appendChild(span);
  });
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
  let input = document.querySelector("#todoInput").value;
  todos.push({ task: input, completed: false });
  populateTodoList(todos);
  input.value = "";
}

function checkCompeletedTodo() {
  let task = this.parentNode.parentNode;
  task.classList.toggle("completed");
  let index = Array.from(task.parentNode.children).indexOf(task);
  todos[index].completed = !todos[index].completed;
}

function removeTodo() {
  let task = this.parentNode.parentNode;
  let index = Array.from(task.parentNode.children).indexOf(task);
  todos.splice(index, 1);
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let completedTodos = document.querySelectorAll(".completed");
  completedTodos.forEach((todo) => {
    todo.remove();
  });
}
