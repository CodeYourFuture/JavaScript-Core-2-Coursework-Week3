function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
   todos.forEach((todo) => {

    let liElement = document.createElement("li");
    liElement.className =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(liElement);
    liElement.innerText = todo.task;



    let spanElement = document.createElement("span");
    spanElement.className = "badge bg-primary rounded-pill";
    liElement.appendChild(spanElement);


    let includeIcon = document.createElement("i");
    includeIcon.className = "fa fa-check";
    includeIcon.setAttribute("aria-hidden", true);
    spanElement.appendChild(includeIcon);

    let removeIcon = document.createElement("i");
    removeIcon.className = "fa fa-trash";
    removeIcon.setAttribute("aria-hidden", true);
    spanElement.appendChild(removeIcon);


    includeIcon.addEventListener("click", () => {
      if (liElement.style.textDecoration === "line-through") {
        liElement.style.textDecoration = "none";
      } else {
        liElement.style.textDecoration = "line-through";
      }
    });

    removeIcon.addEventListener("click", () => {
      if (liElement.style.textDecoration === "line-through") {
        liElement.remove();
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
  let removeTask = document.createElement("todo-list");
  removeTask.forEach(task => {
    if (element.style.textDecoration === "line-through") {
      element.remove();
    }
  })
}
