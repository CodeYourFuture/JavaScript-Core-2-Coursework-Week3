function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = "";
  
  todos.forEach((todo) => {
    let taskDescription = todo.task;
    let newTaskEl = document.createElement("li");
    newTaskEl.textContent = taskDescription;
    newTaskEl.className =
      "list-group-item d-flex justify-content-between align-items-center";

    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";

    let iCheckEl = document.createElement("i");
    iCheckEl.className = "fa fa-check";
    iCheckEl.ariaHidden = true;

    let iTrashEl = document.createElement("i");
    iTrashEl.className = "fa fa-trash";
    iTrashEl.ariaHidden = true;

    list.appendChild(newTaskEl);
    newTaskEl.appendChild(spanEl);
    spanEl.appendChild(iCheckEl);
    spanEl.appendChild(iTrashEl);

    iCheckEl.addEventListener("click", checkOnOff);

    function checkOnOff() {
      if (newTaskEl.style.textDecoration != "line-through") {
        newTaskEl.style.textDecoration = "line-through";
      } else {
        newTaskEl.style.textDecoration = "none";
      }
    }

    iTrashEl.addEventListener("click", () => {
      list.removeChild(newTaskEl);
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
  let inputEl = document.getElementById("todoInput");
  let newTodo = {
    task: inputEl.value,
    completed: false,
  };
  todos.push(newTodo);
  inputEl.value = "";
  populateTodoList(todos);



  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
