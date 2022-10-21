let list = document.getElementById("todo-list");

while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
}

function populateTodoList(todos) {
  // let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    let text = document.createTextNode(todo.task);

    //line-through and delete buttons
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    span.innerHTML = `
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
    `;

    li.append(text, span);
    list.appendChild(li);
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
  deleteAllCompletedTodos();
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let checks = document.querySelectorAll(".fa-check");
  let deleteBtns = document.querySelectorAll(".fa-trash");

  checks.forEach((check) => {
    check.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.classList.toggle("list-item");

      for (let i = 0; i < todos.length; i++) {
        if (
          e.target.parentElement.parentElement.textContent.trim() ===
          todos[i].task
        )
          todos[i].completed = true;
      }
    });
  });

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      let taskCompleted;

      for (let i = 0; i < todos.length; i++) {
        if (
          e.target.parentElement.parentElement.textContent.trim() ===
          todos[i].task
        ) {
          taskCompleted = todos[i].completed;

          if (taskCompleted === true)
            e.target.parentElement.parentElement.remove();

          todos.splice(i, 1);
        }
      }
    });
  });
}

deleteAllCompletedTodos();