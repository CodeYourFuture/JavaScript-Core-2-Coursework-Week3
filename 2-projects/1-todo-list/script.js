function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.innerText = `${todo.task} - completed: ${todo.completed}`;

    let spanCheck = document.createElement("span");
    spanCheck.classList.add("badge");
    let spanTrash = document.createElement("span");
    spanTrash.classList.add("badge");

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    checkIcon.addEventListener("click", () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    trashIcon.addEventListener("click", () => {
      li.remove();
    });

    spanCheck.appendChild(checkIcon);
    spanTrash.appendChild(trashIcon);
    li.appendChild(spanCheck);
    li.appendChild(spanTrash);
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

  const inputBar = document.getElementById("todoInput");
  const todoText = inputBar.value;

  // If no input then it returns to stop creating todos

  if (!todoText) {
    return;
  }

  let newToDo = document.createElement("li");
  newToDo.classList.add("new-todo-item");

  let todoTextSpan = document.createElement("span");
  todoTextSpan.textContent = todoText;
  newToDo.appendChild(todoTextSpan);

  let addNewTodoBtn = event.target;
  addNewTodoBtn.addEventListener("click", addNewTodo);

  let removeButton = document.getElementById("remove-all-completed");

  removeButton.addEventListener("click", () => {
    newToDo.remove();
  });

  let todoList = document.getElementById("todo-list");
  todoList.appendChild(newToDo);

  inputBar.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  const todoItems = document.querySelectorAll("li");
  todoItems.forEach((todoItem) => {
    if (todoItem.classList.contains("completed")) {
      todoItem.remove();
    }
  });
}
