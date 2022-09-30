let unorderedList=document.getElementById("todo-list");
function populateTodoList(todos) { 
  todos.forEach(todo => {

    let list=document.createElement("li");
    let span=document.createElement("span");
    let icon_1=document.createElement("i");
    let icon_2=document.createElement("i");


    list.innerHTML=todo.task;
    list.classList.add("list-group-item" ,"d-flex", "justify-content-between", "align-items-center");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    icon_1.classList.add("fa", "fa-check");
    icon_1.setAttribute("aria-hidden",true);
    icon_2.classList.add("fa", "fa-trash");
    icon_2.setAttribute("aria-hidden",true);

    unorderedList.appendChild(list);
     list.appendChild(span);
    span.append(icon_1 , icon_2);

   
   
// using add() and remove() methods to check if we have class name

    icon_1.addEventListener("click", () => {
      if (list.classList.contains("complete")) {
        list.classList.remove("complete");
        todo.completed = false;
      } else {
        list.classList.add("complete");
        todo.completed = true;
      }
    });
    icon_2.addEventListener("click", () => {
      unorderedList.removeChild(list);
    });
  });
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
  let inputElement=document.getElementById("todoInput");
  populateTodoList([{task: inputElement.value, completed: false }]);
  inputEl.value=""
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let listOfTodos=document.querySelectorAll("li")
  listOfTodos.forEach(todo => {
    if(todo.classList.contains("complete"))
    unorderedList.removeChild(todo);
  });
}
