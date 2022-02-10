function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
   todos.forEach((listItem) => {
     let span = document.createElement("span");
     let li = document.createElement("li");
     let i_one = document.createElement("i");
     let i_two = document.createElement("i");
     li.classList.add(
       "list-group-item",
       "d-flex",
       "justify-content-between",
       "align-items-center"
     );
     li.innerText = listItem.task;
     span.classList.add("badge", "bg-primary", "rounded-pill");
     i_one.classList.add("fa", "fa-check");
      i_one.setAttribute("aria-hidden", "true");
      span.appendChild(i_one);
      i_one.addEventListener("click",()=>{
        i_one.parentElement.parentElement.classList.toggle("line-through");
      })
      i_two.addEventListener("click",()=>{
       i_two.parentElement.parentElement.remove(); 
      })
     i_two.classList.add("fa", "fa-trash");
       i_two.setAttribute("aria-hidden", "true");
      span.appendChild(i_two);
       li.appendChild(span);
       list.appendChild(li); 
       
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
