function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing todos in the list

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
let todos = [
  
];

 
 function addNewTodo(event) {
   event.preventDefault();
  let inputField = document.getElementById("todoInput");
  let inputValue = inputField.value.trim();

  if (inputValue !== "") {
     let newTodo = { task: inputValue, completed: false };
    todos.push(newTodo);
     inputField.value = "";
     populateTodoList(todos);
  }
}

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

populateTodoList(todos);

let addToDoButton = document.getElementById("addButton");
addToDoButton.addEventListener("click", addNewTodo);
