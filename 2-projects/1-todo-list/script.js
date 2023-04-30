function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (const todo of todos) {
    let newTask = document.createElement("li");

    newTask.innerText = todo.task;
    newTask.classList.add("todo-text");

    list.appendChild(newTask);
  }

  // My todo list:
  // Get input and add to the todos object array
  // event listener on button
  // when button clicked, take input text, create new li, add input text to li, append li to ul
}

let addToDoButton = document.querySelector("#addToDo");
addToDoButton.addEventListener("click", addNewTask);

function addNewTask(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let myList = document.getElementById("todo-list");
  // Target the input text box
  let inputText = document.querySelector("#todoInput").value;

  let myNewTask = document.createElement("li");

  myNewTask.innerText = inputText;

  // creating a span element for the two icons
  let mySpanElement = document.createElement("span");

  //create icon elements
  let trashIcon = document.createElement("i");
  let checkIcon = document.createElement("i");

  trashIcon.classList.add("fa", "fa-trash");
  checkIcon.classList.add("fa", "fa-check");

  // append icon elements to span element
  mySpanElement.append(checkIcon, trashIcon);

  // append span to list element
  myNewTask.append(mySpanElement);

  myNewTask.classList.add("todo-text");

  // add event listener for completed tasks
  checkIcon.addEventListener("click", taskIsDone);

  function taskIsDone(event) {
    event.preventDefault();
    // if statement to check if myNewTask has had strikethrough class applied
    // if yes, it will return true
    if (myNewTask.classList.contains("strikethrough")) {
      myNewTask.classList.remove("strikethrough");
    } else {
      myNewTask.classList.add("strikethrough");
    }
  }

  // add event listener for deleted tasks
  function deleteTask(event) {
    event.preventDefault();
    myNewTask.remove();
  }

  trashIcon.addEventListener("click", deleteTask);

  // could use append for multiple elements
  myList.appendChild(myNewTask);

  // clear input box
  document.querySelector("#todoInput").value = "";

  // make a class that applies strikethrough to text
  // click on tick adds a class to the to-do text
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
function deleteAllCompletedTodos(event) {
  // stops refreshing
  event.preventDefault();

  // Select all li elements
  // returns an array of all list elements
  let allListElements = document.querySelectorAll("li");

  // for loop to iterate through array of list elements
  for (const listElement of allListElements) {
    if (listElement.classList.contains("strikethrough")) {
      listElement.remove();
    }
  }
}

let removeAllCompletedButton = document.querySelector("#remove-all-completed");

function test(event) {
  event.preventDefault();
  alert("helloo");
}

removeAllCompletedButton.addEventListener("click", deleteAllCompletedTodos);
