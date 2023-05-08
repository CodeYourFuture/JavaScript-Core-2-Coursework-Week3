function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; //Clear existing todos in the list 

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = todo.task;

    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-outline-success float-end";
    completeBtn.innerText = "Complete";
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("text-decoration-line-through");
      todo.completed = !todo.completed;
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger float-end me-2";
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [];

populateTodoList(todos);

let addToDoButton = document.getElementById("addButton");
addToDoButton.addEventListener("click", addNewTodo);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let inputFiled = document.getElementById("todoInput");
  let inputValue = inputFiled.value.trim();

  if (inputValue !== "") {
    let addNewTodo = { task: inputValue, completed: false };
    todos.push(addNewTodo);
    inputFiled.value = "";
    populateTodoList(todos);
  }
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  for (let i = todos.length - 1; i >= 0; i--) {
    let todo = todos[i];
    let li = document.querySelectorAll(".list-group-item")[i];
    if (todo.completed) {
      todos.splice(i, 1);
      li.remove();
    }
  }
}
