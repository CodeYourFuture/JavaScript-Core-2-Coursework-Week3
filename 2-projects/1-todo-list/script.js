function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }

} 

todos.forEach((todo) => {
  let element = createToDoElement(todo);
  list.appendChild(element);
});

function createToDoElement(todo) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";
  completedButton.setAttribute("aria-hidden", "true");
  completedButton.onclick = function () {
    toggleCompleted(todo);
  };

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";
  deleteButton.setAttribute("aria-hidden", "true");
  deleteButton.onclick = function () {
    deleteTodoElement(todo);
  };

  span.appendChild(completedButton);
  span.appendChild(deleteButton);

  let task = document.createElement("li");
  task.className =
    "list-group-item d-flex justify-content-between align-items-center";
  task.innerText = todo.task;
  task.appendChild(span);

  if (todo.completed) {
    task.style.textDecoration = "line-through";
  }

  return task;
}

function toggleCompleted(todo) {
  todo.completed = !todo.completed;
  populateTodoList(todos);
}

function deleteTodoElement(todo) {
  todos = todos.filter((item) => item !== todo);
  populateTodoList(todos);
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {

  event.preventDefault();

  let input = document.getElementById("todoInput");
  let newTodo = input.value.trim();

  if (newTodo !== "") {
    todos.push({ task: newTodo, completed: false });
    populateTodoList(todos);
    input.value = "";
  }
}


function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}