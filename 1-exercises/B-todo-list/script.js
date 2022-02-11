function todoList(todos) {
  // Write your code here...
  let divContent = document.getElementById('content')
  let unorderList = document.createElement('ul')
  divContent.appendChild(unorderList)
  for ( let x of todos){
    let list = document.createElement('li')
    list.innerHTML = `todo: ${x.todo}`
    list.addEventListener('click', ()=>{
      let line = list.style.textDecoration
      if(line === 'line-through'){
        list.style.textDecoration = 'none'
      } else {
        list.style.textDecoration = 'line-through'
      }
    })
    unorderList.appendChild(list)
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);