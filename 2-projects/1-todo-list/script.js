function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  todos.forEach((e, i) => {
    let liTag = document.createElement("li");
    liTag.id = "id" + i;
    liTag.innerText = e.task;
    liTag.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(liTag);

    let spanTag = document.createElement("span");
    spanTag.classList = "badge bg-primary rounded-pill";
    liTag.appendChild(spanTag);

    if (e.completed) {
      liTag.style.textDecoration = "line-through";
    }

    let iTagCheck = document.createElement("i");
    iTagCheck.classList = "fa fa-check";
    iTagCheck.ariaHidden = false;
    iTagCheck.id = "id" + i + "i";
    spanTag.appendChild(iTagCheck);

    let iTagById = document.getElementById("id" + i + "i");
    iTagById.addEventListener("click", () => {
      e.completed = !e.completed;
      populateTodoList(todos);
    });

    let iTagtrash = document.createElement("i");
    iTagtrash.classList = "fa fa-trash";
    iTagtrash.ariaHidden = false;
    iTagtrash.id = "id" + i + "delete";
    spanTag.appendChild(iTagtrash);

    let iTagDelete = document.getElementById("id" + i + "delete");
    iTagDelete.addEventListener("click", () => {
      todos.splice(i, 1);
      populateTodoList(todos);
    });
  });
}
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);

function addNewTodo(e) {
  e.preventDefault();
  let input = document.querySelector("#todoInput");

  todos.push({ task: input.value, completed: false });

  populateTodoList(todos);
  input.value = "";
}

function deleteAllCompletedTodos(e) {
  e.preventDefault();
  todos = todos.filter((v) => !v.completed);
  populateTodoList(todos);
}
