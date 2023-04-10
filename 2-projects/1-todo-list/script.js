function populateTodoList(todoElement) {
  let list = document.getElementById("todo-list");
  list.style.backgroundColor = "white";

  let listItem = document.createElement("li");
  list.appendChild(listItem);

  let listText = document.createElement("p");
  listText.innerText = todoElement.task;
  listItem.appendChild(listText);

  let completeIcon = document.createElement("i");
  completeIcon.className = "fa fa-check";
  completeIcon.innerText = " completed........";
  listItem.appendChild(completeIcon);

  completeIcon.addEventListener("click", () => {
    listItem.style.textDecoration === "line-through"
    ? listItem.style.textDecoration = "none"
     : listItem.style.textDecoration = "line-through";
  })

  let deleteButton = document.createElement("i");
  deleteButton.classList = "fa fa-trash";
  deleteButton.innerText = " delete ";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);

  })
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

todos.forEach(todo => populateTodoList(todo));
// populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
 function addNewTodo(event) {
  
  event.preventDefault();

  let newInput = document.querySelector("#todoInput");
  todos.push({task: newInput.value, completed: false});
  
  populateTodoList(todos[todos.length-1]);
  document.querySelector("#todoInput").value = "";

  }

  document.querySelector("#addbtn").addEventListener("click", addNewTodo);

  // Write your code here... and remember to reset the input field to be blank after creating a todo!


// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  const itemList = Array.from(document.querySelectorAll("li"));
  
  for (item of itemList) {
    if (item.style.textDecoration === "line-through"){
         item.remove();
    }
  }
  
}
document.querySelector("#remove-all-completed").addEventListener("click", deleteAllCompletedTodos);
