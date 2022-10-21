function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  const deleteTask = (event) => {
    const currnetElement = event.target;
    const listElement = currnetElement.parentElement.parentElement;
    const filteredTodos = todos.filter(
      (item) => item["task"] !== listElement.innerText
    );
    todos = [...filteredTodos];
    listElement.remove();
  };
  const markTaskDone = (event) => {
    const currnetElement = event.target;
    const listElement = currnetElement.parentElement.parentElement;

    if (!listElement.style.textDecoration)
      listElement.style.textDecoration = "line-through";
    else listElement.style.textDecoration = "";
  };

  const listElementParent = document.querySelector("#todo-list");
  todos.forEach((item, index) => {
    const listElement = document.createElement("li");
    listElement.id = index;
    listElement.innerText = item["task"];
    if (item["completed"]) listElement.style.textDecoration = "line-through";
    listElement.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const spanElement = document.createElement("span");
    spanElement.classList.add("badge", "bg-primary", "rounded-pill");
    const iconTrash = document.createElement("i");
    iconTrash.classList.add("fa", "fa-trash");
    iconTrash.ariaHidden = "true";
    const iconDone = document.createElement("i");
    iconDone.classList.add("fa", "fa-check");
    iconDone.ariaHidden = "true";
    listElement.appendChild(spanElement);
    spanElement.appendChild(iconDone);
    spanElement.appendChild(iconTrash);
    listElementParent.appendChild(listElement);

    iconTrash.addEventListener("click", deleteTask);
    iconDone.addEventListener("click", markTaskDone);
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

  const newTask = document.getElementById("todoInput").value;
  const newTaskObj = { task: newTask, completed: false };
  const newTaskArr = [];
  newTaskArr.push(newTaskObj);
  populateTodoList(newTaskArr);
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  const allTasks = document.querySelectorAll("li");
  allTasks.forEach((task) => {
    if (task.style.textDecoration) task.remove();
  });
}
// Write your code here...
