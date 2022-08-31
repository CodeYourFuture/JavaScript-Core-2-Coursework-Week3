

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

// const myTodo = document.getElementById('content')
// function todoList() {
  // Write your code here...

//   todos.forEach((element) => { 
  
//     content += '<div class="list">
//     <ul>
//       <li class="listed--items"> ${element}</li>
//     </ul> 
//     </div>'
//     });
//   };

//   myTodo.innerHTML = content

// todoList();


const firstDiv = document.getElementById('content');

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

