function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, 
  // all todos should display inside the "todo-list" element.
  
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos); 

// This function will take the value of the input field and add it 
// as a new todo to the bottom of the todo list. These new todos will need the 
// completed and delete buttons adding like normal.
const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById('todoButton')
const todoList = document.getElementById("todo-list");

todoButton.addEventListener("click", addNewTodo)

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const div = document.createElement('div')
  div.classList.add('todo')
  const li = document.createElement('li')
  li.innerText = todoInput.value;
  div.appendChild(li)

  const completeButton = document.createElement('button')
  completeButton.innerHTML = '<i class = "fa fa-check"></i>'
  div.appendChild(completeButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class = "fa fa-trash"></i>'
  div.appendChild(deleteButton)
  
  todoList.appendChild(div)

  todoInput.value = "";
}



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones 
// (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
