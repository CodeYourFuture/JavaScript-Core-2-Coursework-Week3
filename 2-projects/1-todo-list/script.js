function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    // creating <li>, appending it to the <ul> and connecting it to the array
    let myTask = document.createElement("li");
    myTask.className =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(myTask);
    myTask.innerText = todo.task;

    // creating the <span> and appending it

    let mySpan = document.createElement("span");
    mySpan.className = "badge bg-primary rounded-pill";
    myTask.appendChild(mySpan);

    // creating the <i> tags
    let addIcon = document.createElement("i");
    addIcon.className = "fa fa-check";
    addIcon.setAttribute("aria-hidden", true);
    mySpan.appendChild(addIcon);

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";
    deleteIcon.setAttribute("aria-hidden", true);
    mySpan.appendChild(deleteIcon);

    // creating the logic for the deleting of completed tasks
    addIcon.addEventListener("click", () => {
      if (myTask.style.textDecoration === "line-through") {
        myTask.style.textDecoration = "none";
      } else {
        myTask.style.textDecoration = "line-through";
      }
    });

    deleteIcon.addEventListener("click", () => {
      if (myTask.style.textDecoration === "line-through") {
        myTask.remove();
      }
    });
  });
  //end of code
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
  let inputs = document.getElementById("todoInput");
  let addInput = inputs.value;
  if (!addInput) {
    return;
  }
  todos.push({
    task: addInput,
    completed: false,
  });
  populateTodoList(todos);
  inputs.value != "";
  //end of code
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
