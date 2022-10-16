let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    // creating todo when page loads
    const listItem = createtodo(todo);
    // add to the list
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

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.getElementById("todoInput");
  const value = input.value;
  let listItem;
  // checks if the value is not empty or only white spaces
  if (value && !/^\s+$/g.test(value)) {
    listItem = createtodo(value);
    list.appendChild(listItem);
    input.value = "";
  }
  deleteAllCompletedTodos();
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const todos = list.querySelectorAll("li");
  todos.forEach((todo) => {
    if (todo.classList.contains("line-through")) {
      list.removeChild(todo);
    }
  });
}

// function for creating new todo

function createtodo(value) {
  // create li and add class attribute
  const listItem = document.createElement("li");
  listItem.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );

  listItem.innerText = typeof value === "string" ? value : value.task;
  // create span and add class attribute
  const span = document.createElement("span");
  span.setAttribute("class", "badge bg-primary rounded-pill");
  listItem.appendChild(span);
  // create buttons and add class attribute
  const checkBtn = document.createElement("i");
  checkBtn.setAttribute("class", "fa fa-check");
  checkBtn.setAttribute("aria-hidden", "true");
  checkBtn.addEventListener("click", function () {
    listItem.classList.toggle("line-through");
  });
  span.appendChild(checkBtn);
  const trashBtn = document.createElement("i");
  trashBtn.setAttribute("class", "fa fa-trash");
  trashBtn.setAttribute("aria-hidden", "true");
  trashBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });
  span.appendChild(trashBtn);
  return listItem;
}
