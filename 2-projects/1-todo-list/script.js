function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((element) => {
    let liEl = document.createElement("li");
    liEl.className =
      "list-group-item d-flex justify-content-between align-items-center";

    liEl.innerHTML = element.task;
    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    let iCheckEl = document.createElement("i");
    iCheckEl.classList.add("fa", "fa-check");
    iCheckEl.ariaHidden = "true";

    //add line-through to toDo text
    iCheckEl.addEventListener("click", () => {
      liEl.classList.add("line-through");
    });

    let iTrashEl = document.createElement("i");
    iTrashEl.addEventListener("click", () => {
      liEl.remove();
    });

    //remove toDo from the list
    iTrashEl.classList.add("fa", "fa-trash");
    iTrashEl.ariaHidden = "true";

    spanEl.appendChild(iCheckEl);
    spanEl.appendChild(iTrashEl);

    liEl.appendChild(spanEl);
    list.appendChild(liEl);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [];

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  todos = [];
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let getTodoInput = document.getElementById("todoInput").value;
  todos.push({ task: getTodoInput, completed: false });
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  
  // Write your code here...
  let allListElements = document.querySelectorAll(".list-group-item");
  allListElements.forEach(element => {
    if(element.classList.contains("line-through")){
      element.remove()
    }
  })
}
