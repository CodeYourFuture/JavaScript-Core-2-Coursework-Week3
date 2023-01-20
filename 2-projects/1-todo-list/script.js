function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((todo) => {
    const element = document.createElement("li");
    element.innerText = todo.task;
    element.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";
    // badge.innerText = "Test";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.onclick = function () {
      element.classList.toggle("completed");
    };

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.onclick = function () {
      list.removeChild(element);
    };

    badge.appendChild(checkIcon).style.fontSize = "16px";
    badge.appendChild(checkIcon).style.padding = "0 16px 0 0";
    badge.appendChild(trashIcon).style.fontSize = "16px";
    element.appendChild(badge);

    list.appendChild(element);
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
  let todoInput = document.getElementById("todoInput");
  populateTodoList([{ task: todoInput.value, completed: false }]);

  todoInput.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();

  document.querySelectorAll(".completed").forEach((e) => e.remove());
}
