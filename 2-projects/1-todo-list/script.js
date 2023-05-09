function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing todos in the list

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerText = todo.task;

    let completeBtn = document.createElement("button");
    completeBtn.className = "badge bg-primary rounded-pill"
    completeBtn.innerHTML = '<i class="fa fa-check"></i>';
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("text-decoration-line-through");
      todo.completed = !todo.completed;
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger btn-sm";
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function addNewTodo(event) {
  event.preventDefault();
  let inputField = document.getElementById("todoInput");
  let inputValue = inputField.value.trim();

  if (inputValue !== "") {
    let newTodo = { task: inputValue, completed: false };
    todos.push(newTodo);
    inputField.value = "";
    populateTodoList(todos);
  }
}

function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

populateTodoList(todos);

let addToDoButton = document.getElementById("addButton");
addToDoButton.addEventListener("click", addNewTodo);

let deleteCompletedButton = document.getElementById("deleteButton");
deleteCompletedButton.addEventListener("click", deleteAllCompletedTodos);
