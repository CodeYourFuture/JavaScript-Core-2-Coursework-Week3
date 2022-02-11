// ## Instructions

// The `populateTodoList()` function should iterate over the list of todos that we are given at the start, it should create a `<li>` for the todo along with some other stuff that you can find in index.html and below.

// The items in the todo list are currently hard-coded into the HTML, refactor the code so that this function creates them and adds the following functionality to them:

// Each todo should have this HTML inside it:

// ```html
// <span class="badge bg-primary rounded-pill">
//   <i class="fa fa-check" aria-hidden="true"></i>
//   <i class="fa fa-trash" aria-hidden="true"></i>
// </span>
// ```

// The first `<i>` tag needs an event listener that applies a line-through text-decoration styling to the text of the todo. It should remove the styling if it is clicked again.

// The second `<i>` tag needs an event listener that deletes the parent `<li>` element from the `<ul>`.
let list = document.getElementById("todo-list");

while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
}
function populateTodoList(todos) {
  
  //let newList = document.createElement('ul');
  //newList.setAttribute('id', 'todo-list');
  //newList.setAttribute('class', 'list-group');

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

// Advanced challenge: Write a funcntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let toDoTask = document.querySelectorAll("li");
  toDoTask.forEach((task) => {
    if (task.classList.contains("line-through")) {
      task.remove();
    }
  })
}
setInterval(deleteAllCompletedTodos, 1000);