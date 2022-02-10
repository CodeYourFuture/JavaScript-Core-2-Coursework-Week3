const todoList = document.getElementById("todo-list");

function populateTodoList(todos) {
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const iconCheck = document.createElement("i");
    const iconDelete = document.createElement("i");
    const span = document.createElement("span");
    todoItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    iconCheck.className = "fa fa-check";
    iconDelete.className = "fa fa-trash";
    span.className = "badge bg-primary rounded-pill";

    todoItem.innerHTML = `${todo.task}`;
    span.appendChild(iconDelete);
    span.appendChild(iconCheck);
    todoItem.appendChild(span);
    todoList.append(todoItem);

    iconCheck.addEventListener(
      "click",
      () => {
        todoItem.classList.toggle("strike");
        todoItem.completed = "true";
        console.log(todoItem.completed);
      },
      false
    );

    iconDelete.addEventListener("click", () => {
      todoList.removeChild(todoItem);
    });
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Take the dog out for a walk", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();

  let newItemInputValue = document.getElementById("todoInput").value;
  if (newItemInputValue.length > 0) {
    let newTodoObjectByUser = { task: newItemInputValue, completed: false };
    todos.push(newTodoObjectByUser);
    let newTodo = [newTodoObjectByUser];
    populateTodoList(newTodo);
    document.getElementById("todoInput").value = "";
  }
}

function deleteAllCompletedTodos(event) {
  event.preventDefault();

  const todoItem = document.querySelectorAll("li");

  todoItem.forEach((checkedItem) => {
    if (checkedItem.completed) todoList.removeChild(checkedItem);
  });
}
