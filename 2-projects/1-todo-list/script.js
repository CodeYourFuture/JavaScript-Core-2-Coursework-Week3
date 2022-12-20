function createListItem(todo){
  const li = document.createElement("li");
  const tickSymbol = document.createElement("i");
  tickSymbol.classList.add("fa", "fa-check");
  const binSymbol = document.createElement("i");
  binSymbol.classList.add("fa", "fa-trash");

  if(!tickSymbol.onclick) {
    tickSymbol.addEventListener("click", () => {
      todo.completed = !todo.completed;
      if(todo.completed){
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = null;
      }
    })
  }
  if(!binSymbol.onclick) {
    binSymbol.addEventListener("click", () => {
      document.querySelector("ul").removeChild(li);
    })
  }
  if(todo.completed){
    li.style.textDecoration = "line-through";
  }
  li.innerText = todo.task;
  li.appendChild(tickSymbol);
  li.appendChild(binSymbol);
  return li;
}

function appendTodo(todo) {
  let list = document.getElementById("todo-list");
  const li = createListItem(todo);
  list.appendChild(li);
}

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let list = document.getElementById("todo-list");
  todos.forEach((todo) => {
    const listItem = createListItem(todo);
    list.appendChild(listItem);
  })
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
  const { value: newTask} = document.getElementById("todoInput");
  appendTodo({ newTask, completed: false});
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  // Write your code here...
  e.preventDefault();
  const list = document.querySelector("ul");
  const completedTodos = [...document.querySelectorAll("li")].filter((todo) => {
    return todo.style.textDecoration === "line-through";
  });
  completedTodos.forEach((todo) => {
    list.removeChild(todo);
  });
}

const button = document.querySelector(".btn");
button.addEventListener("click", addNewTodo);
document.querySelector("#remove-all-completed").addEventListener("click", deleteAllCompletedTodos);