function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  for (element of todos) {
    const taskEl = document.createElement("li");
    taskEl.innerHTML = `${element.task}  `;
    const taskSpan = document.createElement("span");
    const taskCheck = document.createElement("i");
    taskCheck.className = "fa fa-check";
    const taskTrash = document.createElement("i");
    taskTrash.className = "fa fa-trash";
    taskEl.appendChild(taskSpan);
    taskSpan.appendChild(taskCheck);
    taskSpan.appendChild(taskTrash);
    taskEl.className = "card";
    list.appendChild(taskEl);

    taskCheck.addEventListener("click", () => {
      if (taskEl.style.textDecoration === "line-through") {
        taskEl.style.textDecoration = "";
      } else {
        taskEl.style.textDecoration = "line-through";
      }
    });

    taskTrash.addEventListener("click", () => {
      list.removeChild(taskEl);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
const todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

const addBtn = document.getElementById("add-to-do");
const inputBox = document.getElementById("todoInput");
addBtn.addEventListener("click", function (event) {
  addNewTodo(event, inputBox.value);
  inputBox.value = "";
});

//These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event, inputTask) {
  event.preventDefault();
  let newObject = {
    task: inputTask,
    completed: false,
  };
  todos.push(newObject);
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
