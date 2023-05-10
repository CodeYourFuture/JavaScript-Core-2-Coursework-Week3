function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
 

  for (let todo of todos) {
    let listLi = document.createElement("li");
    listLi.className = "list-group-item d-flex justify-content-between align-items-center";
    listLi.innerText = todo.task;
    list.appendChild(listLi);

    let spanLi = document.createElement("span");
    listLi.appendChild(spanLi);

    let checkLine = document.createElement("i");
    checkLine.class = "fa fa-check";
    checkLine.addEventListener("click", () => {
      listLi.style.textDecoration === "line-through" ? (listLi.style.textDecoration = "") : (listLi.style.textDecoration = "line-through");
    });
    spanLi.appendChild(checkLine);

    let deleteLi = document.createElement("i");
    deleteLi.className = "fa fa-trash";
    deleteLi.addEventListener("click", () => list.removeChild(listLi));
    spanLi.appendChild(deleteLi);
  }


}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo
// to the bottom of the todo list. These new todos will need the completed and 
// delete buttons adding like normal.

 let addbutton = document.querySelector(".btn");
 addbutton.addEventListener("click", addNewTodo);
 


function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.getElementById("todoInput");
  populateTodoList([{ task: input.value , completed: false}]);
  input.value = "";
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones 
// are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {

  let li = document.querySelector("li");
  let list = document.getElementById("todo-list");
  for (let listLi of li) {
    if (listLi.style.textDecoration === "line-through") {
      list.removeChild(listLi);
    }
  }
  // Write your code here...
}

let removeCompletedTasks = document.querySelector("#remove-all-completed");
removeCompletedTasks.addEventListener("click", deleteAllCompletedTodos);
