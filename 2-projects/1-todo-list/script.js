function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.map((todoItem) => {
    let itemList = document.createElement("li");
    let spanItem = document.createElement("span");
    let iconCompleted = document.createElement("i");
    let iconDelete = document.createElement("i");

    itemList.innerText = todoItem.task;
    itemList.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    spanItem.classList.add("badge", "bg-primary", "rounded-pill");

    iconCompleted.classList.add("fa", "fa-check");
    iconCompleted.setAttribute("aria-hidden", true);

    iconDelete.classList.add("fa", "fa-trash");
    iconDelete.setAttribute("aria-hidden", true);

    list.appendChild(itemList);
    itemList.appendChild(spanItem);
    spanItem.append(iconCompleted, iconDelete);

    iconCompleted.addEventListener("click", () => {
      if (itemList.classList.contains("completed")) {
        itemList.classList.toggle("line-through", false);
        itemList.classList.remove("completed");
        todoItem.completed = false;
      } else {
        itemList.classList.toggle("line-through");
        itemList.classList.add("completed");
        todoItem.completed = true;
      }
    });

    iconDelete.addEventListener("click", () => {
      list.removeChild(itemList);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newItem = document.getElementById("todoInput");
  populateTodoList([{ task: newItem.value, completed: false }]);
  newItem.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();

  let list = document.getElementById("todo-list");

  let allItems = document.querySelectorAll("li");

  allItems.forEach((item) => {
    if (item.classList.contains("completed")) {
      list.removeChild(item);
    }
  });
}
