function checkItem(event) {
  console.log(this.parentElement.parentElement.parentElement);
  this.parentElement.parentElement.parentElement.classList.toggle("done-text");
}
function trashItem(event) {
  this.parentElement.parentElement.parentElement.parentElement.removeChild(
    this.parentElement.parentElement.parentElement
  );
}

function populateTodoList(item) {
  let list = document.getElementById("todo-list");
  let toDoListItem = document.createElement("li");
  toDoListItem.classList.add("bg-light", "to-do-items");
  let spanToDo = document.createElement("span");
  spanToDo.innerText = item.task + " ";
  let spanActions = document.createElement("span");
  spanActions.classList.add("badge", "bg-primary", "rounded-pill");
  let spanCheck = document.createElement("i");
  spanCheck.classList.add("fa", "fa-check");
  spanCheck.addEventListener("click", checkItem);
  spanActions.appendChild(spanCheck);
  let spanTrash = document.createElement("i");
  spanTrash.classList.add("fa", "fa-trash");
  spanTrash.addEventListener("click", trashItem);
  spanActions.appendChild(spanTrash);
  spanToDo.append(spanActions);

  toDoListItem.appendChild(spanToDo);
  list.appendChild(toDoListItem);

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

for (const preItem of todos) {
  populateTodoList(preItem);
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let todoInputText = document.getElementById("todoInput").value;
  if (todoInputText != "") {
    let aTaskObject = {};
    aTaskObject["task"] = todoInputText;
    aTaskObject["completed"] = false;
    todos.push(aTaskObject);
    populateTodoList(aTaskObject);
  }
  document.getElementById("todoInput").value = "";
}

const addBtn = document.getElementById("add-todo-item");
addBtn.addEventListener("click", addNewTodo);

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let currentItems = document.querySelectorAll(".to-do-items");
  for (const currentItem of currentItems) {
    let textSpan = currentItem.querySelector("span");
    if (textSpan.classList.contains("done-text")) {
      console.log(textSpan);
      currentItem.parentElement.removeChild(currentItem);
    }
  }
}

const deleteCompletedBtn = document.getElementById("remove-all-completed");
deleteCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
