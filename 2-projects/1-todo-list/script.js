function populateTodoList(todos) {
  let ulList = document.getElementById("todo-list");
  while (ulList.firstChild) {
    ulList.removeChild(ulList.firstChild);
  }

  todos.forEach((element, index) => {
    let liElement = document.createElement("li");
    liElement.innerText = element.task;
    liElement.id = "id" + index;
    liElement.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    ulList.appendChild(liElement);

    if (element.completed) {
      liElement.style.textDecoration = "line-through";
    }

    let listSpan = document.createElement("span");
    listSpan.classList = "badge bg-primary rounded-pill";
    liElement.appendChild(listSpan);

    let iCheck = document.createElement("i");
    iCheck.classList = "fa fa-check";
    iCheck.ariaHidden = false;
    iCheck.id = "id" + index + "i";
    listSpan.appendChild(iCheck);

    let iCheckById = document.getElementById("id" + index + "i");
    iCheck.addEventListener("click", () => {
      element.completed = !element.completed;
      populateTodoList(todos);
    });

    let iTrash = document.createElement("i");
    iTrash.classList = "fa fa-trash";
    iTrash.ariaHidden = false;
    iTrash.id = "id" + index + "delete";
    listSpan.appendChild(iTrash);

    let iTrashDelete = document.getElementById("id" + index + "delete");
    iTrashDelete.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });
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
event.preventDefault();
  let input = document.querySelector("#todoInput");

  todos.push({ task: input.value, completed: false });

  populateTodoList(todos);
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter((el) => !el.completed);
  populateTodoList(todos);
}

