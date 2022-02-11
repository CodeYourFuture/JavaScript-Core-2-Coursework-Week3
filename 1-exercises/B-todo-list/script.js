divElement = document.querySelector('#content');
function todoList(todos) {
  // Write your code here...
  unorderedList = document.createElement('ul');
  result = todos.forEach(todo => {
  let list = document.createElement("li")
  list.innerHTML = todo.todo;

  //line through
  list.addEventListener("click", () =>{
  if (list.style.textDecoration === 'line-through'){
    list.style.textDecoration = '';
  } else {
    list.style.textDecoration = 'line-through';
  }
  })
  divElement.append(unorderedList); // ul inside div
  unorderedList.append(list); // list inside ul
  })
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);