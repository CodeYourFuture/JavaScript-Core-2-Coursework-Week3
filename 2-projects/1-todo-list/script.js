function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.innerText = todo.task;
    list.appendChild(li);
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    let span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    let check = document.createElement("i");
    check.classList.add("fa", "fa-check");
    check.setAttribute("aria-hidden", true);
    check.style.marginRight = "1rem";
    span.appendChild(check);

    check.addEventListener("click", () => {
      li.classList.toggle("line-through");
    });

    let trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash");
    trash.setAttribute("aria-hidden", true);
    span.appendChild(trash);
    li.appendChild(span);

    trash.addEventListener("click", () => {
      li.remove();
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
  const input = document.getElementById("todoInput");

  if (input.value === "") alert("Please input your todo list");
  else {
    populateTodoList([{ task: input.value, completed: false }]);
    input.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

const buttonsContainer = document.querySelectorAll(".col-auto")[1];
const deleteAllCompletedToDos = document.createElement("button");
deleteAllCompletedToDos.className = "btn btn-danger mb-3";
deleteAllCompletedToDos.innerText = "Delete All Completed Tasks";
buttonsContainer.appendChild(deleteAllCompletedToDos);
deleteAllCompletedToDos.addEventListener("click", deleteAllCompletedTodos);

function deleteAllCompletedTodos(e) {
  e.preventDefault();
  const li = document.querySelectorAll("li");
  li.forEach((element) => {
    console.log(Array.from(element.classList));
    if (Array.from(element.classList).includes("line-through")) {
      element.remove();
    }
  });
}
