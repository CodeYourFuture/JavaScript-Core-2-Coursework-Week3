function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let li_classes = [
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  ];
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let todo in todos) {
    let li = document.createElement("li");
    for (let li_class in li_classes) li.classList.add(li_classes[li_class]);
    li.setAttribute("aria-hidden", "true");
    li.innerHTML =
      todos[todo].task +
      `<span class="badge bg-primary rounded-pill">
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>`;
    list.appendChild(li);
  }
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

document.querySelectorAll(".fa-check").forEach((x) => {
  x.addEventListener("click", (x) => {
    let y = x.path[2].style;
    y.textDecoration === "line-through"
      ? (y.textDecoration = "none")
      : (y.textDecoration = "line-through");
  });
});

document.querySelectorAll(".fa-trash").forEach((x) => {
  x.addEventListener("click", (x) => {
    let y = x.path[2];
    y.style.textDecoration === "line-through" ? y.remove() : "";
  });
});
