let list = document.getElementById("todo-list");

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML =" ";
  todos.map(taskToLI);
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  function todoToLi(todo){

    let li = document.createElement("li");
    li.classList = "list-group-item d-flex justify-content-between align-items-center";
    li.innerText = todo.task;
    if (todo.completed) {
      li.setAttribute("style","text-decoration: line-through" );
    }
    let span = document.createElement('span');
    span.classList = 'badge bg-primary rounded-pill';
    let i1 = document.createElement('i');
    i1.classList = "fa fa-check";
    i1.setAttribute("aria-hidden", true);
    let i2 = document.createElement('i');
    i2.classList = "fa fa-trash";
    i2.setAttribute("aria-hidden", true);
    span.appendChild(i1);
    span.appendChild(i2);
    li.appendChild(span);
    list.appendChild(li);
    
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Do homework", completed: false}, 
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
