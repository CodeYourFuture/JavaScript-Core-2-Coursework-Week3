function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  for(let i = 0 ; i < todos.length;i++){
    //loop in the todtask array
    let todoTask = document.createElement("li"); // create li tage
    let liTask = document.createElement("li"); // create li tage
    let liTask2 = document.createElement("li"); // create li tage
    let span = document.createElement("span"); // create span tage
    todoTask.className = "list-group-item d-flex justify-content-between align-items-center"; // set calss name to task
    span.className = "badge bg-primary rounded-pill";
    liTask.className = "fa fa-check";// set calss name to check 
    liTask2.className = "fa fa-trash"; // set classe name to trash 
    liTask2.addEventListener("click",function dele(){
        list.removeChild(todoTask) // delete the task 
    })
    liTask.addEventListener("click", function aligne(){
      todoTask.style.textDecorationLine = "line-through";  //line-through  to task like done   
    })
    todoTask.innerText = todos[i].task; // display task 
    todoTask.appendChild(span);//  set span child to todoTask 
    span.appendChild(liTask); // set check task child to span tag
    span.appendChild(liTask2);// set trash task child to span tag
    list.appendChild(todoTask);// set todotask child to man list tag  
  }
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Ahmed", completed: false },
  { task: "Haroon", completed: false },
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  let input = document.querySelector("#todoInput");// select input tag by ID
 if(input.value == ""){ // if empty 
  alert ("please enter your Task ")// this  aleart massge 
 }else{
  populateTodoList([{ task: input.value, completed: false }]);// add new to do task in the list
 }

  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}
populateTodoList(todos);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {

}
