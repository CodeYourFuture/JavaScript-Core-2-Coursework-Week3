function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    const newLi = document.createElement("li");
    const newLiSpan = document.createElement("span");
    const newCheckIcon = document.createElement("i");
    const newTrashIcon = document.createElement("i");

    (newCheckIcon.ariaHidden = "true"), (newTrashIcon.ariaHidden = "true");
    newTrashIcon.classList.add("fa", "fa-trash");
    newCheckIcon.classList.add("fa", "fa-check");
    newLiSpan.classList.add("badge", "bg-primary", "rounded-pill");
    newLi.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    newLi.textContent = todo.task;

    newLiSpan.append(newCheckIcon, newTrashIcon);
    newLi.appendChild(newLiSpan);
    list.appendChild(newLi);

    newCheckIcon.addEventListener("click", () => {
      if (newLi.style.textDecoration === "none") {
        newLi.style.textDecoration = "line-through";
      } else {
        newLi.style.textDecoration = "none";
      }
    });

    newTrashIcon.addEventListener("click", () => list.removeChild(newLi));
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

  let input = document.querySelector("#todoInput");
  !input.value
    ? alert(`you haven't write anything yet!!!`)
    : populateTodoList([{ task: input.value, completed: false }]);
  input.value = "";
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const deleteAllCompletedBtn = document.createElement("button");
  const divContainer = document.querySelector(".col-sm");

  divContainer.style.background = "lightblue";
  divContainer.style.padding = "1em";
  deleteAllCompletedBtn.style.marginTop = ".5em";

  deleteAllCompletedBtn.className = "btn btn-primary mb-3";
  deleteAllCompletedBtn.textContent = "Delete All The Completed ones";
  divContainer.appendChild(deleteAllCompletedBtn);

  deleteAllCompletedBtn.addEventListener("click", () => {
    let list = document.getElementById("todo-list");
    let allTodo = document.querySelectorAll("li");

    for (let todo of allTodo) {
      if (todo.style.textDecoration === "line-through") {
        list.removeChild(todo);
      } else {
        todo.style.textDecoration = "none";
      }
    }
  });
}

deleteAllCompletedTodos();
