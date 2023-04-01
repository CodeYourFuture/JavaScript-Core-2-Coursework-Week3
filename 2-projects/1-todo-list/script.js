function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let task of todos) {
    const taskList = document.createElement("li");
    taskList.innerHTML = `${task.task} <span class="badge bg-primary rounded-pill">
  <i class="fa fa-check" aria-hidden="true" ></i>
  <i class="fa fa-trash" aria-hidden="true" ></i>
</span>`;

    list.appendChild(taskList);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function completedTask(e) {
  const target = e.target.parentNode.parentNode;
  target.classList.toggle("lineThru");
}
const completed = document.getElementsByClassName("fa-check");
for (let nList of [...completed]) {
  nList.addEventListener("click", completedTask);
}

function removeTask(e) {
  const target = e.target.parentNode.parentNode;
  target.remove();
}
const removed = document.querySelectorAll(".fa-trash");
for (let i = 0; i < removed.length; i++) {
  removed[i].addEventListener("click", removeTask);
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  event.preventDefault();
  let inputValue = document.getElementById("todoInput").value;
  const userInput = [{ task: inputValue }];
  populateTodoList(userInput);
  const completed = document.querySelector("li:last-child");

  completed.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    target.classList.toggle("lineThru");
  });

  const removed = document.querySelectorAll(".fa-trash");
  for (let i = 0; i < removed.length; i++) {
    removed[i].addEventListener("click", removeTask);
  }
  const resetInput = document.querySelector(".g-3");
  resetInput.reset();
}

const addTodo = document.querySelector(".btn");
addTodo.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let list = document.getElementById("todo-list");
  for (let prop of [...list.children]) {
    if (prop.classList.contains("lineThru")) {
      prop.remove();
    }
  }
}
const removeCompleted = document.getElementById("remove-all-completed");
removeCompleted.addEventListener("click", deleteAllCompletedTodos);
