function populateTodoList(obj) {
  let list = document.getElementById("todo-list");
  obj.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.innerText = item.task;
    let span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    let iconCheck = document.createElement("i");
    // iconCheck.classList.add("fa", "fa-check");
    // iconCheck.setAttribute("aria-hidden", "true");
    let iconTrash = document.createElement("i");
    // iconTrash.classList.add("fa", "fa-trash");
    // iconTrash.setAttribute("aria-hidden", "true");

    span.appendChild(iconCheck);
    span.appendChild(iconTrash);
    li.appendChild(span);
    list.appendChild(li);
  });
  let icons = document.getElementsByTagName("i");

  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("fa");
    icons[i].setAttribute("aria-hidden", "true");
    if (i % 2 === 0) {
      icons[i].classList.add("fa-check");
    } else {
      icons[i].classList.add("fa-trash");
    }
  }
  
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-check")) {
      e.target.parentElement.parentElement.classList.toggle("line-through");
    }
    if (e.target.classList.contains("fa-trash")) {
      e.target.parentElement.parentElement.remove();
    }
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
  let input = document.querySelector(".form-control");
  let inputValue = [
    {
      task: input.value,
      completed: false,
    },
  ];
  populateTodoList(inputValue);
  input.value = "";
  
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  e.preventDefault();
  let toDoItems = document.querySelectorAll("li");
  toDoItems.forEach(item => {
    if (item.classList.contains("line-through")) {
      item.remove()
    } 
  })
}

let cardForm = document.querySelector("form");
let cardDiv = document.createElement("div");
cardDiv.classList.add("card-auto");

//Create and set up button to clear on click
let deleteAllBtn = document.createElement("button");
deleteAllBtn.innerHTML = "Delete All";
deleteAllBtn.classList.add("btn", "btn-primary", "mb-3");
deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);
cardDiv.appendChild(deleteAllBtn);
cardForm.append(cardDiv);

//setInterval(deleteAllCompletedTodos, 1000);
