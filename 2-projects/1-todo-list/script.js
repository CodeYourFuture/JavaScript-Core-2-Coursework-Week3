let list = document.getElementById("todo-list");

while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    let listEl = document.createElement("li");
    listEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listEl.innerHTML = item.task;
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    let iElement = document.createElement("i");
    iElement.className = "fa fa-check";
    iElement.setAttribute("aria-hidden", "true");
    let iElement2 = document.createElement("i");
    span.appendChild(iElement);
    iElement.addEventListener("click", () => {
      iElement.parentElement.parentElement.classList.toggle("line-through");
    });
    iElement2.addEventListener("click", () => {
      iElement2.parentElement.parentElement.remove();
    });
    iElement2.className = "fa fa-trash";
    iElement2.setAttribute("aria-hidden", "true");
    span.appendChild(iElement2);
    listEl.appendChild(span);
    list.appendChild(listEl);
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
  let input = document.querySelector(".form-control");
  let inputValue = [
    {
      task: input.value,
      completed: false,
    },
  ];

  populateTodoList(inputValue);
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let toDoTask = document.querySelectorAll("li");
  toDoTask.forEach((task) => {
    if (task.classList.contains("line-through")) {
      task.remove();
    }
  });
}
setInterval(deleteAllCompletedTodos, 1000);
