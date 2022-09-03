

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];


const firstDiv = document.getElementById('content');

// EVENT LISTER
todos.forEach(todo => {
  firstDiv.addEventListener('click', function(e){
    e.target.style.textDecoration = "line-through";
});

})
// EVENT LISTER - END

function todoList() {
  todos.forEach((element) => { 
  content += `<div class="list-container">
  <ul>
  <li class="my-list"> ${element.todo} </li>
  </ul>
  </div>`
});
firstDiv.innerHTML = content
};

todoList()

