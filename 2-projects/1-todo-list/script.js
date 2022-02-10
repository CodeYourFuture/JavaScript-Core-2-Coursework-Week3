function populateTodoList(toDos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all toDos should display inside the "todo-list" element.
  // Loops through the toDos array renders an element accordingly
  toDos.forEach((todo) => {
    let todoEl = document.createElement("li");
    todoEl.innerHTML = todo.task; // Adds a text to the li from the array of objects
    todoEl.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    let spanEl = document.createElement("span");
    spanEl.classList.add("badge", "bg-primary", "rounded-pill");
    let checkEl = document.createElement("i");
    checkEl.classList.add("fa", "fa-check");
    let trashEl = document.createElement("i");
    trashEl.classList.add("fa", "fa-trash");
    trashEl.style.marginLeft = "5px";
    spanEl.appendChild(checkEl);
    spanEl.appendChild(trashEl);
    todoEl.appendChild(spanEl);
    list.appendChild(todoEl);

    // Adds a line through conditionally on the task element text when the checked icon is clicked
    checkEl.addEventListener("click", () => {
      if (todoEl.style.textDecoration === "") {
        todo.completed = true;
        todoEl.style.textDecoration = "line-through";
      } else {
        todo.completed = false;
        todoEl.style.textDecoration = "";
      }
    });

    // Deletes the entire task element
    trashEl.addEventListener("click", () => {
      list.removeChild(todoEl);
    });
  });
}

// These are the same toDos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let toDos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(toDos);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new toDos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInputEl = document.querySelector("#todoInput").value;
  let todoObj = { task: todoInputEl, completed: false };
  toDos.push(todoObj);
  let newTodo = [todoObj];
  populateTodoList(newTodo);
  document.querySelector("#todoInput").value = "";
}

// Advanced challenge: Write a function that checks the toDos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedToDos() {
  // Write your code here...
  event.preventDefault();
  let list = document.getElementById("todo-list");
  let todoEL = document.querySelectorAll("li");
  todoEL.forEach((todoLi) => {
    if (todoLi.style.textDecoration === "line-through") {
      list.removeChild(todoLi);
    }
  });
}
