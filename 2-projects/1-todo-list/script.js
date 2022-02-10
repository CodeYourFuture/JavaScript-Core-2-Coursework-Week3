// Write your code to create todo list elements with completed and delete buttons here,
//all todos should display inside the "todo-list" element.
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((todoTask, index) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const pTag = document.createElement("p");

    for (let i = 0; i < 2; i++) {
      const iElement = document.createElement("i");
      if (i === 1) {
        iElement.className = "fa fa-trash";
      } else {
        iElement.className = "fa fa-check";
      }

      iElement.ariaHidden = "true";
      spanElement.appendChild(iElement);
    }

    pTag.innerText = todoTask.task;
    liElement.appendChild(pTag);
    spanElement.className = "badge bg-primary rounded-pill";
    liElement.appendChild(spanElement);
    liElement.className =
      "list-group-item d-flex justify-content-between align-items-center";
    if (index === 1) {
      liElement.style = "text-decoration: line-through";
    }

    list.appendChild(liElement);
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
