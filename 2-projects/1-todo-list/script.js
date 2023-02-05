 
 function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  for (let todo of todos){
    let li = document.createElement("li");
    li.innerText = todo.task;
    li.classList.add("list-group-item");
    let span = document.createElement("span");
    span.classList.add = ("badge", "bg-primary", "rounded-pill");
    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.addEventListener("click", function(){
      li.classList.toggle("completed");
    });
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", function(){
      li.remove();
    });
    span.appendChild(checkIcon);
    span.appendChild(trashIcon);
    li.appendChild(span);
    list.appendChild(li);
  }
  }
  


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Spend for each item for a £ pound :)", completed: false},
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.getElementById("todo-input");
  let task = (event);
  if (!task) return;
  let todo = {task: task, completed: false};
  todos.push(todo);
  populateTodoList([todo]);
  input.value = "";
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list");
  let completedTodos = list.getElementsByClassName("completed");
  while(completedTodos.length > 0) {
    completedTodos[0].remove();
  }
}


 

