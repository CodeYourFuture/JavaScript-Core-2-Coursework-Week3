function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = todo.task; 
    todoItem.classList.add("list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center");
    let span = document.createElement("span");
    span.classList.add("badge", 
    "bg-primary",
    "rounded-pill");
    let check = document.createElement("i");
    check.classList.add("fa", "fa-check");
    let trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash");
    trash.style.marginLeft = "15px";
    span.appendChild(check);
    span.appendChild(trash);
    todoItem.appendChild(span);
    list.appendChild(todoItem);

        check.addEventListener("click", () => {
      if (todoItem.style.textDecoration === "") {
        todo.completed = true;
        todoItem.style.textDecoration = 'line-through';
      } else {
        todo.completed = false;
        todoItem.style.textDecoration = "";
      }
    });

    trash.addEventListener("click", () => {
      list.removeChild(todoItem);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

