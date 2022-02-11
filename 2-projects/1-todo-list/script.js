function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  for(let todo of todos){
  // create list li
  let createLi= document.createElement('li')
  createLi.className = 'list-group-item d-flex justify-content-between align-items-center'
  createLi.innerText = todo.task
  list.appendChild(createLi)
  //span in list 
  let createSpan = document.createElement('span')
  createSpan.className = "badge bg-primary rounded-pill"
  createLi.appendChild(createSpan)
  // done and delete i buttons
  let doneBtn = document.createElement('i')
  doneBtn.className = 'fa fa-check'
  doneBtn.setAttribute('aria-hidden', 'true')
  let deleteBtn = document.createElement('i')
  deleteBtn.className = 'fa fa-trash'
  deleteBtn.setAttribute('aria-hidden', 'true')
  createSpan.appendChild(doneBtn)
  createSpan.appendChild(deleteBtn)

  doneBtn.addEventListener('click', function(){
    if(createLi.style.textDecoration === 'line-through'){
      createLi.style.textDecoration = 'none'
    } else { createLi.style.textDecoration = 'line-through'}
  })
  deleteBtn.addEventListener('click', function(){
    createLi.remove()
  })
  
}
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Finish This Course", completed: false}
];

populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  
  
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
 
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}
addNewTodo('play games')
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
