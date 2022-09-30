function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((toDo) => {
    const liEl = document.createElement("li");
    liEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    liEl.innerText = toDo.task;
    const spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    const checkedIcon = document.createElement("i");
    checkedIcon.className = "fa fa-check";
    checkedIcon.setAttribute = "ariaHidden", true;
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";
    deleteIcon.setAttribute = "ariaHidden", true;
    spanEl.append(checkedIcon, deleteIcon);
    liEl.append(spanEl);
    checkedIcon.addEventListener("click", () => {
      if (liEl.style.textDecoration === "line-through") {
        liEl.style.textDecoration = "none";
      } else {
        liEl.style.textDecoration = "line-through";
      }
    });
    deleteIcon.addEventListener("click", () => {
      list.removeChild(liEl);
    });
    list.append(liEl);
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
  let myInput = document.querySelector("#todoInput");
  populateTodoList([{ task: myInput.value, completed: false }]);
  myInput.value = "";
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let removeTask = document.getElementById('todo-list');
  removeTask.forEach(task => {
    if (task.style.textDecoration === 'line-through' || todos.completed === true) {
      task.remove()
    }
  })
}
