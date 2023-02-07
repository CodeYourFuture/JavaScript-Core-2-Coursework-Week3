function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
   todos.forEach((task) => {
    let taskToDo = createTodoTask(task.task);
    list.appendChild(taskToDo);
  });
  // updateButtons();
}

function createTodoTask(task) {
  let list = document.getElementById("todo-list");
  let li = document.createElement("li");
  let span = document.createElement("span");
  let i1 = document.createElement("i");
  let i2 = document.createElement("i");
  span.classList.add("badge", "bg-primary", "rounded-pill");
  i1.classList.add("fa", "fa-check");
  i1.setAttribute("id", "done");
  i2.setAttribute("id", "delete");
  i2.classList.add("fa", "fa-trash");
  i1.setAttribute("aria-hidden", true);
  i2.setAttribute("aria-hidden", true);

  span.innerHTML = task;
  li.appendChild(span);
  span.appendChild(i1);
  span.appendChild(i2);

  completeButton(i1);
  deleteButton(i2);
  return li;
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
  let newTask = document.getElementById("todoInput").value;
  let list = document.getElementById("todo-list");
  let taskToDo = createTodoTask(newTask);

  list.appendChild(taskToDo);
  clearInput();
}

function clearInput() {
  var getValue = document.getElementById("todoInput");
  if (getValue.value != "") {
    getValue.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
