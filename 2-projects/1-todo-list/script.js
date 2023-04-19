
let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todoInput");
let addTodoButton = document.querySelector(".card-body button");
let removeAllCompletedButton = document.getElementById("remove-all-completed");

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function createTodoHtml(todo) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = todo.task;
  if (todo.completed) {
    li.classList.add("completed");
    li.style.textDecoration = "line-through";
  }

  let deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-end",
    "ms-2"
  );
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.addEventListener("click", () => {
    let todoIndex = todos.indexOf(todo);
    if (todoIndex >= 0) {
      todos.splice(todoIndex, 1);
      renderTodoList();
    }
  });
  li.appendChild(deleteButton);

  let completeButton = document.createElement("button");
  completeButton.classList.add("btn", "btn-success", "btn-sm", "float-end");
  completeButton.innerHTML = '<i class="fa fa-check"></i>';
  completeButton.addEventListener("click", () => {
    todo.completed = !todo.completed;
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });
  li.appendChild(completeButton);

  return li;
}

function renderTodoList() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let todoHtml = createTodoHtml(todo);
    todoList.appendChild(todoHtml);
  }
}

function addNewTodo() {
  let task = todoInput.value.trim();
  if (task === "") {
    return;
  }
  let newTodo = {
    task,
    completed: false,
  };
  todos.push(newTodo);
  renderTodoList();
  todoInput.value = "";
}

addTodoButton.addEventListener("click", function (event) {
  event.preventDefault();
  addNewTodo();
});
removeAllCompletedButton.addEventListener("click", function (event) {
  event.preventDefault();
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
});

renderTodoList();
