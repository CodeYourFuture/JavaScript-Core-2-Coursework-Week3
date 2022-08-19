function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    let listEl = document.createElement("li");
    let textEl = document.createTextNode(item.task);
    listEl.appendChild(textEl);
    listEl.className =
      "list-group-item d-flex justify-content-between align-items-center";

    list.appendChild(listEl);
    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    listEl.appendChild(spanEl);
    let iCheckEl = document.createElement("i");
    iCheckEl.className = "fa fa-check";
    iCheckEl.ariaHidden = true;
    iCheckEl.addEventListener("click", deleteAllCompletedTodos);
    let iTrashEl = document.createElement("i");
    iTrashEl.className = "fa fa-trash";
    iTrashEl.ariaHidden = true;
    iTrashEl.addEventListener("click", deleteAllCompletedTodos);
    spanEl.appendChild(iCheckEl);
    spanEl.appendChild(iTrashEl);
  });
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
  let toDoObject = {
    task: "",
    completed: false,
  };
  let inputEl = document.getElementById("todoInput");
  toDoObject.task = inputEl.value;
  inputEl.value = "New todo...";

  let list = document.getElementById("todo-list");
  let listEl = document.createElement("li");
  let textEl = document.createTextNode(toDoObject.task);
  listEl.appendChild(textEl);
  listEl.className =
    "list-group-item d-flex justify-content-between align-items-center";

  list.appendChild(listEl);
  let spanEl = document.createElement("span");
  spanEl.className = "badge bg-primary rounded-pill";
  listEl.appendChild(spanEl);
  let iCheckEl = document.createElement("i");
  iCheckEl.className = "fa fa-check";
  iCheckEl.ariaHidden = true;
  iCheckEl.addEventListener("click", deleteAllCompletedTodos);
  let iTrashEl = document.createElement("i");
  iTrashEl.className = "fa fa-trash";
  iTrashEl.ariaHidden = true;
  iTrashEl.addEventListener("click", deleteAllCompletedTodos);
  spanEl.appendChild(iCheckEl);
  spanEl.appendChild(iTrashEl);
  todos.push(toDoObject);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  if (this.classList.contains("fa-check")) {
    this.parentNode.parentNode.className += " completedTask";
  }
  if (this.classList.contains("fa-trash")) {
    if (this.parentNode.parentNode.classList.contains("completedTask")) {
      this.parentNode.parentNode.remove();
    }
  }
}
