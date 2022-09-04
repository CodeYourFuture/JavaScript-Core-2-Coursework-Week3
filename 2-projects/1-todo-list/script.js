function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    li.innerHTML = item.task;
    list.appendChild(li);
    let span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    li.appendChild(span);
    let i1 = document.createElement("i");
    i1.className = "fa fa-check";
    i1.ariaHidden = "true";
    let i2 = document.createElement("i");
    i2.className = "fa fa-trash";
    i2.ariaHidden = "true";
    span.append(i1, i2);

    // PART TWO
    document.getElementsByClassName("fa-check");
    i1.addEventListener("click", () => {
      li.classList.toggle("lineThrough");
    });
    document.getElementsByClassName("fa-trash");
    i2.addEventListener("click", () => {
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

  let userInput = document.getElementById("todoInput");
  let userOutput = userInput.value;
  let newTodo = {
    task: userOutput,
    completed: false,
  };
  userInput.value = ""; // clear input field after button press
  todos.push(newTodo);
}
let button = document.querySelector("button");
button.addEventListener("click", addNewTodo());

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
