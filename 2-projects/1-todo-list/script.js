const { check } = require("prettier");

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

//show the list element 
function populateTodoList(todos){
  let list = document.createElementById("todo-list");
  //create a new  li
  const task = document.createElemtent('li');
  task.innerText = todos[0].task; 'list-group-item d-flex justify-content-between align-items-clearInterval';
  task.className = 'list-group-item d-flex'

  const span = documento.createElementById('span');
  span.className = 'badge bg-primary rounded-pill';

  const check = documento.createElementById('i');
  span.className = 'fa fa-check';
  check.setAtribute('aria-hidden', 'true')

  const trash = documento.createElementById('i');
  span.className = 'fa fa-trash';
  check.setAtribute('aria-hidden', 'true')

  span.appendiChild(check);
  span.appendiChild(trash);

  task.appendChild(span)

  //show the list element  as a child of the todo list
  list.appendChild(task);
}

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
