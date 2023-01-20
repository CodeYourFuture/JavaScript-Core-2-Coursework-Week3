function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  for (let todo of todos) {
    let el = document.createElement("li");
    el.className =
      "list-group-item d-flex justify-content-between align-items-center";
    el.innerText = todo.task;
    list.appendChild(el);

    let spanEl = document.createElement("span");
    el.appendChild(spanEl);

    let check = document.createElement("i");
    check.className = "fa fa-check";
    check.addEventListener("click", () => {
      el.style.textDecoration === "line-through"
        ? (el.style.textDecoration = "")
        : (el.style.textDecoration = "line-through");
    });
    spanEl.appendChild(check);

    let deleteEl = document.createElement("i");
    deleteEl.className = "fa fa-trash";
    deleteEl.addEventListener("click", () => list.removeChild(el));
    spanEl.appendChild(deleteEl);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

let addButton = document.querySelector(".btn");
addButton.addEventListener("click", addNewTodo);

function addNewTodo(event) {
  event.preventDefault();

  let input = document.getElementById("todoInput");
  populateTodoList([{ task: input.value, completed: false }]);
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();

  let li = document.querySelectorAll("li");
  let list = document.getElementById("todo-list");
  for (let el of li) {
    if (el.style.textDecoration === "line-through") {
      list.removeChild(el);
    }
  }
  // Write your code here...
}
let removeCompletedTasksBtn = document.querySelector("#remove-all-completed");
removeCompletedTasksBtn.addEventListener("click", deleteAllCompletedTodos);
