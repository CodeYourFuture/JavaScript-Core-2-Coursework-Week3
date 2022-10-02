function todoList(todos) {
  // Write your code here...

  let myToDoList = document.getElementById('content');
  let myToDos = document.createElement('ul');
  myToDoList.appendChild(myToDos);

  todos.map((item) =>{
    let theToDo = document.createElement('li');
    let todo = document.createElement('p');
    todo.innerText = item.todo;
    myToDos.appendChild(theToDo);
    theToDo.appendChild(todo);
  })

  theToDo.addEventListener("click", () =>{
    if (theToDo.style.textDecoration === 'line-through'){
      theToDo.style.textDecoration = 'none'
    }
    else{
      theToDo.style.textDecoration = 'line-through'
    }
  })

  
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);

