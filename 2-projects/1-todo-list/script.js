function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  //Write your code to create todo list elements with completed and delete buttons here,
  //all todos should display inside the "todo-list" element.
for (const todo of todos) {
  // Create an <li> element for each todo
  const li = document.createElement("li");
  li.innerText = todo.task;

  // Create the span element with the completed and delete buttons
  const span = document.createElement("span");
  span.classList.add("badge", "bg-primary", "rounded-pill");

  // Create the completed button
  const completedBtn = document.createElement("i");
  completedBtn.classList.add("fa", "fa-check", "completed-button");
  completedBtn.setAttribute("aria-hidden", "true");

  // Add an event listener to the completed button
  completedBtn.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  // Create the delete button
  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa", "fa-trash", "delete-button");
  deleteBtn.setAttribute("aria-hidden", "true");

  // Add an event listener to the delete button
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add the completed and delete buttons to the span element
  span.appendChild(completedBtn);
  span.appendChild(deleteBtn);

  // Add the span element to the <li>
  li.appendChild(span);

  // Add the <li> to the <ul>
  list.appendChild(li);
 }
}

const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "todo-input");
const button = document.createElement("button");
button.innerText = "Add Todo";
form.appendChild(input);
form.appendChild(button);

button.addEventListener("click", function (event) {
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  const todo = { task: todoInput.value, completed: false };
  todos.push(todo);
  populateTodoList([todo]);
  todoInput.value = "";
});

//solution from Alex Withington-Smith(21/01/2023)
// list.innerHTML = "";
// todos.forEach((todo, idx) => {
//   const todoItem = document.createElement("div");
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";
//   deleteButton.addEventListener("click", () => {
//     delete todos[idx];
//     populateTodoList(todos);
//   });
//   const li = document.createElement("li");
//   li.innerText = todo.task;
//   li.style.color = "red";
//   todoItem.appendChild(li);
//   todoItem.appendChild(deleteButton);
//   list.appendChild(todoItem);
// });


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of 
// the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  const inputValue = document.getElementById("todoInput");
  const newTodoItem = {
    task: inputValue.value,
    completed: false,
  };
  todos.push(newTodoItem);
  populateTodoList(todos);
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
   event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the 
// completed ones (we can check which ones are completed by seeing if they have the line-through 
// styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
