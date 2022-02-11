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

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((todo) => {
    // console.log(todo);
    let li = document.createElement("li");
    let task = todo.task;

    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    li.innerHTML = task;

    let span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    let iCheck = document.createElement("i");
    iCheck.classList.add("fa", "fa-check");
    iCheck.ariaHidden = true;

    let iTrash = document.createElement("i");
    iTrash.classList.add("fa", "fa-trash");
    iTrash.ariaHidden = true;

    iTrash.addEventListener("click", () => {
      todos.slice(0, 1);
      deleteAllListItems();
      populateTodoList(todos);
    });

    li.appendChild(span);
    span.appendChild(iCheck);
    span.appendChild(iTrash);

    list.appendChild(li);
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

function deleteAllListItems() {
  document.querySelectorAll("li").forEach((todo) => {
    todo.remove();
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
