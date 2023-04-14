function populateTodoList(todos) {
  let unOrderedList = document.getElementById("todo-list");
  for (let Item of todos) {
    let liElement = document.createElement("li");

    let spanTextElement = document.createElement("span");
    spanTextElement.textContent = Item.task;
    
    let spanIconElement = document.createElement("span");
    spanIconElement.classList.add("badge", "bg-primary", "rounded-pill");
    let doneElement = document.createElement("i");
    doneElement.classList.add("fa", "fa-check");

    function checkIfDone () {
      this.parentElement.parentElement.classList.add("completed-task");
    };
    doneElement.addEventListener("click", checkIfDone);


    function removeItem() {
      liElement.remove();
    }
    let removeElement = document.createElement("i");
    removeElement.classList.add("fa", "fa-trash");

    removeElement.addEventListener("click", removeItem);

    spanIconElement.appendChild(doneElement);
    spanIconElement.appendChild(removeElement);

    
    liElement.appendChild(spanTextElement);
    liElement.appendChild(spanIconElement);
    unOrderedList.appendChild(liElement);
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputElement = document.getElementById("todoInput");
  if (inputElement.value === "") {
  } else {
    let ulBlank = document.getElementById("todo-list");
    ulBlank.innerHTML = "";
    let newItem = {};
    newItem["task"] = inputElement.value;
    newItem["completed"] = false;
    todos.push(newItem);
    populateTodoList(todos);
  }
}
let addButton = document.getElementById("btn-add");
addButton.addEventListener("click", addNewTodo)

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
