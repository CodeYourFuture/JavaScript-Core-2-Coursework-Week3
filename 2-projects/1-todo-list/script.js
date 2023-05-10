// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// }

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);

// // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// // Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }

// Get references to HTML elements
const taskList = document.getElementById("todo-list");
const taskInput = document.getElementById("todoInput");
const addTaskButton = document.querySelector(".card-body button");

// Event listener for adding tasks
addTaskButton.addEventListener("click", addTask);

// Function to add a new task
function addTask(event) {
  event.preventDefault();

  // Get the value from the input field
  const taskText = taskInput.value.trim();

  // Check if the task text is empty
  if (taskText === "") {
    return;
  }

  // Create a new list item element
  const newTask = document.createElement("li");
  newTask.className = "list-group-item";
  newTask.textContent = taskText;

  // Append the task to the task list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

// Event delegation for completing or deleting tasks
taskList.addEventListener("click", function (event) {
  const target = event.target;

  // Check if the clicked element is a task item (li)
  if (target.tagName === "LI") {
    // Toggle the 'completed' class to mark task as complete
    target.classList.toggle("completed");
  }
});

// Event listener for removing all completed tasks
const removeAllCompletedButton = document.getElementById(
  "remove-all-completed"
);
removeAllCompletedButton.addEventListener("click", function (event) {
  event.preventDefault();

  const completedTasks = taskList.getElementsByClassName("completed");

  // Remove all completed tasks
  while (completedTasks.length > 0) {
    completedTasks[0].remove();
  }
});
