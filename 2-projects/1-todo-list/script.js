function populateTodoList(todos) {
  let ulElement = document.getElementById("todo-list");
  for(x of todos){
    let todoElement = document.createElement("li");
    todoElement.classList.add("list-group-item");
    todoElement.classList.add("d-flex");
    todoElement.classList.add("justify-content-between");
    todoElement.classList.add("align-items-center"); 
    todoElement.innerText = x.task; 
    if( x.completed ){
      todoElement.style.textDecoration = "line-through";
    }
  
    let spanElement = document.createElement("span");
    spanElement.classList.add("badge");
    spanElement.classList.add("bg-primary");
    spanElement.classList.add("rounded-pill");

  
    let iCheck = document.createElement("i");
    iCheck.classList.add("fa");
    iCheck.classList.add("fa-check");

    let iTrash = document.createElement("i");
    iTrash.classList.add("fa");
    iTrash.classList.add("fa-trash");        
  

    spanElement.appendChild(iCheck);
    spanElement.appendChild(iTrash);
    todoElement.appendChild(spanElement);  
      
    ulElement.appendChild(todoElement);
  } 
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false }, 
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  
  let valueInput = document.querySelector('#todoInput').value;

  let todoElement = document.createElement("li");
    todoElement.classList.add("list-group-item");
    todoElement.classList.add("d-flex");
    todoElement.classList.add("justify-content-between");
    todoElement.classList.add("align-items-center"); 
    todoElement.innerText = valueInput;  
  
    let spanElement = document.createElement("span");
    spanElement.classList.add("badge");
    spanElement.classList.add("bg-primary");
    spanElement.classList.add("rounded-pill");

  
    let iCheck = document.createElement("i");
    iCheck.classList.add("fa");
    iCheck.classList.add("fa-check");

    let iTrash = document.createElement("i");
    iTrash.classList.add("fa");
    iTrash.classList.add("fa-trash");        
  

    spanElement.appendChild(iCheck);
    spanElement.appendChild(iTrash);
    todoElement.appendChild(spanElement); 

    document.getElementById("todo-list").appendChild(todoElement);
    actionProcess(); 
}



function actionProcess() {
    
  let checks = document.querySelectorAll('.fa-check');
  for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener("click", function(e) {
      e.currentTarget.parentElement.parentElement.style.textDecoration = "line-through";  
    });
  }

  let trashes = document.querySelectorAll('.fa-trash');
  for (let i = 0; i < trashes.length; i++) {
    trashes[i].addEventListener("click", function(e) {
      e.currentTarget.parentElement.parentElement.remove();
    });
  }

} 
actionProcess();


function deleteAllCompletedTodos(event){
  event.preventDefault();

  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i++) {
    if( list[i].getAttribute("style") && list[i].getAttribute("style").indexOf("text-decoration:") != -1 ){
      list[i].remove();
    }
  }

  
}