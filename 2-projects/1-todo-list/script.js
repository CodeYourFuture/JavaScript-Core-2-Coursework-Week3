function populateTodoList(todos) {
  for (let tod of todos) {

  let list = document.getElementById("todo-list");
  let listItem = document.createElement("li");
  list.appendChild(listItem);

  let listText = document.createElement("p");
  listText.innerText = tod.task;
  listText.style.backgroundColor = "white";
  listItem.appendChild(listText);

  let completedButton = document.createElement("button");
  completedButton.innerText = "completed";
  listItem.appendChild(completedButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  listItem.appendChild(deleteButton);
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
 function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let newInput = document.querySelector("#todoInput");
  
  todos.push({task: newInput.value, completed: false});
  // populateTodoList(todos);
  
  let list = document.getElementById("todo-list");
  let listItem = document.createElement("li");
  list.appendChild(listItem);

  let listText = document.createElement("p");
  listText.innerText = newInput.value;
  listText.style.backgroundColor = "white";
  listItem.appendChild(listText);

  let completedButton = document.createElement("button");
  completedButton.innerText = "completed";
  listItem.appendChild(completedButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  listItem.appendChild(deleteButton);

  document.querySelector("#todoInput").value = "";

  }

  document.querySelector("#addbtn").addEventListener("click", addNewTodo);

  // Write your code here... and remember to reset the input field to be blank after creating a todo!


// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter(todo => !todo.completed);
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

populateTodoList(todos);
}
document.querySelector("#remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
