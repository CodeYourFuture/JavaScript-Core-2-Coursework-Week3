function todoList(todos) {

  let myToDoList = document.getElementById('content');
  let myToDos = document.createElement('ul');
  myToDoList.appendChild(myToDos);

  todos.map((item) =>{
    let theToDo = document.createElement('li');
    let todo = document.createElement('p');
    todo.innerText = item.todo;
    myToDos.appendChild(theToDo);
    theToDo.appendChild(todo);
    todo.style.cursor = 'pointer';
   

    todo.addEventListener("click", function () {
      todo.style.textDecoration = 'line-through';
      todo.addEventListener("click", function (){
        if(todo.style.textDecoration = 'line-through'){
          todo.style.textDecoration = 'none'
        }
        todo.addEventListener('click', function(){
          todo.style.textDecoration = 'line-through'
        })
      })
      });
    })
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);

