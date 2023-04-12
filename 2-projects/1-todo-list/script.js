function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.classList = "todo-list-sec";
  list.textContent = "";
  for(let todo of todos){
    let liElement = document.createElement("li");
    liElement.classList = "todo-li-sec";
    liElement.innerHTML = `
    ${todo.task}
    <span class="badge bg-primary rounded-pill" style = "float:right">
    <span class="complete" style="display:none">${todo.completed}</span>
     <i class="fa fa-check" aria-hidden="true"></i>
     <i class="fa fa-trash" aria-hidden="true"></i>
     </span> `;
    list.appendChild(liElement);
  }
}








// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);



//variables
const addBtn = document.querySelector(".btn-primary");
const list = document.querySelector("#todo-list");
const clearList = document.querySelector("#remove-all-completed");
//eventListeners
addBtn.addEventListener("click", addNewTodo);
list.addEventListener("click", controlComplited);
list.addEventListener("click", controlDeleted);
clearList.addEventListener("click", deleteAllCompletedTodos);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.


function addNewTodo(event) {
  
  event.preventDefault();
  
 const todo = {};
 let input = document.querySelector("#todoInput");
 todo.task = input.value;
 todo.completed = false;
 todos.push(todo);
 populateTodoList(todos);
 input.value = "";

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

function controlComplited(event){
if(event.target.classList.contains("fa-check")){
  const li = event.target.parentElement.parentElement;
 if(event.target.previousElementSibling.textContent  === "false"){
li.style.textDecoration = "line-through";
event.target.previousElementSibling.textContent = "true";
 }else{
  li.style.textDecoration = "";
  event.target.previousElementSibling.textContent = "false";
 }  
}
}

function controlDeleted(event){
if(event.target.classList.contains("fa-trash")){
  const li = event.target.parentElement.parentElement;
li.remove();
}
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  const allLi = document.querySelectorAll(".todo-li-sec");

 for(const li of allLi){
 
  if (li.firstElementChild.firstElementChild.textContent === "true") {
    li.remove();
  }
 }
  
}
