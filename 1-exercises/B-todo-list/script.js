const content = document.querySelector('#content')
function todoList(todos) {
  let ul = document.createElement('ul')
  for (let toDoItem of todos) {
    let li = document.createElement('li');
    li.innerText = toDoItem.todo;
    li.addEventListener('click', () => {
      li.classList.toggle('cross')
    })
    ul.appendChild(li)
  }
  content.appendChild(ul)
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);