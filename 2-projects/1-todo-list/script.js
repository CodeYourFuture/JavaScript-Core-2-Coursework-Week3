 function populateTodoList(todos) {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
   
  todos.forEach((todo) => {
      const li = document.createElement("li");
      if (todo.completed) {
        li.classList.add("completed");
      }
  
      li.innerHTML = todo.task;

    const completedButn = document.createElement("button");
    completedButn.innerText = "✓";;
    completedButn.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.classList.toggle("completed");
    });


    const deleteButn = document.createElement("button");
    deleteButn.innerHTML= '<i class="fa fa-trash"></i>';
    deleteButn.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo);
      populateTodoList(todos);
    });

    li.appendChild(completedButn);
    li.appendChild(deleteButn);

    todoList.appendChild(li);
  });
} 


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();

 
  const inputField = document.getElementById("todoInput");
  const newTodoText = inputField.value;

  
  const newTodo = {
    task: newTodoText,
    completed: false
  };

  
  todos.push(newTodo);

 
  populateTodoList(todos);


  inputField.value = "";
}

// Add event listener to the 'Add Todo' button
const addTodoButton = document.querySelector(".btn-primary");
addTodoButton.addEventListener("click", addNewTodo);


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
