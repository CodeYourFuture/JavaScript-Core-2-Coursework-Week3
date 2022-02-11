function populateTodoList(todos) {
   let list = document.getElementById("todo-list");
 
  
      let liEl=document.createElement('li')
      liEl.className='list-group-item d-flex justify-content-between align-items-center'
      liEl.innerHTML=todos[todos.length-1].task

      let spanEl=document.createElement('span')
      spanEl.className=('badge bg-primary rounded-pill')

      liEl.appendChild(spanEl)
      list.appendChild(liEl)

      let checkiEl=document.createElement('i');
      checkiEl.className= 'fa fa-check';
      checkiEl.ariaHidden;
      checkiEl.addEventListener('click', () =>{
        if(liEl.style.textDecoration==='none'){
          liEl.style.textDecoration = 'line-through'
        } else {
          liEl.style.textDecoration = 'none'
        }
      })
        
      let trashiEl=document.createElement('i');
      trashiEl.className='fa fa-trash';
      trashiEl.ariaHidden;
      trashiEl.addEventListener('click', () =>{
        liEl.remove()
      });

      spanEl.appendChild(checkiEl)
      spanEl.appendChild(trashiEl)

      
  }


let todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {

  event.preventDefault();
  let inputEl= document.getElementById('todoInput');
  let inputValueEl =inputEl.value
  todos.push({task: inputValueEl, completed: false})
  inputEl.value=''
  populateTodoList(todos)

}


//populateTodoList(todos);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
