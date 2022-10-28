function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    newItem = document.createElement('li');
    list.appendChild(newItem);
    newItem.innerText = todos[i].task;
    newItem.className = "list-group-item d-flex justify-content-between align-items-center";

    spanElement = document.createElement('span');
    newItem.appendChild(spanElement);
    spanElement.className = "badge bg-primary rounded-pill";

    iElementFirst = document.createElement('i');
    spanElement.appendChild(iElementFirst);
    iElementFirst.className = "fa fa-check";
    iElementFirst.setAttribute("aria-hidden", "true");
    iElementFirst.addEventListener('click', () => {
      if (newItem.style.textDecoration == "line-through") {
        newItem.style.textDecoration = "none"
      }
      else {
        newItem.style.textDecoration = "line-through"
      }
    })
    
    iElementSecond = document.createElement('i');
    spanElement.appendChild(iElementSecond);
    iElementSecond.className = "fa fa-trash";
    iElementFirst.setAttribute("aria-hidden", "true");



  }
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
