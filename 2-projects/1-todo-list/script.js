function populateTodoList(todos) {
  let list = document.getElementById ("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
todos.forEach((todo) => {
  let listEl = document.createElement("li");
  listEl.className = "list-group-item d-flex justify-content-between align-items-center";
  list.appendChild(listEl);
  listEl.innerText = todo.task;
  
let span = document.createElement("span");
span.className = "badge bg-primary rounded-pill";
listEl.appendChild(span);

let addI = document.createElement ("i");
addI.className = "fa fa-check";
addI.setAttribute("aria-hidden", true);
span.appendChild(addI);

let removeI = document.createElement("i");
removeI.className = "fa fa-trash";
removeI.setAttribute("aria-hidden", true);
span.appendChild(removeI);

addI.addEventListener("click",() => {
  if (listEl.style.textDecoration ==="line-through") {
    listEl.style.textDecoration = "none";
  } else {
    listEl.style.textDecoration = "line-through";
  }
});

removeI.addEventListener("click", () => {
  if (listEl.style.textDecoration === "line-through") {
    listEl.remove();
  }
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
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
let inputs = document.getElementById("todoInput");
let addI = inputs.value;
if (!addI) {
  return;
} todos.push({
  task: addI,
  completed: false,
});
populateTodoList(todos);
inputs.value != "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
let removeTask = document.getElementById("todo-list");
removeTask.forEach(task => {
  if (task.style.textDecoration === "line-through" || todos.completed ===true) {
    task.remove ()
  }
})


}
