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

function addNewTodo(event) {
  event.preventDefault();
}

function deleteAllCompletedTodos() {}
