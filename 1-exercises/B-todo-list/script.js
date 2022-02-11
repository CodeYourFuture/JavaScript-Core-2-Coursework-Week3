function todoList(todos) {
  let divContent = document.querySelector('#content');
  let createUlTag = document.createElement('ul');
  divContent.appendChild(createUlTag);

  for(let todo of todos){
    let createLiTag = document.createElement('li');
    createUlTag.appendChild(createLiTag);

    let displayTodos = document.createElement('p');
    displayTodos.innerText = Object.values(todo);
    createLiTag.appendChild(displayTodos);

    let addButton = document.createElement('input');
    addButton.type = 'submit';
    addButton.value = 'completed';
    createLiTag.appendChild(addButton);

    addButton.addEventListener('click', () => {
      if(createLiTag.style.textDecoration == 'line-through'){
        createLiTag.style.textDecoration = 'none';
        }
        else {
            createLiTag.style.textDecoration = 'line-through';              
        }
    }
    )
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);