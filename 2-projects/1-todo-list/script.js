function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((todoItem) => {
    //create li element and add classes
    const listElement = document.createElement("li");
    listElement.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    //added task items
    listElement.innerHTML = todoItem.task;

    //created span element and added classes
    const spanElement = document.createElement("span");
    spanElement.classList.add("badge", "bg-primary", "rounded-pill");

    //created i element and added classes
    const infoElement = document.createElement("i");
    infoElement.classList.add("fa", "fa-check");
    infoElement.ariaHidden = "true";

    //add event
    infoElement.addEventListener("click", () => {
      if (listElement.style.textDecoration === "") {
        listElement.style.textDecoration = "line-through";
      } else {
        listElement.style.textDecoration = "";
      }
    });

    //created second i element and added classes
    const infoElementTrash = document.createElement("i");
    infoElementTrash.classList.add("fa", "fa-trash");
    infoElementTrash.ariaHidden = "true";

    //delete event
    infoElementTrash.addEventListener("click", () => {
      listElement.remove();
    });

    spanElement.appendChild(infoElement);
    spanElement.appendChild(infoElementTrash);
    listElement.appendChild(spanElement);
    list.appendChild(listElement);
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
