function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  todos.forEach((element) => {
    const listItem = document.createElement("li"); 
    listItem.style.backgroundColor = "white";
    listItem.style.border = "1px solid grey";
    listItem.style.width = "550px";

    const taskText = document.createElement("p");
    taskText.innerText = element.task;
    listItem.append(taskText);

    const spanEl = document.createElement("span");
    let spanClasses = ["badge", "bg-primary", "rounded-pill"];
    spanEl.classList.add(...spanClasses);

    const checkButton = document.createElement("i");
    const trashButton = document.createElement("i");
    const checkClasses = ["fa", "fa-check"];
    const trashClasses = ["fa", "fa-trash"];
    checkButton.classList.add(...checkClasses);
    trashButton.classList.add(...trashClasses);

    spanEl.append(checkButton, trashButton);
    listItem.append(spanEl);

    list.append(listItem);

    checkButton.addEventListener("click", () => {
      if (listItem.style.textDecoration == "") {
        listItem.style.textDecoration = "line-through";
        element.completed = true;
      } else {
        listItem.style.textDecoration = "";
        element.completed = false;
      }
    });

    trashButton.addEventListener("click", () => {
      listItem.remove();
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
  let todoInput = document.getElementById("todoInput");
  let inputValue = todoInput.value;
  todos.push({ task: `${inputValue}`, completed: false });
  populateTodoList(todos);
}

const addButton = document.querySelector(".btn");
addButton.addEventListener("click", addNewTodo);

const removeButton = document.getElementById("remove-all-completed");
removeButton.addEventListener("click", deleteAllCompletedTodos);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();

  const incompleteTodos = todos.filter((todo) => todo.completed === false);
  console.log(incompleteTodos);
  todos = incompleteTodos;
  populateTodoList(todos);
}

//EXTRA CHALLANGE
//function setDeadlinesForTodos(){}