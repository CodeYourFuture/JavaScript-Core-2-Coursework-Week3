function populateTodoList(todos) {
  let list = document.getElementsByTagName("ul")[0];
  let listClass = document.querySelectorAll(".list-group");
  listClass[0].style.display = "flex";
  listClass[0].style.flexDirection = "column";
  listClass[0].borderRadius = "10px";

  for (let eachjob of todos) {
    let li = document.createElement("li");

    li.className = "list-items";
    let litext = document.createTextNode(eachjob.task);
    li.appendChild(litext);

    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    li.appendChild(span);

    let check = document.createElement("i");
    check.className = "fa fa-check";
    check.setAttribute("aria-hidden", "true");
    span.appendChild(check);

    let trash = document.createElement("i");
    trash.className = "fa fa-trash";
    trash.setAttribute("aria-hidden", "true");
    span.appendChild(trash);

    list.appendChild(li);
  }

  let liClass = document.querySelectorAll(".list-items");
  for (let item of liClass) {
    item.style.padding = "8px 16px 8px 16";
    item.style.backgroundColor = "white";
    item.style.border = "1px solid rgba(0, 0, 0, .125)";
  }
}
// let list = document.getElementById("#todo-list");
// for (let chore of todos) {
//   const listOfJobs = document.createElement("li");
//   listOfJobs.innerText = chore.task;

//   list.appendChild(listOfJobs);

//   const span = document.createElement("span");
//   span.className = "badge bg-primary rounded-pill";

//   const check = document.createElement("i");
//   check.className = "fa fa-check";
//   check.setAttribute("aria-hidden", "true");

//   const trash = document.createElement("i");
//   trash.className = "fa fa-trash";
//   trash.setAttribute("aria-hidden", "true");

// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

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
  // event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let todo = document.querySelector(",btn");
  todo.setAttribute("id", "addTodo");
  event.preventDefault();

  let addTodo = document.querySelector("#addTodo");
  let list = document.querySelector("#todo-list");
  const listOfJobs = document.createElement("li");

  addTodo.addEventListener("click", (event) => {
    event.preventDefault();
    const textOfJobs = document.querySelector("#writeTask").value;
    list.appendChild(listOfJobs);

    listOfJobs.innerText = textOfJobs;
    const span = document.createElement("span");
    const check = document.createElement("i");
    const trash = document.createElement("i");
  });
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
