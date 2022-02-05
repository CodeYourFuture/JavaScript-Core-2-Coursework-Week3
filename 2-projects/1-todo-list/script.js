function createButtons(id) {
  const buttonSpan = document.createElement('span');
  buttonSpan.classList.add('badge', 'bg-primary', 'rounded-pill');
  const checkButton = document.createElement('i');
  checkButton.classList.add('fa', 'fa-check');
  checkButton.setAttribute('aria-hidden', 'true');
  checkButton.addEventListener('click', () => {
    document.getElementById(id).classList.toggle('strike');
  });

  const trashButton = document.createElement('i');
  trashButton.classList.add('fa', 'fa-trash');
  trashButton.setAttribute('aria-hidden', 'true');
  trashButton.addEventListener('click', () => {
    todos.splice(id, 1);
    console.log(todos);
    populateTodoList(todos);
  });
  buttonSpan.appendChild(checkButton);
  buttonSpan.appendChild(trashButton);
  return buttonSpan;
}

function populateTodoList(todos) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, id) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.style.textDecoration = todo.completed ? 'line-through' : null;
    item.setAttribute('id', id);
    item.innerText = todo.task;
    item.appendChild(createButtons(id));
    list.appendChild(item);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: true },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  todos.push({ task: document.getElementById('todoInput').value, completed: false });
  populateTodoList(todos);
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter((e) => e.completed);
}
