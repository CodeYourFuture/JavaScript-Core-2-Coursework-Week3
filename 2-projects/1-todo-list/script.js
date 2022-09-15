function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach(todo => {
    let liEl = document.createElement("li");
    liEl.className = "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(liEl);
    liEl.textContent = todo.task;

    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    liEl.appendChild(spanEl);
    
    let checkIconEl = document.createElement("i");
    checkIconEl.className = "fa fa-check";
    checkIconEl.setAttribute("aria-hidden","true");
    spanEl.appendChild(checkIconEl);

    checkIconEl.addEventListener("click", () => {
      if (liEl.style.textDecoration === "line-through") liEl.style.textDecoration = "none";
      else (liEl.style.textDecoration = "line-through");
    });

    let trashIconEl = document.createElement("i");
    trashIconEl.className = "fa fa-trash";
    trashIconEl.setAttribute("aria-hidden","true");
    spanEl.appendChild(trashIconEl);
    
    trashIconEl.addEventListener("click",()=>{
      liEl.parentElement.removeChild(liEl);
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
  let newTodo = document.getElementById("todoInput");
  let todo = [
    { task: newTodo.value, completed: false},
  ];
  populateTodoList(todo);
  newTodo.value = "";

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
