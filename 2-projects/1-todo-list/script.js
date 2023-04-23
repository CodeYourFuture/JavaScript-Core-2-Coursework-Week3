const list = document.getElementById("todo-list");
let todos = [
  { task: "Walk the dogs", completed: false },
  { task: "Feed the cats", completed: false },
];

function populateTodoList(todos) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  todos.forEach((todo) => {
    const task = document.createElement("li");
    task.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    task.innerText = todo.task;

    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    const completedButton = document.createElement("i");
    completedButton.classList.add("fa", "fa-check");
    completedButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa", "fa-trash");
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.task !== todo.task);
      populateTodoList(todos);
    });

    span.appendChild(completedButton);
    span.appendChild(deleteButton);
    task.appendChild(span);

    if (todo.completed) {
      task.style.textDecoration = "line-through";
    }

    list.appendChild(task);
  });
}

function addNewTodo(event) {
  event.preventDefault();

  const input = document.getElementById("todoInput");
  const newTodo = { task: input.value, completed: false };
  todos.push(newTodo);

  populateTodoList(todos);
  input.value = "";
}

function deleteCompletedTodo() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

populateTodoList(todos);
