function todoList(todos) {
  // Write your code here...
  const container = document.getElementById('content');
  const unorderedList = document.createElement('ul');
  container.appendChild(unorderedList)

  todos.forEach(todo=> {
    const myTask = document.createElement('li');
    myTask.innerText = todo.todo;
    unorderedList.appendChild(myTask);
    myTask.addEventListener('click', () => {
      // if (myTask.style.textDecoration === 'line-through') {
      //   myTask.style.textDecoration = 'none'
      // } else {myTask.style.textDecoration = 'line-through'};
      myTask.classList.toggle('line-through')
    })

  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);