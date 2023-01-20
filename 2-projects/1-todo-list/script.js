function populateTodoList(todos) {
  let todoItemButtonContainer = document.getElementById("todo-list");
  todoItemButtonContainer.innerHTML = '';

  for(let item of todos){
    const todoItem = document.createElement('li');
    todoItem.className = "list-group-item d-flex justify-content-between align-items-center";
    if(item.completed === true) {
      todoItem.classList += ' text-decoration-line-trough';
    }
  todoItem.innerHTML = item.task;
  const todoItemButtonContainer = document.createElement('span');
  todoItemButtonContainer.className = 'badge bg-primary rounded-pill';
  todoItem.appendChild(todoItemButtonContainer);

  const checkIcon = document.createElement('i');
  checkIcon.className = ' fa fa- check';
  checkIcon.onclick = () => {
    const newTodos = todos.map((todo) => {
    if(todo.task === item.task){
      return{...todo, completed: !todo.completed };
    }
    return todo;
  });
populateTodoList(newTodos);
  };
  
  todoItemButtonContainer.appendChild(checkIcon);
  const deleteIcon = document.createElement('i');
  deleteIcon.className ='fa fa-trash';
  deleteIcon.onclick = () => {
    const newTodos = todos.filter((todo) => todo.task !== item.task);

  

  populateTodoList(newTodos);
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
};
todoItemButtonContainer.appendChild(deleteIcon);
todoItemButtonContainer.appendChild(todoItem);
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
  const input = document.getElementById('todoInput');
  if(input.value === '') return;
  todos.push({ task: input.value,completed: false });
  populateTodoList(todos);
  input.value = '';
}

  
  // Write your code here... and remember to reset the input field to be blank after creating a todo!


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
   event.preventDefault();
  const updatedTodos = todos.filter((item) => item.completed === false);
  populateTodoList(updatedTodos);
}
populateTodoList(todos);
