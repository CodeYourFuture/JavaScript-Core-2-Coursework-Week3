function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((todo) => {
    const li = createDOMListItem(todo);
    list.appendChild(li);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
function toggleIsComplete(todo) {
  todo.completed = !todo.completed;
}

function redrawTodo(li, isComplete) {
  if (isComplete) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = null;
  }
}

function deleteTodo(li) {
  document.querySelector("ul").removeChild(li);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function createDOMListItem(todo) {
  const li = document.createElement("li");

  const tickIcon = document.createElement("i");
  tickIcon.classList.add("fa", "fa-check");
  const binIcon = document.createElement("i");
  binIcon.classList.add("fa", "fa-trash");

  if (!tickIcon.onclick) {
    tickIcon.addEventListener("click", () => {
      toggleIsComplete(todo);
      redrawTodo(li, todo.completed);
    });
  }
  if (!binIcon.onclick) {
    binIcon.addEventListener("click", () => deleteTodo(li));
  }
  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  li.innerText = todo.task;
  li.appendChild(tickIcon);
  li.appendChild(binIcon);
  return li;
}

function appendTodo(todo) {
  let list = document.getElementById("todo-list");
  const li = createDOMListItem(todo);
  list.appendChild(li);
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();

  const { value: task } = document.querySelector("#todoInput");
  appendTodo({ task, completed: false });
}



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  e.preventDefault();
  const list = document.querySelector("ul");
  const completedTodos = [...document.querySelectorAll("li")].filter((todo) => {
    return todo.style.textDecoration === "line-through";
  });

  completedTodos.forEach((todo) => {
    list.removeChild(todo);
  });
}
