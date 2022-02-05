function todoList(todos) {
  const container = document.getElementById('content');
  container.style.backgroundImage = 'url(https://images.unsplash.com/photo-1529072718168-514a0d4ad1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)';
  container.style.minHeight = '100vh';
  container.classList.add('d-flex', 'justify-content-center', 'align-items-center');
  let listTODO = '';
  todos.forEach(({ todo }, id) => {
    listTODO = listTODO.concat(`<li class="list-group-item btn" id="todo${id}" role='button'>${todo}</li>`);
  });
  container.insertAdjacentHTML('afterbegin', `<ul class="list-group">${listTODO}</ul>`);
  todos.forEach((_, id) => {
    document.getElementById(`todo${id}`).addEventListener('click', () => {
      document.getElementById(`todo${id}`).classList.toggle('strike');
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
