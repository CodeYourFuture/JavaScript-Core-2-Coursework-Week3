
const mainDiv = document.getElementById('content');
function todoList(todos) {
  // Write your code here...
  const list = todos.map(item =>{
   return `<ul>
      <li class="line">${item.todo}</li>
    </ul>`
  }).join('');
 mainDiv.innerHTML = list;
 const style = document.querySelectorAll('.line');
 style.forEach(ps =>{
  ps.addEventListener('click', () =>{
    if(ps.classList.contains('ligne')){
      ps.classList.remove('ligne');
    }else{
      ps.classList.add('ligne');
    }
  })
 });
};


// const style = document.querySelectorAll('.line');
// console.log(style);

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);