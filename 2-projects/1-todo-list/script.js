function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let allList = document.querySelectorAll("li");
  allList.forEach((li) => {
    li.style.textDecoration = "line-through";
  });
  todos.forEach((element) => {
    let newList = document.createElement("li");
    let litterAndThick = document.createElement("span");
    let thick = document.createElement("i");
    let litter = document.createElement("i");

    newList.innerHTML = element.task;

    newList.setAttribute(
      "class",
      "list-group-item justify-content-between align-items-center d-flex"
    );

    litterAndThick.setAttribute("class", "badge bg-primary rounded-pill");

    thick.setAttribute("class", "fa fa-check");
    litter.setAttribute("class", "fa fa-trash");
    thick.setAttribute("aria-hidden", "true");
    litter.setAttribute("aria-hidden", "true");

    list.appendChild(newList);

    newList.appendChild(litterAndThick);
    litterAndThick.appendChild(thick);
    litterAndThick.appendChild(litter);

    thick.addEventListener("click", () => {
      newList.style.textDecoration = "line-through";
    });

    litter.addEventListener("click", () => {
      list.removeChild(newList);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputs = document.querySelector("#todoInput");

  populateTodoList([{ task: inputs.value, completed: false }]);
  inputs.value = "";
}

let deleteBtnPlace = document.querySelectorAll(".col-auto");
let deleteAllBtn = document.createElement("button");
deleteAllBtn.className = "btn btn-danger mb-3";
deleteAllBtn.innerText = "Delete All";
deleteBtnPlace[1].appendChild(deleteAllBtn);

deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  let newList2 = document.querySelectorAll("li");
  newList2.forEach((item) => {
    if (item.style.textDecoration === "line-through") {
      item.remove();
    }
  });
}
