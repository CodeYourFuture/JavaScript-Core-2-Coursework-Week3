function todoList(todos) {
  // Creates an unordered list within the content div
  let contentDiv = document.querySelector('#content');
  let todoListContainer = document.createElement('ul');
  contentDiv.appendChild(todoListContainer);

  // loops thorough the array of objects
  todos.forEach((element) => {
    // Creates a li element for every todo
    let todoEl = document.createElement('li');
    todoListContainer.appendChild(todoEl);
    todoEl.innerHTML = element.todo;

    // Event listener for adding a line-through style for todo (li) when clicked
    todoEl.addEventListener('click', () => {
      // An if check to conditionally style tod (li)
      if (todoEl.style.textDecoration === '') {
        todoEl.style.textDecoration = 'line-through';
      } else {
        todoEl.style = '';
      }
    });
  });
}

const todos = [
  { todo: 'wash the dishes' },
  { todo: 'walk the dog' },
  { todo: 'learn javascript' },
  { todo: 'go shopping' },
];

todoList(todos);
