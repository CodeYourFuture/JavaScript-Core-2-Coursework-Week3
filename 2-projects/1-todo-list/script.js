function populateTodoList(todos) {
  const todoList = document.getElementById("todo-list");
  for (const todo of todos) {
    const listItem = document.createElement("li");
    listItem.innerHTML = todo.task;
    todoList.appendChild(listItem);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("badge", "bg-primary", "rounded-pill");
    const tickElement = document.createElement("i");
    tickElement.classList.add("fa", "fa-check");
    checkBtn.appendChild(tickElement);
    listItem.appendChild(checkBtn);

    checkBtn.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "";
      } else {
        listItem.style.textDecoration = "line-through";
      }
      todo.completed = !todo.completed;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("badge", "bg-primary", "rounded-pill");
    const binElement = document.createElement("i");
    binElement.classList.add("fa", "fa-trash");
    deleteBtn.appendChild(binElement);
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });
  }
}

const initialTodos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(initialTodos);

function addNewTodo(event) {
  event.preventDefault();
  const input = document.getElementById("todoInput");
  if (input.value === "") {
    return;
  } else {
    const newTodo = {
      task: input.value,
      completed: false,
    };
    initialTodos.push(newTodo);
    input.value = "";
    populateTodoList(initialTodos);
  }
}

const addBtn = document.querySelector(".btn.btn-primary.mb-3");
addBtn.addEventListener("click", addNewTodo);

function deleteCompletedTodos() {
  const todoList = document.getElementById("todo-list");
  const listItems = document.querySelectorAll("li");
  for (const listItem of listItems) {
    if (listItem.style.textDecoration === "line-through") {
      const todoIndex = Array.from(todoList.children).indexOf(listItem);
      initialTodos.splice(todoIndex, 1);
      todoList.removeChild(listItem);
    }
  }
}

const delBtnComp = document.getElementById("remove-all-completed");
delBtnComp.addEventListener("click", deleteCompletedTodos);
