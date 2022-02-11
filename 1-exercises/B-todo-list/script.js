let contentEl = document.getElementById('content')
let todoUlEl = document.createElement('UL')


function todoList(todos) {
  for(let i=0; i<todos.length; i++){

    let todoParEl= document.createElement('p');
    todoParEl.innerHTML= todos[i].todo;

    let todoLiEl = document.createElement('LI')
    todoLiEl.appendChild(todoParEl)

    todoParEl.className = 'todoLi-no-style'
    todoParEl.addEventListener('click', () => {
      if(todoParEl.className === 'todoLi-no-style'){
        todoParEl.className = 'todoLi'
      }
      else {
        todoParEl.className = 'todoLi-no-style'
      }
    });

    todoUlEl.appendChild(todoLiEl)
    contentEl.appendChild(todoUlEl)
  }  
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);