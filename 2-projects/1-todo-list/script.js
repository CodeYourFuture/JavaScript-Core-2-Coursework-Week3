let input = document.querySelector(".form-control")

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach(obj => {
    let liTag = document.createElement("li");
    liTag.className = "list-group-item d-flex justify-content-between align-items-center";
    liTag.innerHTML = obj.task;
    list.appendChild(liTag);

    //span tag
    let spanTag = document.createElement("span");
    spanTag.classList.add("badge", "bg-primary", "rounded-pill");
    liTag.appendChild(spanTag);

    //li tags for check and trash
    let iCheckEl = document.createElement("i");
    let iTrashEl = document.createElement("i");
    iCheckEl.setAttribute("aria-hidden", "true");
    iTrashEl.setAttribute("aria-hidden", "true");
    iCheckEl.classList.add("fa", "fa-check");
    iTrashEl.classList.add("fa", "fa-trash");
    spanTag.appendChild(iCheckEl);
    spanTag.appendChild(iTrashEl);


    iCheckEl.addEventListener("click", () => {

      liTag.classList.toggle("checked");
    })
    iTrashEl.addEventListener("click", () => {
      //remove
    })
  })
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [{
    task: "Wash the dishes",
    completed: false
  },
  {
    task: "Do the shopping",
    completed: false
  },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  let newObj = {};

  let value = input.value;


}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}