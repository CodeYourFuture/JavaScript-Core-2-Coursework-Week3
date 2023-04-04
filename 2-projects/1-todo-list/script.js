function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    // Create the <li> element
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = todo.task;

    // Create the <span> element
    let span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    // Create the <i> elements
    let checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    checkIcon.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa", "fa-trash");
    trashIcon.addEventListener("click", () => {
      li.remove();
    });

    // Add the <i> elements to the <span> element
    span.appendChild(checkIcon);
    span.appendChild(trashIcon);

    // Add the <span> element to the <li> element
    li.appendChild(span);

    // Add the <li> element to the <ul> element
    list.appendChild(li);
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
    let input = document.getElementById("new-todo");
  let task = input.value.trim();

  if (task !== "") {
    let newTodo = { task: task, completed: false };
    todos.push(newTodo);
    populateTodoList(todos);
    input.value = "";
  }

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...function deleteAllCompletedTodos() {
  const completedTodos = todoList.querySelectorAll('.completed');
  completedTodos.forEach(todo => todo.remove());
}

removeAllButton.addEventListener('click', deleteAllCompletedTodos);

// function populateTodoList(todos) {
//   const list = document.getElementById("todo-list");

//   todos.forEach((todo, index) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");
//     li.innerText = todo.task;

//     const span = document.createElement("span");
//     span.classList.add("badge", "bg-primary", "rounded-pill");

//     const checkIcon = document.createElement("i");
//     checkIcon.classList.add("fa", "fa-check");
//     checkIcon.setAttribute("aria-hidden", "true");
//     checkIcon.addEventListener("click", () => {
//       li.classList.toggle("text-decoration-line-through");
//     });

//     const deleteIcon = document.createElement("i");
//     deleteIcon.classList.add("fa", "fa-trash");
//     deleteIcon.setAttribute("aria-hidden", "true");
//     deleteIcon.addEventListener("click", () => {
//       li.remove();
//     });

//     span.appendChild(checkIcon);
//     span.appendChild(deleteIcon);
//     li.appendChild(span);
//     list.appendChild(li);
//   });
// }
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);

