function populateTodoList(todos) {
  let listElm = document.getElementById("todo-list");

  for(let todo of todos){
    let liElm = document.createElement("li");
    liElm.innerHTML = todo.task;
    listElm.appendChild(liElm);

    let checkBtn = document.createElement("button");
        checkBtn.classList.add("badge", "bg-primary", "rounded-pill");
        let tickElement = document.createElement("i");
            tickElement.classList.add("fa", "fa-check");
            checkBtn.appendChild(tickElement);
            liElm.appendChild(checkBtn);

            checkBtn.addEventListener("click", () => {
              if(liElm.style.textDecoration === "line-through") {
                liElm.style.textDecoration = "";
              }else{
                liElm.style.textDecoration = "line-through";
              }
              todo.completed = !todo.completed;
            });
              
            let deleteBtn = document.createElement("button");
                deleteBtn.classList.add("badge", "bg-primary", "round-pill");
                let binElement = document.createElement("i");
                    binElement.classList.add("fa", "fa-trash");
                    deleteBtn.appendChild(binElement);
                    liElm.appendChild(deleteBtn);
                    deleteBtn.addEventListener("click", () => {
                    listElm.removeChild(liElm);
                    });
                  }
                }

  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
let addBtn = document.getElementByClassName("btn btn-primary mb-3")[0];
    addBtn.addEventListener("click", addNewTodo);

    // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
// The code below prevents the page from refreshing when we click the 'Add Todo' button.
   event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputElement = document.getElementById("todoInput");
    if(inputElement.value === ""){

    }else{
      let ulFlusher = document.getElementById("todo-list");
          ulFlusher.innerHTML= "";
        let newItem = {};
        newItem["task"] = inputElement.value;
        newItem["completed"] = false;
        todos.push(newItem);
        populateTodoList(todos);
    }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let listElm = document.getElementById("todo-list");
  const liElm = document.querySelectorAll("li");
  for (let li of liElm) {
    if (li.style.textDecoration === "line-through") {
      listElm.removeChild(li);
    }
  }
}
const delBtnComp = document.getElementById("remove-all-completed");
delBtnComp.addEventListener("click", deleteAllCompletedTodos);

    