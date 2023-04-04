function populateTodoList(todos) {
  // Access to the list div
  let list = document.getElementById("todo-list");
  // Add class to list
  list.classList = "todo-list-sec";
  // Remove all list before recreating
  list.textContent = "";
  // Loop throug to our todos
  todos.forEach((todo) => {
    // Create li tag
    const li = document.createElement("li");
    // Add class to li
    li.classList = "todo-li-sec";
    // Add content to li
    li.innerHTML = `
      ${todo.task} 
      <span class="badge bg-primary rounded-pill" style="float:right">
      <span class="complete" style="display:none">${todo.completed}</span>
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    `;
    //Append li to the list
    list.appendChild(li);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);

// Access to the input
const input = document.querySelector("#todoInput"),
  // Access to the add button
  addBtn = document.querySelector(".btn-primary"),
  // Access to the list
  list = document.querySelector("#todo-list"),
  // Access to the remove all completed
  removeAllLiCompletedBtn = document.querySelector("#remove-all-completed");

eventliateners();
function eventliateners() {
  // Adding new todo to list
  addBtn.addEventListener("click", addNewTodo);
  // Cotrol the behaviour of checked assign
  list.addEventListener("click", controlCheckedAssign);
  // Remove li from list section
  list.addEventListener("click", removeLiFromList);
  // clear all completed todos from list
  removeAllLiCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
}

// Adding new todo to list
function addNewTodo(event) {
  event.preventDefault();
  // Create empty object
  const todo = {};
  // Add properties to object
  todo["task"] = input.value;
  todo["completed"] = false;
  // Add new todo to todos list
  todos.push(todo);
  // Populate and show todos
  populateTodoList(todos);
  // Reset input
  input.value = "";
}

// // Cotrol the behaviour of checked assign
function controlCheckedAssign(e) {
  // Delegation for accessing the checked's span
  if (e.target.classList.contains("fa-check")) {
    // Reach to spans's li
    const li = e.target.parentElement.parentElement;
    if (e.target.previousElementSibling.textContent === "false") {
      // If completed is false line-through to li
      li.style.textDecoration = "line-through";
      // Change the completed value into span
      e.target.previousElementSibling.textContent = "true";
    } else {
      // for the second time click remove line-through
      li.style.textDecoration = "none";
      // Change the completed value  to false into span
      e.target.previousElementSibling.textContent = "false";
    }
  }
}
// Remove li from list section
function removeLiFromList(e) {
  // Delegate to rech to span of trash
  if (e.target.classList.contains("fa-trash")) {
    // Accsess to it's li
    const li = e.target.parentElement.parentElement;
    // Remove li
    li.remove();
  }
}

// clear all completed todos from list
function deleteAllCompletedTodos(e) {
  e.preventDefault();
  // Access to all lis
  const lis = document.querySelectorAll(".todo-li-sec");
  // loop through to nodeList
  lis.forEach((li) => {
    // Find todos that has completed
    if (li.firstElementChild.firstElementChild.textContent === "true") {
      // remove li
      li.remove();
    }
  });
}
