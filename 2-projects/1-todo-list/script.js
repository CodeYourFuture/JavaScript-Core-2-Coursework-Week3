/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
const dueDateInput = document.getElementById('due-date');

dueDateInput.value = `${yyyy}-${mm > 9 ? mm : '0'.concat(mm)}-${dd > 9 ? dd : '0'.concat(dd)}`;
dueDateInput.setAttribute('min', dueDateInput.value);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

let todos = [
  { task: 'Wash the dishes', completed: true, dueDate: tomorrow },
  { task: 'Do the shopping', completed: false, dueDate: tomorrow },
];

function populateTodoList(todoList) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todoList.forEach((todo, id) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.style.textDecoration = todo.completed ? 'line-through' : null;
    item.setAttribute('id', id);
    item.innerText = todo.task;

    const dueDate = document.createElement('em');
    const countDays = Math.ceil((todo.dueDate.getTime() - new Date().getTime()) / 24 / 3600 / 1000);
    const dueText = countDays < 1 ? 'Due Today' : countDays === 1 ? 'Due Tomorrow' : `Due in ${countDays} days`;
    dueDate.innerText = dueText;

    item.appendChild(dueDate);
    item.appendChild(createButtons(id));
    list.appendChild(item);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
populateTodoList(todos);

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
    populateTodoList(todos);
  });
  buttonSpan.appendChild(checkButton);
  buttonSpan.appendChild(trashButton);
  return buttonSpan;
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  todos.push({ task: document.getElementById('todoInput').value, completed: false, dueDate: new Date(document.getElementById('due-date').value) });
  populateTodoList(todos);
  document.getElementById('todoInput').value = '';
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter((e) => !e.completed);
  populateTodoList(todos);
}
