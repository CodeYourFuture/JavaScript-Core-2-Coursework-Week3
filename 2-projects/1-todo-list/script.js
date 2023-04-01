/*function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
*/

function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerText = todo.task;

    if (todo.completed) {
      li.classList.add("completed");
    }

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    checkIcon.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    deleteIcon.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(checkIcon);
    li.appendChild(deleteIcon);
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

  const input = document.getElementById("todoInput");
  const task = input.value;

  if (task.trim() !== "") {
    const todo = { task: task, completed: false };
    todos.push(todo);
    populateTodoList(todos);
    input.value = "";
  }
}

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

document.getElementById("todoForm").addEventListener("submit", addNewTodo);
document
  .getElementById("deleteAllCompleted")
  .addEventListener("click", deleteAllCompletedTodos);
