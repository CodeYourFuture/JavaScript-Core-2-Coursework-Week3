// Get DOM elements
const addTodo = document.getElementById('add-todo');
const eventsInTodoList = document.querySelector('#todo-list');
const btnRemoveAll = document.querySelector('#remove-all-completed');

const populateTodoList = (todos) => {
  const result = todos.reduce((acc, { id, task, completed, deadline }) => {
    const completedTodo = completed ? 'line-through' : 'none';
    const listItem = `
      <li style="text-decoration: ${completedTodo};" data-id="${id}" id="task" class="list-group-item d-flex justify-content-between align-items-center">
        ${task}
        <span>${deadline} days left</span>
        <span class="badge bg-primary rounded-pill">
          <i data-id="${id}" id="btn-complete" class="fa fa-check"></i>
          <i data-id="${id}" id="btn-remove" class="fa fa-trash"></i>
        </span>
      </li>
    `;
    return acc + listItem;
  }, '');
  $('#todo-list').html(result);
};

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false, id: Date.now(), deadline: 0},
  { task: "Do the shopping", completed: false, id: Date.now() + 1, deadline: 0},
];

populateTodoList(todos);

function completeTodoTask(event) {
  const id = Number(event.target.dataset.id);
  todos.map((elem) => {
    if (elem.id === id) {
      elem.completed ? elem.completed = false : elem.completed = true
  }});
  populateTodoList(todos);
}

function removeTodoTask (event) {
  const id = Number(event.target.dataset.id);
  todos.forEach((elem, index) => {
  if (elem.id === id) {
    todos.splice(index, 1);
  }
})
populateTodoList(todos);
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = $('#todoInput').val();
  let inputDate = $('#todoDate').val();
  const deadline = inputDate !== '' ? Math.floor((Date.parse(inputDate) - Date.now()) / 86400000) : 0;
  if (input !== '') {
    todos.push({task: input, completed: false, id: Date.now(), deadline: deadline});
  }
  $('#todoInput, #todoDate').val('');
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter(todo => !todo.completed);
  populateTodoList(todos);
}

addTodo.addEventListener("click", (event) => {
  addNewTodo(event);
})

eventsInTodoList.addEventListener("click", (event) => {
  if (event.target.id === 'btn-complete') {
    completeTodoTask(event);
  } else if (event.target.id === 'btn-remove') {
    removeTodoTask(event);
  }
});

btnRemoveAll.addEventListener("click", () => {
  deleteAllCompletedTodos();
})



