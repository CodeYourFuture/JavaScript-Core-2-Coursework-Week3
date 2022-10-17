function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";

  for (let todo of todos) {
    const li = document.createElement("li");
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    li.innerText = todo.task;

    if (todo.completed) li.style.textDecoration = "line-through";

    const span = document.createElement("span");
    span.setAttribute("class", "badge bg-primary rounded-pill");

    const checkBtn = document.createElement("i");
    checkBtn.setAttribute("class", "fa fa-check");
    checkBtn.setAttribute("aria-hidden", "true");
    checkBtn.addEventListener("click", (e) => {
      todos.forEach((todoItem, i) => {
        if (todoItem.task === todo.task) {
          if (todoItem.completed === false) {
            todoItem.completed = true;
          } else {
            todoItem.completed = false;
          }
        }
      });

      populateTodoList(todos);
    });

    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "fa fa-trash");
    deleteBtn.setAttribute("aria-hidden", "true");
    deleteBtn.addEventListener("click", () => {
      todos.forEach((todoItem, i) => {
        if (todoItem.task === todo.task) {
          todos.splice(i, 1);
        }
      });

      populateTodoList(todos);
    });

    span.appendChild(checkBtn);
    span.appendChild(deleteBtn);

    if (todo.deadline) {
      const today = new Date();
      const deadline = new Date(todo.deadline);
      const difference =
        Date.parse(today.toDateString()) - Date.parse(deadline.toDateString());
      const days = difference / 86400000;
      const deadlineSpan = document.createElement("span");
      deadlineSpan.innerText = `${days} days left`;
      li.appendChild(deadlineSpan);
    }

    li.appendChild(span);

    list.appendChild(li);
  }
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
  const toDoInput = document.querySelector("#todoInput");
  const toDoDate = document.querySelector("#todoDate");
  const deadline = toDoDate.value ? toDoDate.value : null;

  todos.push({ task: toDoInput.value, completed: false, deadline });

  populateTodoList(todos);
  console.log(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => todo.completed === false);
  populateTodoList(todos);
}
