function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  // const iEl =
  document.querySelectorAll("i").forEach((el) => {
    if (el.classList.contains("fa-check")) {
      el.addEventListener("click", checkedToDo);
    } else if (el.classList.contains("fa-trash")) {
      el.addEventListener("click", deleteToDo);
    }
  });
}

function todoAdded(text) {
  let ulEl = document.querySelector("ul");
  let liEl = document.createElement("li");
  liEl.innerText = text;
  liEl.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  let spanEl = document.createElement("span");
  spanEl.classList.add("badge", "bg-primary", "rounded-pill");
  let iElCheck = document.createElement("i");
  iElCheck.classList.add("fa", "fa-check");
  let iElTrash = document.createElement("i");
  iElTrash.classList.add("fa", "fa-trash");
  ulEl.appendChild(liEl);
  liEl.appendChild(spanEl);
  spanEl.append(iElCheck);
  iElCheck.addEventListener("click", checkedToDo);
  spanEl.append(iElTrash);
  iElTrash.addEventListener("click", deleteToDo);
}
function checkedToDo(event) {
  let iElCheckNew = event.target;
  iElCheckNew.parentNode.parentNode.style.textDecoration =
    iElCheckNew.parentNode.parentNode.style.textDecoration === "none"
      ? "line-through"
      : "none";
}
function deleteToDo(event) {
  let iElDeleteNew = event.target;
  iElDeleteNew.parentNode.parentNode.remove();
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
  let todoInput = document.querySelector("#todoInput");
  todoAdded(todoInput.value);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
