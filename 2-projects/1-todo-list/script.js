function populateTodoList(toDos) {
  let listEle = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all toDos should display inside the "todo-list" element.
  for (let todo of toDos) {
    let liEle = document.createElement("li");
    liEle.innerHTML = todo.task;
    listEle.appendChild(liEle);

  const checkBtn = document.createElement("button");
   checkBtn.classList.add("badge", "bg-primary", "rounded-pill");
   let tickElement = document.createElement("i")
    tickElement.classList.add("fa","fa-check");
    checkBtn.appendChild(tickElement);
    liEle.appendChild(checkBtn);

    checkBtn.addEventListener("click", () => {
      if (liEle.style.textDecoration === "line-through") {
        liEle.style.textDecoration = "";
      } else {
        liEle.style.textDecoration = "line-through";
      }
      todo.completed = !todo.completed;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("badge", "bg-primary", "rounded-pill");
    let binElement = document.createElement("i");
    binElement.classList.add("fa", "fa-trash");
    deleteBtn.appendChild(binElement);
    liEle.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
    listEle.removeChild(liEle);
    });
  }
}

// These are the same toDos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let toDos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(toDos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new toDos will need the completed and delete buttons adding like normal.
const addBtn = document.getElementsByClassName("btn btn-primary mb-3")[0];
addBtn.addEventListener("click", addNewTodo);

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank aft er creating a todo!
  let inputElement = document.getElementById("todoInput");
  let ulFlusher = document.getElementById("todo-list");
    ulFlusher.innerHTML = "";
  if (inputElement.value === "") {
    
  } else {
    let newItem = {};
    newItem["task"] = inputElement.value;
    newItem["completed"] = false;
    toDos.push(newItem);
    populateTodoList(toDos);
  }
}



// Advanced challenge: Write a function that checks the toDos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedToDos(event) {
//   // Write your code here...
//   event.preventDefault();
//   toDos = toDos.filter(todo => !todo.completed);
//   let listEle = document.getElementById("todo-list");
//   // const completedToDos = document.querySelectorAll("liEle.completed");
//   document.querySelectorAll("listEle.completed");
//   completedToDos.forEach(function(){
//     listEle.removeChild()});

//   const liEle = document.querySelectorAll("li");
//   // let child_array = Array.from(liEle.child);
//   for (let li of liEle.child) {
//     if (li.style.textDecoration === "line-through") {
//       listEle.removeChild(li);
//     }
//   }
// }
// const delBtnComp = document.querySelectorAll("remove-all-completed");


// delBtnComp.addEventListener("click", deleteAllCompletedToDos);


