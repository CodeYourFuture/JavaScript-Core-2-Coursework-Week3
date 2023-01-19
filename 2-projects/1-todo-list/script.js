// function populateTodoList(todos) {
// let list = document.getElementById("todo-list");
// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

function toggleIsComplete(todo) {
  todo.completed = !todo.completed;
}

function greenRawTodo(li, isComplete) {
  if (isComplete) {
    li.style.textDecoration = "line-through";
    li.style.color = "red";
  } else {
    li.style.textDecoration = null;
    li.style.color = "black";
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
// Add an event listener to the delete button
function PopulateTodoList(todo) {
  const li = document.getElementById("todo-list");
  todo.forEach((todo) => {
    const li = createDOMListItem(todo);
    list.appendChild(li);
  });
}

function createDOMListItem(todo) {
  const li = document.createElement("li");
  const tickIcon = document.createElement("i");
  tickIcon.classList.add("fa", "fa-check");

  const binIcon = document.createElement("i");
  binIcon.classList.add("fa", "fa-trash");

  if (!tickIcon.onclick) {
    tickIcon.addEventListener("click", () => {
      toggleIsComplete(todo);
      greenRawTodo(li, todo.completed);
    });
  }
  if (!binIcon.onclick) {
    binIcon.addEventListener("click", () => deleteTodo(li));
  }

  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  if (todo.task.length < 1) {
    return alert("The box can not be empty!");
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
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const { value: task } = document.querySelector("#todoInput");
  appendTodo({ task, completed: false });
  document.querySelector("#todoInput").value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(element) {
  element.preventDefault();
  const list = document.querySelector("ul");
  const completedTodos = [...document.querySelectorAll("li")].filter((todo) => {
    return todo.style.textDecoration === "line-through";
  });

  completedTodos.forEach((todo) => {
    list.removeChild(todo);
  });
  // Write your code here...
  const button = document.querySelector(".btn");
  button.addEventListener("click", addNewTodo);

  document
    .querySelector("#remove-all-completed")
    .addEventListener("click", deleteAllCompletedTodo);
}
