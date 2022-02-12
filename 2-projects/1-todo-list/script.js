const list = document.getElementById('todo-list')
const input = document.getElementById('todoInput');

function populateTodoList(todos) {
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let currentList = 0; currentList < todos.length; currentList++) {
    let newToDoList = document.createElement('li');
    newToDoList.innerHTML = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    ${todos[currentList].task}
    <span class="badge bg-primary rounded-pill">
      <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </span>
  </li>`
    list.appendChild(newToDoList);
  

    
   
  }
  input.value = ' ';
  
  
  

}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newToDoItem = input.value;
  const newToDoArr = []
 
  const newListObj = {task: newToDoItem, completed: false};
  newToDoArr.push(newListObj)

  
  populateTodoList(newToDoArr);
  let checkMarkBtn = document.querySelector('.fa-check')
  let newItem = document.querySelector(".list-group-item");
  crossCompletedItem(checkMarkBtn, newItem )
  newToDoItem = ' '




}
function crossCompletedItem(btn, li) {

  btn.addEventListener('click', () => {
    li.classList.toggle('cross')
  })
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
