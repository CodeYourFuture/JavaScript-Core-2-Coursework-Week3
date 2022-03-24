const content = document.querySelector('#content');

function toggleIsCompleted(event) {
  const targetedTodo = event.target;
  targetedTodo.classList.toggle('is-complete');
}


function todoList(todos) {
  // Write your code here...
  const todoList = document.createElement('ul');
  todos.forEach(({ todo }) => {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo;
    todoItem.addEventListener('click', toggleIsCompleted);
    todoList.appendChild(todoItem);
  });

  content.appendChild(todoList);

}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);