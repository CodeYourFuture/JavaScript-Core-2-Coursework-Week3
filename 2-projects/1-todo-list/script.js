let input = document.getElementById("todoInput");

// function saveTodos(todo) {
//   let obj = Object.assign({ task: todo, completed: false });
//   todos.push(obj);
// }

function populateTodoList(value) {
  let list = document.getElementById("todo-list");
  let li = document.createElement("li");
  let span = document.createElement("span");
  let iCheck = document.createElement("i");
  let iDelete = document.createElement("i");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  span.classList.add("badge", "bg-primary", "rounded-pill");
  iCheck.classList.add("fa", "fa-check", "me-2");
  iDelete.classList.add("fa", "fa-trash");
  iCheck.setAttribute("aria-hidden", "true");
  iDelete.setAttribute("aria-hidden", "true");
  li.textContent = value;
  iDelete.addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove();
  });
  iCheck.addEventListener("click", function (e) {
    li.style.textDecoration = "line-through";
    console.log(window.getComputedStyle(e.target).textDecoration);
  });
  list.appendChild(li);
  li.appendChild(span);
  span.appendChild(iCheck);
  span.appendChild(iDelete);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
console.log(todos);
let form = document.getElementById("todo-form");
form.addEventListener("submit", addNewTodo);

function addNewTodo(e) {
  e.preventDefault();
  if (!input.value) {
    return;
  } else {
    let obj = Object.assign({
      task: input.value,
      completed: window.getComputedStyle(e.target).textDecoration
        ? true
        : false,
    });
    todos.push(obj);
  }
  populateTodoList(input.value);
  input.value = "";
}

// function removeTodo(todo) {
//   // var todos = getTodos()
//   var newTodos = todos.filter(function (el) {
//     return el !== todo;
//   });
//   saveTodos(newTodos);

//   // saveTodos(getTodos().filter(el => el !== todo))
// }
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
const del = document.getElementById("del");

function deleteAllCompletedTodos() {
  todos.forEach((element) => {});
}
del.addEventListener("click", deleteAllCompletedTodos);
