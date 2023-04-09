

function populateTodoList(todos) {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = '';
  for(let todo of todos){
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("newTodo");
    let newLi = document.createElement("li");
    newLi.innerText = todo.task;
    newLi.classList.add("todo-item");
    if (todo.completed) {
      newLi.classList.add("completed");
    }
    todoDiv.appendChild(newLi);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    checkBtn.classList.add("checkBtn");
    checkBtn.addEventListener('click', function() {
      newLi.classList.toggle("completed");
      newLi.style.textDecoration = 'line-through';
    });
    todoDiv.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener('click', function() {
      todoList.removeChild(todoDiv);
      todoList
    });
    todoDiv.appendChild(deleteBtn);
    todoList.appendChild(todoDiv);
  }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

let addBtn = document.getElementById('addNewItem');
addBtn.addEventListener('click', addNewTodo);

function addNewTodo(event) {
  event.preventDefault();
  let todoInput = document.getElementById('todoInput');
  let newTask = { task: todoInput.value, completed: false };
  todos.push(newTask);
  todoInput.value = '';
  populateTodoList(todos);
}

function deleteAllCompletedTodos() {
  let todoItems = document.querySelectorAll('.todo-item');
  for (let i = 0; i < todoItems.length; i++) {
    let todoItem = todoItems[i];
    if (todoItem.classList.contains('completed')) {
      let todoDiv = todoItem.closest('.newTodo'); 
      todoDiv.parentElement.removeChild(todoDiv,todos);
    }
  }
}
