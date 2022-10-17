let unorderedList=document.getElementById("todo-list");
// // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
function populateTodoList(todos) { 
  // 
  todos.forEach(todo => {
    //create elements
    let list=document.createElement("li");
    let span=document.createElement("span");
    let icon1=document.createElement("i");
    let icon2=document.createElement("i");

    //add text content,class name and attributes
    list.innerHTML=todo.task;
    list.classList.add("list-group-item" ,"d-flex", "justify-content-between", "align-items-center");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    icon1.classList.add("fa", "fa-check");
    icon1.setAttribute("aria-hidden",true);
    icon2.classList.add("fa", "fa-trash");
    icon2.setAttribute("aria-hidden",true);

    // append child element
    span.appendChild(icon1);
    span.appendChild(icon2);
    list.appendChild(span);
    unorderedList.appendChild(list);

    // add Events
    icon1.addEventListener("click", () => {
      if (list.classList.contains("complete")) {
        list.classList.remove("complete");
        todo.completed = false;
      } else {
        list.classList.add("complete");
        todo.completed = true;
      }
    });
    icon2.addEventListener("click", () => {
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
  let inputEl=document.getElementById("todoInput");
  populateTodoList([{task: inputEl.value, completed: false }]);
  inputEl.value="";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let listOfTodos=document.querySelectorAll("li")
  listOfTodos.forEach(todo => {
    if(todo.classList.contains("complete"))
    unorderedList.removeChild(todo);
  });
}