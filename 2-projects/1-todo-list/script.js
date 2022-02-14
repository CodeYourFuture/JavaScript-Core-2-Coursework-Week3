function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  /* Add event for exist todo items */
  document.querySelectorAll("i").forEach((element) => addEvent(element));

  /* Create a new button to delete completed todo items */
  let btnParent = document.querySelector("button").parentNode;
  let delCompletedBtn = document.createElement("button");
  delCompletedBtn.type = "button";
  delCompletedBtn.classList.add("btn", "btn-danger", "mb-3");
  delCompletedBtn.innerText = "Delete Completed";
  delCompletedBtn.id = "btnDelete";

  btnParent.appendChild(delCompletedBtn);

  delCompletedBtn.addEventListener("click", deleteAllCompletedTodos);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoList = document.getElementById("todo-list");
  let todoInput = document.getElementById("todoInput");

  //todos.push({ task: todoInput.value, completed: false });

  let liTodo = document.createElement("li");
  liTodo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

  liTodo.innerText = todoInput.value;
  todoList.appendChild(liTodo);

  let spanTodo = document.createElement("span");
  spanTodo.classList.add("badge", "bg-primary", "rounded-pill");
  liTodo.appendChild(spanTodo);

  let icTodo = document.createElement("i");
  icTodo.classList.add("fa", "fa-check");
  icTodo.ariaHidden = true;
  spanTodo.appendChild(icTodo);

  let itTodo = document.createElement("i");
  itTodo.classList.add("fa", "fa-trash");
  itTodo.ariaHidden = true;
  spanTodo.appendChild(itTodo);

  addEvent(icTodo);
  addEvent(itTodo);

  todoInput.value = "";
}

/* Function to add events for every todo item */
function addEvent(element) {
  if (element.classList.contains("fa-check")) {
    element.addEventListener("click", () => {
      if (element.parentNode.parentNode.classList.contains("lineThrough")) {
        element.parentNode.parentNode.classList.remove("lineThrough");
      } else {
        element.parentNode.parentNode.classList.add("lineThrough");
      }
    });
  }
  if (element.classList.contains("fa-trash")) {
    element.addEventListener("click", () => {
      element.parentNode.parentNode.remove();
    });
  }
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  document.querySelectorAll("li").forEach((todo) => {
    if (todo.classList.contains("lineThrough")) {
      todo.remove();
    }
  });
}
