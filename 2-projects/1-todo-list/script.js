let list = document.querySelector("#todo-list");
function populateTodoList(todos) {
  list.innerHTML = "";
  /*
  Write your code to create todo list elements with completed and delete buttons here,
  all todos should display inside the "todo-list" element.
  */

  todos.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    const p = document.createElement("p");
    p.innerText = task.task;
    const span = document.createElement("span");
    span.setAttribute("class", "badge bg-primary rounded-pill");
    const i_check = document.createElement("i");
    
    // completed tasks put line-through
    i_check.addEventListener('click', function () {
      p.style.textDecoration = "line-through";
    });

    const i_trash = document.createElement("i");

    // remove tasks
    i_trash.addEventListener('click', function () {
      list.removeChild(li);
    })

    i_check.setAttribute("class", "fa fa-check");
    i_trash.setAttribute("class", "fa fa-trash");

    span.appendChild(i_check);
    span.appendChild(i_trash);

    li.appendChild(p);
    li.appendChild(span);

    // the paragraph and the span to be side by side
    li.style.display = "flex";

    li.style.backgroundColor = "white";

    list.appendChild(li);
  });
 
}
const form = document.querySelector("form");
const deleteAllCompleted = document.createElement("button");
deleteAllCompleted.innerText = 'Delete All Completed Tasks'
deleteAllCompleted.addEventListener("click", deleteAllCompletedTodos);
form.appendChild(deleteAllCompleted);
/*
These are the same todos that currently display in the HTML
You will want to remove the ones in the current HTML after you have created them using JavaScript
*/
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "haroon", completed: false },
  { task: "adam", completed: false },
];

populateTodoList(todos);
/*
This function will take the value of the input field and add it as a new todo to the bottom of
the todo list.These new todos will need the completed and delete buttons adding like normal.
*/

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.querySelector("#todoInput");
  const task = { task: `${input.value}`, completed: false };
  todos.push(task);
  populateTodoList(todos);
}

/* Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones 
(we can check which ones are completed by seeing if they have the line - through styling applied or not).
*/
function deleteAllCompletedTodos() {
  // Write your code here...
  if (todos.task.style === "") {
  
}
}
