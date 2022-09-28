function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((todo) => {
    let todoElement = document.createElement("li");
    todoElement.innerText = todo.task;
    list.appendChild(todoElement);
    todoElement.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let functionButton = document.createElement("span");
    todoElement.appendChild(functionButton);
    functionButton.className = "badge bg-primary rounded-pill";
    let checkButton = document.createElement("i");
    let trashButton = document.createElement("i");
    functionButton.appendChild(checkButton);
    functionButton.appendChild(trashButton);
    checkButton.className = "fa fa-check";
    trashButton.className = "fa fa-trash";
    checkButton.setAttribute("aria-hidden", "true");
    trashButton.setAttribute("aria-hidden", "true");

    checkButton.addEventListener("click", function () {
      // todoElement.classList.toggle("line-through")
      if (todoElement.style.textDecoration === "line-through") {
        todoElement.style.textDecoration = "none";
      } else {
        todoElement.style.textDecoration = "line-through";
      }
    });

    trashButton.addEventListener("click", function () {
      if (todoElement.style.textDecoration === "line-through") {
        todoElement.remove()
      }
    });

  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Do the cleaning", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let addTodoBtn = document.querySelector(".btn-primary");
  let todoTextField = document.getElementById("todoInput");
  let list = document.getElementById("todo-list");
  addTodoBtn.addEventListener("click", function () {
    let todoText = todoTextField.value;
    let todoElement = document.createElement("li");
    todoElement.innerText = todoText;
    list.appendChild(todoElement);
    todoElement.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let functionButton = document.createElement("span");
    todoElement.appendChild(functionButton);
    functionButton.className = "badge bg-primary rounded-pill";
    let checkButton = document.createElement("i");
    let trashButton = document.createElement("i");
    functionButton.appendChild(checkButton);
    functionButton.appendChild(trashButton);
    checkButton.className = "fa fa-check";
    trashButton.className = "fa fa-trash";
    checkButton.setAttribute("aria-hidden", "true");
    trashButton.setAttribute("aria-hidden", "true");

    checkButton.addEventListener("click", function () {
      if (todoElement.style.textDecoration === "line-through") {
        todoElement.style.textDecoration = "none";
      } else {
        todoElement.style.textDecoration = "line-through";
      }
    });
    
    trashButton.addEventListener("click", function() {
      if (todoElement.style.textDecoration === "line-through") {
        todoElement.remove();
      }
    })
  });
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...#
  let allLiElements = document.querySelectorAll("li");
  allLiElements.forEach(element=>{
    if (element.style.textDecoration === "line-through") {
      element.remove()
    }
  })
}

//  deleteAllCompletedTodos()


