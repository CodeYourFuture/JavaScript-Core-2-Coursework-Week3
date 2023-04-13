// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
const todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here,
  // all todos should display inside the "todo-list" element.

  // Pseudocode of steps
  // 1. onclick of AddTodo button I need to:
  // 2. Get input from todoInput and save to a variable
  // 3. createElement ("li") and put the todoInput.value as .innerText
  // 4. .appendChild to the ul

  // get the existent list of todos (below) to appear on the page as a first step
  todos.forEach((todo) => {
    addNewTodo(todo.task, todo.completed);
  });
}

document.getElementById("add-to-do-btn").addEventListener("click", function () {
  let inputValue = document.getElementById("todoInput").value;
  event.preventDefault();
  todos.push({
    task: inputValue,
    completed: false,
  });
  addNewTodo(inputValue, false);
});

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of
// the todo list.These new todos will need the completed and delete buttons adding like normal. ???? WUT ????
function addNewTodo(inputValue, completed) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const pElement = document.createElement("p"); // creating paragraph
  pElement.innerText = `Task: ${inputValue} Completed: ${completed}`; // spitting out task and status

  if (completed === true) {
    pElement.classList.add("completed");
  }
  let list = document.querySelector("#todo-list");

  const taskListElement = document.createElement("li"); // creating list item
  taskListElement.appendChild(pElement); //printing paragraph to list item

  list.appendChild(taskListElement);
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the
// completed ones(we can check which ones are completed by seeing if they have the line - through
// styling applied or not).

document
  .getElementById("remove-all-completed")
  .addEventListener("click", function () {
    let taskItems = document.getElementById("todo-list").children;
    event.preventDefault();

    Array.from(taskItems).forEach((li) => {
      console.log(li.firstChild);
      const classes = li.firstChild.classList;
      if (classes.contains("completed")) {
        li.remove();
      }
    });

    // console.log(taskItems);
  });
