function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerText = item.task;
    listItem.style.color = "white";
    list.appendChild(listItem);
    const spanElement = document.createElement("span");
    spanElement.className = "badge bg-primary rounded-pill";
    listItem.appendChild(spanElement);
    const iCheck = document.createElement("i");
    iCheck.className = "fa fa-check";
    iCheck.ariaHidden = "true";
    spanElement.appendChild(iCheck);
    const iTrash = document.createElement("i");
    iTrash.className = "fa fa-trash";
    iTrash.ariaHidden = "true";
    spanElement.appendChild(iTrash);
    iCheck.addEventListener("click", () => {
      listItem.style.textDecoration =
        listItem.style.textDecoration === "line-through"
          ? (listItem.style.textDecoration = "none")
          : (listItem.style.textDecoration = "line-through");
      iTrash.addEventListener("click", () => {
        listItem.remove();
      });
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
  let addedTodo = document.getElementById("todoInput");
  todos.push({ task: addedTodo.value, completed: false });
  populateTodoList(todos)
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const list = document.querySelectorAll("li");
  const removeButton = document.querySelector("#remove-all-completed");
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    list.forEach((item) => {
      if (item.style.textDecoration === "line-through") item.remove();
    });
  });
}
deleteAllCompletedTodos();
