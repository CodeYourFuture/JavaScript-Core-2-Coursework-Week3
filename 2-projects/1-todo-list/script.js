function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }

  todos.forEach((todo) => {
    let element = createToDoElement(todo);
    console.log(todo);
    list.appendChild(element);
  });
}

function createToDoElement(todo) {
  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";

  let completedButton = document.createElement("i");
  completedButton.className = "fa fa-check";
  completedButton.onclick = function () {
    todos.forEach((findTodo) => {
      if (findTodo.task === todo.task) {
        findTodo.completed = !findTodo.completed;
      }

      populateTodoList(todos);
    });
  };

  let deleteButton = document.createElement("i");
  deleteButton.className = "fa fa-trash";
  deleteButton.onclick = function () {
    todos = todos.filter((findTodo) => {
      return findTodo.task !== todo.task;
    });

    populateTodoList(todos);
  };

  span.appendChild(completedButton);
  span.appendChild(deleteButton);

  let task = document.createElement("li");
  task.className =
    "list-group-item d-flex justify-content-between align-items-center";
  task.innerText = todo.task;
  task.appendChild(span);

  if (todo.completed) {
    task.style = "text-decoration: line-through;";
  }

  let div = document.createElement("div");
  div.appendChild(task);

  return div;
}

// These are the same todos that currently display in the HTML
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let input = document.getElementById("todoInput");
  let newTodo = input.value;
  todos.push({ task: newTodo, completed: false });
  populateTodoList(todos);
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
