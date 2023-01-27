function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
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
  let input = document.getElementById("todoInput"); // get the input element
  let todoTask = input.value; // get the value of the input
  document.getElementById("add-todo").addEventListener("click", () => {
    if (todoTask === "") {
      return; // do not add an empty todo
    }
    let todoList = document.getElementById("todo-list"); // get the todo list element
    let listItem = document.createElement("li"); // create a new list item
    listItem.innerText = todoTask; // set the text of the list item to the todo task
    todoList.appendChild(listItem); // add the list item to the todo list
    input.value = ""; // clear the input field
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    listItem.appendChild(span);
    let checkBtn = document.createElement("i");
    checkBtn.className = "fa fa-check";
    checkBtn.setAttribute("aria-hidden", "true");
    span.appendChild(checkBtn);
    let trashBtn = document.createElement("i");
    trashBtn.className = "fa fa-trash";
    trashBtn.setAttribute("aria-hidden", "true");
    span.appendChild(trashBtn);
    checkBtn.addEventListener("click", () => {
      listItem.style.textDecoration =
        listItem.style.textDecoration === "line-through"
          ? (listItem.style.textDecoration = "none")
          : (listItem.style.textDecoration = "line-through");
    });
    trashBtn.addEventListener("click", () => {
      listItem.remove();
    });
  });
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
