function strikeCompletedTask() {
  
}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.map((todo) => {
    // create a div container which will hold the new task text and the check and trash icons
    let cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // create new list item which will hold the task text
    let newListItem = document.createElement("li");
    // container which holds the check and trash icons
    let iconSpan = document.createElement("span");
    iconSpan.classList.add("rounded-pill", "bg-primary");
    // icons elements calling from the font awesome icons library using class names fa-check and fa-trash
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    trashIcon.classList.add("fa", "fa-trash");
    // click event listener for check icon, when clicked and cardContainer does not contains the "strike" class: add class, else: remove class
    checkIcon.addEventListener("click", function() {
      if (cardContainer.classList.contains("strike") === true) {
        cardContainer.classList.remove("strike");
      } else {
        cardContainer.classList.add("strike");
      }      
    })
    // click event listener for trash icon, when clicked remove the cardContainer element
    trashIcon.addEventListener("click", function (){
      cardContainer.remove();
    })
    // add the check and trash icon elements as a child to the IconSpan element
    iconSpan.append(checkIcon, trashIcon);
    // set newListItem innerText to value of task inside todo array item
    newListItem.innerText = todo.task;
    // add task text and icons to the container div
    cardContainer.append(newListItem, iconSpan);
    // add container div to the list element on the site
    list.append(cardContainer);
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
  // create a div container which will hold the new task text and the check and trash icons
  let cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
    );
  // check the input field on the site and set a variable with name todoText to it 
  let todoText = document.querySelector("#todoInput").value;
  // create new list item which will hold the task text
  let newListItem = document.createElement("li");
  // container which holds the check and trash icons
  let iconSpan = document.createElement("span");
  iconSpan.classList.add("rounded-pill", "bg-primary")
  // icons elements calling from the font awesome icons library using class names fa-check and fa-trash
  let checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");
  checkIcon.classList.add("fa", "fa-check");
  trashIcon.classList.add("fa", "fa-trash");
  // add check and trash icons to the the icon span container
  iconSpan.append(checkIcon, trashIcon);
  // set the innerText of newListItem to be equal to the todoText which is from the text input field
  newListItem.innerText = todoText;
  // add task  text and icons to cardContainer div
  cardContainer.append(newListItem, iconSpan);
  // add cardContainer div to list element on site
  list.append(cardContainer);
  // set value of text input field to an empty string
  document.querySelector("#todoInput").value = "";
}

let addButton = document.querySelector("#add-todo");
addButton.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let resetButton = document.querySelector("#remove-all-complete")
}
