function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = generateTodo(todo.task);
    list.appendChild(listItem);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
// addEventListener();

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const todoName = document.getElementById("todoInput");
  let list = document.getElementById("todo-list");
  const listItem = document.createElement("li");

  listItem.innerHTML = generateTodo(todoName.value);
  list.appendChild(listItem);
}

function generateTodo(todoName) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      ${todoName}
      <span class="badge bg-primary rounded-pill">
        <i class="fa fa-check" onClick="markTaskDone('${todoName}')" aria-hidden="true"></i>
        <i class="fa fa-trash" onClick="deleteTask('${todoName}')" aria-hidden="true"></i>
      </span>
    </li>
    `;
}

function markTaskDone(todoName) {
  const listOfItems = document.querySelectorAll(".list-group-item");
  for (let listItem of listOfItems) {
    if (listItem.innerText.trim() == todoName.trim()) {
      if (listItem.style.textDecoration === "line-through") {
        return (listItem.style.textDecoration = "none");
      }
      return (listItem.style.textDecoration = "line-through");
    }
  }
}

function deleteTask(todoName) {
  const listOfItems = document.querySelectorAll(".list-group-item");
  for (let listItem of listOfItems) {
    if (listItem.innerText.trim() === todoName.trim()) {
      listItem.remove();
    }
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
