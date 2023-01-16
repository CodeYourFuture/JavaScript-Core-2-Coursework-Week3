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

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((todo) => {
    const li = createDOMListItem(todo);
    list.appendChild(li);
  });
}

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

function addNewTodo(event) {
  event.preventDefault();

  const { value: task } = document.querySelector("#todoInput");
  appendTodo({ task, completed: false });
}

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

const button = document.querySelector(".btn");
button.addEventListener("click", addNewTodo);
document
  .querySelector("#remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
