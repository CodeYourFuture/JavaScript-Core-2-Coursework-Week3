// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// }


function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((todo) => {
    let listEl = document.createElement("li");
    listEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listEl.innerText = todo.task;
    list.appendChild(listEl);

    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    listEl.appendChild(spanEl);

    let checkEl = document.createElement("i");
    checkEl.className = "fa fa-check";
    checkEl.ariaHidden = todo.completed;
    checkEl.addEventListener("click", () => {
      listEl.style.textDecoration === "line-through"
        ? (listEl.style.textDecoration = "")
        : (listEl.style.textDecoration = "line-through");
    });
    spanEl.appendChild(checkEl);

    let removeEl = document.createElement("i");
    removeEl.className = "fa fa-trash";
    removeEl.ariaHidden = todo.completed;
    removeEl.addEventListener("click", () => {
      list.removeChild(listEl);
    });
    spanEl.appendChild(removeEl);
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
let addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", addNewTodo);

function addNewTodo(event) {
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  event.preventDefault();
  let input = document.getElementById("todoInput");

  //todos.push({ task: input.value, completed: false });
  populateTodoList([{ task: input.value, completed: false }]);
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

let removeBtn = document.querySelector("#remove-all-completed");
removeBtn.addEventListener("click", deleteAllCompletedTodos);

function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();

  let li = document.querySelectorAll("li");
  let list = document.getElementById("todo-list");
  li.forEach((task) => {
    if (task.style.textDecoration === "line-through") {
      list.removeChild(task);
    }
  });
}




// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);



