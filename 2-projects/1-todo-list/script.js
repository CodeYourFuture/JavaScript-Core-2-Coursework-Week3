function strikeCompletedTask() {
  
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.map((todo) => {
    let cardContainer = document.createElement("div");
    let newListItem = document.createElement("li");
    let iconSpan = document.createElement("span");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    checkIcon.addEventListener("click", function() {
      if (cardContainer.classList.contains("strike") === true) {
        cardContainer.classList.remove("strike");
      } else {
        cardContainer.classList.add("strike");
      }      
    })
    trashIcon.classList.add("fa", "fa-trash");
    iconSpan.classList.add("rounded-pill", "bg-primary");
    iconSpan.append(checkIcon, trashIcon);
    // let text = document.createTextNode(todo.task);
    // newListItem.appendChild(text);
    cardContainer.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    newListItem.innerText = todo.task;
    cardContainer.append(newListItem, iconSpan);
    list.appendChild(cardContainer);
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
  let list = document.getElementById("todo-list");
  let cardContainer = document.createElement("div");
  let todoText = document.querySelector("#todoInput").value;
  let newListItem = document.createElement("li");
  cardContainer.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
    );
    newListItem.append(todoText);
    cardContainer.appendChild(newListItem);
    list.appendChild(cardContainer);
    document.querySelector("#todoInput").value = "";
    
}

let addButton = document.querySelector("#add-todo");
addButton.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let resetButton = document.querySelector("#remove-all-complete")
}
