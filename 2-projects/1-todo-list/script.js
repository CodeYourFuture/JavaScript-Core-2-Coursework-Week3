function populateTodoList() {
  let input = document.getElementById("todoInput").value;
  let list = document.getElementById("todo-list");
  let listItem = document.createElement("li");
  let spanItem = document.createElement("span");
  let tickBtn = document.createElement("i");
  let trashBtn = document.createElement("i");
  trashBtn.className = "fa fa-trash";
  trashBtn.ariaHidden = "true";
  trashBtn.addEventListener("click", function() {
    listItem.remove();
  })
  tickBtn.className = "fa fa-check";
  tickBtn.ariaHidden = "true";
  tickBtn.addEventListener("click", function () {
    if (listItem.style.textDecoration !== "line-through") {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.removeProperty("text-decoration")
    }
  });
  spanItem.className = "badge bg-primary rounded-pill";
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  listItem.innerText = input;
  spanItem.appendChild(tickBtn);
  spanItem.appendChild(trashBtn);
  listItem.appendChild(spanItem);
  list.appendChild(listItem);
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  populateTodoList();
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  // Write your code here...
}
