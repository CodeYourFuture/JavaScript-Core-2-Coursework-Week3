function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (const todo of todos) {
    let newTask = document.createElement("li");

    newTask.innerText = todo.task;
    newTask.classList.add("todo-text");

    list.appendChild(newTask);
  }

  // My todo list:
  // Get input and add to the todos object array
  // event listener on button
  // when button clicked, take input text, create new li, add input text to li, append li to ul
}

let addToDoButton = document.querySelector("#addToDo");
addToDoButton.addEventListener("click", addNewTask);

function addNewTask(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let myList = document.getElementById("todo-list");
  // Target the input text box
  let inputText = document.querySelector("#todoInput").value;

  let myNewTask = document.createElement("li");

  myNewTask.innerText = inputText;

  myNewTask.classList.add("todo-text");

  // could use append for multiple elements
  myList.appendChild(myNewTask);

  // clear input box
  document.querySelector("#todoInput").value = "";
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
