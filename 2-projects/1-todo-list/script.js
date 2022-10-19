function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.map((todo)=>{
    let itemListEl = document.createElement("li");
    let spanEl =document.createElement("span");
    let iconAdd=document.createElement("i");
    let iconRemove=document.createElement("i");

    itemListEl.innerText=todo.task;

    itemListEl.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    spanEl.classList.add("badge", "bg-primary", "rounded-pill");
    iconAdd.classList.add("fa", "fa-check");
    iconRemove.classList.add("fa", "fa-trash");
    iconAdd.setAttribute("aria-hidden", true);
    iconRemove.setAttribute("aria-hidden", true);

    list.append(itemListEl);
    itemListEl.appendChild(spanEl);
    spanEl.append(iconAdd,iconRemove);

    iconAdd.addEventListener("click",()=>{
      itemListEl.classList.toggle("line-through");
    });

    iconRemove.addEventListener("click",()=>{
      list.removeChild(itemListEl);
    })
    
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
  let input = document.getElementById("todoInput");
  if(input.value===" "){
    alert("Please input the task!")
  } else {
    populateTodoList([{ task: input.value, completed: false }]);
    input.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
let btnFinder = document.querySelector(".col-auto");
let deleteAllBtn = document.createElement("button");
deleteAllBtn.className = "btn btn-danger mb-3";
deleteAllBtn.innerText = "Delete ToDo-List";
btnFinder.appendChild(deleteAllBtn);
deleteAllBtn.addEventListener("click",deleteAllCompletedTodos);

function deleteAllCompletedTodos(event) {
  // Write your code here...
    
    event.preventDefault();
    let itemLists = document.querySelectorAll("li");
    itemLists.forEach((item) => {  
      if (Array.from(item.classList).includes("line-through")) {
       item.remove();
      }
    });
  
  
   
}
