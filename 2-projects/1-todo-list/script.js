function populateTodoList(todos) {
  let toDolist = document.querySelector(".list-group");

  toDolist.innerHTML = "To Do List";

  let list = document.createElement("li");
  todos.forEach((listItem) => appendToDo(listItem));

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

function appendToDo(listItem) {
  let toDolist = document.querySelector(".list-group");
  console.log(listItem.task);
  let item = listItem.task;
  listItem = document.createElement("li");
  listItem.innerHTML = item;
  const completedBtn = document.createElement("button");
  completedBtn.innerText = "Completed";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  listItem.append(completedBtn, deleteBtn);
  toDolist.append(listItem);
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
  let inputField = document.getElementById("todoInput");
  appendToDo({ task: inputField.value, completed: false });
  console.log("button");
}
let toDoBtn = document.getElementById("add-btn");
toDoBtn.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
