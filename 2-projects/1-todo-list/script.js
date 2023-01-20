let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);
let addTodoButton = document.querySelector("button");
addTodoButton.addEventListener("click", addNewTodo);
let removeButton = document.querySelector("#remove-all-completed");
removeButton.addEventListener("click", deleteAllCompletedTodos);

function populateTodoList() {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((eachToDo, index) => {
    let createLi = document.createElement("li");
    createLi.innerText = eachToDo.task;
    createLi.style.color = "white";
    list.appendChild(createLi);
    eachToDo.completed ? createLi.style.textDecoration = "line-through" : null;
    let createIForTick = document.createElement("i");
    createIForTick.classList.add("fa", "fa-check");
    createLi.appendChild(createIForTick);
    createIForTick.addEventListener("click", () => {
      !eachToDo.completed ? eachToDo.completed = true : eachToDo.completed = false;
      populateTodoList();
    })
    let createIForBin = document.createElement("i");
    createIForBin.classList.add("fa", "fa-trash");
    createLi.appendChild(createIForBin);
    createIForBin.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList()
    })
  });
}


function addNewTodo(event) {
  event.preventDefault();
  let findInput = document.querySelector("#todoInput");
  todos.push({ task: findInput.value, completed: false });
  populateTodoList();
  let inputParent = document.querySelector(".col-auto");
  inputParent.innerHTML = '<input class="form-control" id = "todoInput" placeholder = "New todo..."/> '
}


function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter(eachToDo => !eachToDo.completed);
  populateTodoList();
}
