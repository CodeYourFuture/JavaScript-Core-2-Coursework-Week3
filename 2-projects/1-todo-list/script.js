function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  //function should iterate over the list of todos
  for (let todo of todos) {
    //create a `<li>`
    let tasks = document.createElement("li");
    tasks.innerText = todo.task;
    list.appendChild(tasks);
    //create completed tasks button
    let completedTaskBtn = document.createElement("button");
    completedTaskBtn.innerText = "Completed";
    completedTaskBtn.addEventListener("click", function () {
      todo.completed = true;
      tasks.style.textDecoration = "line-through";
    });
    tasks.appendChild(completedTaskBtn);

    //create delete tasks button
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete";
    deleteTaskBtn.addEventListener("click", function () {
      tasks.style.display = "none";
    });
    tasks.appendChild(deleteTaskBtn);
  }
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
  let addInput = document.querySelector("#todoInput");
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
