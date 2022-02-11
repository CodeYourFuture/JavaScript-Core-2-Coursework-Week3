let input = document.querySelector(".form-control");

function populateTodoList(todos) {
  let ulTag = document.getElementById("todo-list");
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.lastChild);
  }

  todos.filter(item => item.deleted === false).forEach(obj => {
    let liTag = document.createElement("li");
    liTag.className = "list-group-item d-flex justify-content-between align-items-center";
    liTag.innerText = obj.task;
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    liTag.appendChild(span);
    let checkBtn = document.createElement("i");
    checkBtn.addEventListener("click", () => {
      liTag.classList.toggle("checked");
    })
    let trashBtn = document.createElement("i");
    trashBtn.addEventListener("click", () => {
      obj.deleted = true;
      populateTodoList(todos);
    });
    checkBtn.className = "fa fa-check";
    trashBtn.className = "fa fa-trash";
    checkBtn.ariaHidden = "true";
    trashBtn.ariaHidden = "true";
    span.appendChild(checkBtn);
    span.appendChild(trashBtn);
    ulTag.appendChild(liTag);
  });
  console.log(todos);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [{
    task: "Wash the dishes",
    deleted: false
  },
  {
    task: "Do the shopping",
    deleted: false
  },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  let value = input.value;
  let newObj = {};
  newObj.task = value;
  newObj.deleted = false;
  todos.push(newObj);
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the deleted ones (we can check which ones are deleted by seeing if they have the line-through styling applied or not).
function deleteAlldeletedTodos() {
  // Write your code here...
}