function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.map((item) => {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = `${item.task}
        <span class="badge bg-primary rounded-pill">
          <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
          <i class="fa fa-check check icon" aria-hidden="true"></i>
          <i class="fa fa-trash delete icon" aria-hidden="true"></i>
        </span>
      `;
    todoItem.classList =
      "list-group-item d-flex justify-content-between align-items-center  todo-item";
    list.appendChild(todoItem);
  });
  addNewTodo;
  deleteAllCompletedTodos();
  completedTodos();
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
  let todoInput = document.getElementById("todoInput");
  let newItem = { task: todoInput.value, completed: false };
  let newTodos = [newItem];
  populateTodoList(newTodos);
  document.querySelector("#todoInput").value = "";
}

function completedTodos() {
  let checkButton = document.querySelectorAll(".check");
  checkButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode);
      e.target.parentNode.parentNode.className = "done";
    });
  });
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let removeButton = document.querySelectorAll(".delete");
  removeButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      let itemCompleted = e.target.parentNode.parentNode;
      if (itemCompleted.className === "done") {
        itemCompleted.remove();
      } else {
        alert("You are not completed it yet are you sure to delete it!");
      }
    });
  });
}
