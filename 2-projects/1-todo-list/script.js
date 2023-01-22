function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML='';
  todos.forEach((todo, idx) => {
    const todoItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      delete todos[idx];
      populateTodoList(todos);
    });
    const li = document.createElement('li');
    li.innerText = todo.task;
    todoItem.appendChild(li);
    li.style.color = 'red';
    todoItem.appendChild(deleteButton);
    list.appendChild(todoItem);
  })
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
  const inputValue = document.getElementById('todoInput');
  const newTodoItem = {
    task: inputValue.value,
    completed : false
  }
  todos.push(newTodoItem);
  populateTodoList(todos);
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
/*
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = '';
  todos.forEach((todo, idx) => {
    const todoItem = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', () => {
      delete todos[idx];
      populateTodoList(todos);
    });
    const li = document.createElement('li');
    li.innerText = todo.task;
    li.style.color = "red";
    todoItem.appendChild(li);
    todoItem.appendChild(deleteButton);
    list.appendChild(todoItem);
  })
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
  const inputValue = document.getElementById("todoInput");
  const newTodoItem = {
    task: inputValue.value,
    completed: false
  }
  todos.push(newTodoItem);
  populateTodoList(todos);
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
*/