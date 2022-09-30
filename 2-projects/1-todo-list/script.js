function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerText = todo.task;
    list.appendChild(li);
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    li.appendChild(span);
    let i = document.createElement("i");
    i.className = "fa fa-check";
    i.addEventListener("click", () => {
      if (li.hasAttribute("style")) {
        li.removeAttribute("style");
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    let i2 = document.createElement("i");
    i2.className = "fa fa-trash";
    i2.addEventListener("click", () => {
      list.removeChild(li);
    });
    span.appendChild(i);
    span.appendChild(i2);
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
  let userInput = document.querySelector("#todoInput").value;
  if (userInput === "") {
  } else {
    populateTodoList([{ task: userInput, completed: false }]);
  }
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
