
function populateTodoList(todos) {
  let list = document.getElementById('todo-list');

  // Loops through the todos array renders an element accordingly
  todos.forEach((todo) => {
    let todoEl = document.createElement('li');
    todoEl.innerHTML = todo.task; // Adds a text to the li from the array of objects
    todoEl.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );
    let spanEl = document.createElement('span');
    spanEl.classList.add('badge', 'bg-primary', 'rounded-pill');
    let checkEl = document.createElement('i');
    checkEl.classList.add('fa', 'fa-check');
    let trashEl = document.createElement('i');
    trashEl.classList.add('fa', 'fa-trash');
    trashEl.style.marginLeft = '5px';
    spanEl.appendChild(checkEl);
    spanEl.appendChild(trashEl);
    todoEl.appendChild(spanEl);
    list.appendChild(todoEl);

    // Adds a line through conditionally on the task element text when the checked icon is clicked
    checkEl.addEventListener('click', () => {
      if (todoEl.style.textDecoration === '') {
        todo.completed = true;
        todoEl.style.textDecoration = 'line-through';
      } else {
        todo.completed = false;
        todoEl.style.textDecoration = '';
      }
    });

    // Deletes the entire task element
    trashEl.addEventListener('click', () => {
      list.removeChild(todoEl);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoInputEl = document.querySelector('#todoInput').value; // Reads the value of the #todoInput element
  let todoObj = { task: todoInputEl, completed: false }; // Assigns a new task to an object
  todos.push(todoObj); // Pushes the todoObj to global todos array
  let newTodo = [todoObj]; // Adds todoObj to an array
  populateTodoList(newTodo); // This function is called now with the newTodo as the parameter
  document.querySelector('#todoInput').value = ''; // Resets the form input field to an empty field
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  let list = document.getElementById('todo-list');
  let todoEL = document.querySelectorAll('li');
  todoEL.forEach((todoLi) => {
    // Deletes the todo text which only have a line through style
    if (todoLi.style.textDecoration === 'line-through') {
      list.removeChild(todoLi);
    }
  });
}