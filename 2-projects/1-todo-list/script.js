function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for ( let todo of todos ) {
    createTodoElem(todo.task, list);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function createTodoElem (taskText, parent){
  let li = document.createElement('li');
  li.innerText = taskText;
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

  //create icons to remove and delete list items and add it to li
  let container = document.createElement('span');
  container.classList.add("badge", "bg-primary", "rounded-pill");
  let removeIcon = document.createElement('i');
  removeIcon.classList.add("fa", "fa-check");
  removeIcon.ariaHidden = "true";
  removeIcon.addEventListener('click', function (){
    let parentLi = this.closest('li');
    if(parentLi.classList.contains('completed')) {
      parentLi.classList.remove('completed');
    } else {
      parentLi.classList.add('completed');
    }
  });
  let deleteIcon = document.createElement('i');
  deleteIcon.classList.add("fa", "fa-trash");
  deleteIcon.ariaHidden = "true";
  deleteIcon.addEventListener('click', function (){
    let parentLi = this.closest('li');
    let parentLiText = parentLi.innerText;
    if(parentLi){
      parent.removeChild(parentLi);
      todos = todos.filter(todo => todo.task !== parentLiText);
    }
  });
  container.appendChild(removeIcon);
  container.appendChild(deleteIcon);
  li.appendChild(container);
  parent.appendChild(li);
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInput = document.querySelector('#todoInput');
  if(todoInput.value) {
    todos.push({task: todoInput.value, completed: false});
    let list = document.getElementById("todo-list");
    createTodoElem(todoInput.value, list);
    todoInput.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter(todo => todo.completed === false);
  let list = document.getElementById("todo-list");
  const completedTasks = list.querySelectorAll('li.completed');
  completedTasks.forEach(function(task) {
    task.remove();
  });
}

let addButton = document.querySelector('#add-item-btn');
addButton.addEventListener('click', addNewTodo);
let deleteAllButton = document.querySelector('#remove-all-completed');
deleteAllButton.addEventListener('click', deleteAllCompletedTodos);
