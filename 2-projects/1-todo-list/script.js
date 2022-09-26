function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.map((todo) => {
    let item = document.createElement("li");
    let span = document.createElement("span");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");

    item.innerText = todo.task;
    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    span.classList.add("badge", "bg-primary", "rounded-pill");
    icon1.classList.add("fa", "fa-check");
    icon2.classList.add("fa", "fa-trash");
    icon1.setAttribute("aria-hidden", true);
    icon2.setAttribute("aria-hidden", true);

    list.appendChild(item);
    item.appendChild(span);
    span.append(icon1, icon2);
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
