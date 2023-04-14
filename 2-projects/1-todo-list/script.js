let todos = [];

function populateTodoList(todos) {
  let ListOfToDo = document.getElementById("todo-list");
  while (ListOfToDo.hasChildNodes()){
    ListOfToDo.firstChild.remove()
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach(todo => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.task;
    console.log(todo)
    ListOfToDo.appendChild(listItem);
  });
}
// {/* <span class="badge bg-primary rounded-pill">
//                   <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
//                   <i class="fa fa-check" aria-hidden="true"></i>
//                   <i class="fa fa-trash" aria-hidden="true"></i>
//                 </span> */}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputFromAddToDo = document.querySelector(".form-control");
  const toDoTask = inputFromAddToDo.value;
  if (toDoTask.trim() !== ""){
    const newToDo = {};
    newToDo.task = toDoTask;
    newToDo.completed = false;
    todos.push(newToDo);

  }
    populateTodoList(todos);

}
const addNewTodoBtn = document.querySelector("#add-new-todo")
addNewTodoBtn.addEventListener("click", addNewTodo)

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }