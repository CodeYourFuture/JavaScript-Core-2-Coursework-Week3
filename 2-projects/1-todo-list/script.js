function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo.task;
    li.classList.add("list-group-item");
    
    const completedBtn = document.createElement("button");
    completedBtn.innerText = "Done";
    completedBtn.classList.add("btn", "btn-primary", "me-2");
    completedBtn.addEventListener("click", () => {
      li.classList.toggle("text-decoration-line-through");
  
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(completedBtn);
    li.appendChild(deleteBtn);
    
    list.appendChild(li);
  });

}

let todos = [
  { task: "Complete everything", completed: false },
  { task: "Conquer Earth", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
    let todoInput = document.getElementById('todoInput');
    let newTask = todoInput.value.trim();
    
    if (newTask !== "") {
      const todo = { task: newTask, completed: false };
      todos.push(todo);
      todoInput.value = "";
      populateTodoList(todos);
    }

}

function deleteAllCompletedTodos() {
  todos.forEach((todo, index) => {
    const li = document.querySelectorAll('list-group')[index];
    
    if (li.classList.contains("text-decoration-line-through")) {
      todos.splice(index, 1);
      li.remove();
    }
  });
}

let addToDoButton = document.getElementById("addButton");
addToDoButton.addEventListener("click", addNewTodo);

