function populateTodoList(todos) {
  let list = document.querySelector("#todo-list");
  for (let chore of todos) {
    const liElement = document.createElement("li");
    liElement.innerText = chore.task;

    list.appendChild(liElement);

    const span = document.createElement("span");
    const firstI = document.createElement("i");
    const secondI = document.createElement("i");

    span.setAttribute("class", "badge bg-primary rounded-pill");
    firstI.setAttribute("class", "fa fa-check");
    secondI.setAttribute("class", "fa fa-trash");

    span.appendChild(firstI);
    span.appendChild(secondI);

    liElement.appendChild(span);

    firstI.addEventListener("click", (event) => {
      // liElement.style.textDecoration = "line-through";
      if (liElement.style.textDecoration === "line-through") {
        liElement.style.textDecoration = "none";
      } else {
        liElement.style.textDecoration = "line-through";
      }
    });

    secondI.addEventListener("click", (event) => {
      list.removeChild(liElement);
    });
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that curr mently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  event.preventDefault();

  let list = document.querySelector("#todo-list");
  const liElement = document.createElement("li");

  list.appendChild(liElement);

  const span = document.createElement("span");
  const firstI = document.createElement("i");
  const secondI = document.createElement("i");

  span.setAttribute("class", "badge bg-primary rounded-pill");
  firstI.setAttribute("class", "fa fa-check");
  secondI.setAttribute("class", "fa fa-trash");

  span.appendChild(firstI);
  span.appendChild(secondI);

  firstI.addEventListener("click", (event) => {
    if (liElement.style.textDecoration === "line-through") {
      liElement.style.textDecoration = "none";
    } else {
      liElement.style.textDecoration = "line-through";
    }
  });

  secondI.addEventListener("click", (event) => {
    list.removeChild(liElement);
  });
  const taskInput = document.querySelector("#todoInput").value;

  liElement.innerText = taskInput;

  liElement.appendChild(span);

  list.appendChild(liElement);

  document.querySelector("#todoInput").value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let list = document.getElementById("todo-list");

  // const allTasks = document.querySelectorAll

  const task = document.querySelectorAll("li");

  task.forEach((item) => {
    if (item.style.textDecoration === "line-through") {
      list.removeChild(item);
    }
  });
}

// Write your code here...
