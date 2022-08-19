function populateTodoList(todos) {
  let list = document.getElementById("todo-list"); //ul
  todos.forEach(x => {
    let listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = x.task;
    let span =  document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    listItem.appendChild(span);
    let italic = document.createElement("i");
    italic.className = "fa fa-check";
    italic.setAttribute('aria-hidden', 'true');
    let italic2 = document.createElement("i");
    italic2.className = "fa fa-trash";
    italic2.setAttribute('aria-hidden', 'true');
   span.append(italic, italic2);
   
  italic.addEventListener("click", () =>{
    if(listItem.style.textDecorationLine === "none"){
      return (listItem.style.textDecorationLine = "line-through" , x.completed = true);
    } else{
      return listItem.style.textDecorationLine = "none";
    }
  });
italic2.addEventListener("click", () =>{
 listItem.parentNode.removeChild(listItem);
})

  list.appendChild(listItem);
  })
  
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
  let newTask = document.getElementById("todoInput");
  let todo = [
    { task: newTask.value, completed: false },
  ]
   populateTodoList(todo);
   newTask.value = " ";
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
//  let tasks = document.querySelectorAll("li");  
// tasks.forEach(x =>{
//   if(x.style.textDecorationLine === "line-through"){
//     x.parentNode.removeChild(x);
//      }})
}
deleteAllCompletedTodos();