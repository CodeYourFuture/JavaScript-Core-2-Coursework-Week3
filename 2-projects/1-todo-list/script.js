function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
function todoAdd(text) {
  let ulList = document.querySelector(`ul`);
  let liList = document.createElement(`li`);
  liList.classList.add(
    `list-group-item`,
    `d-flex`,
    `justify-content-between`,
    `align-items-center`
  );
  liList.innerText = text;
  let spanElement = document.createElement(`span`);
  spanElement.classList.add("badge", "bg-primary", "rounded-pill");
  let iElementCheck = document.createElement(`i`);
  iElementCheck.classList.add("fa", "fa-check");
  let iElementTrash = document.createElement(`i`);
  iElementTrash.classList.add("fa", "fa-trash");
  ulList.appendChild(liList);
  liList.appendChild(spanElement);
  spanElement.appendChild(iElementCheck);
  spanElement.appendChild(iElementTrash);
  iElementCheck.addEventListener(`click`, checkToDo);
  iElementTrash.addEventListener(`click`, deleteToDo);
}
function checkToDo(event) {
  let iElementCheck = event.target;
  let liParentNode = iElementCheck.parentNode.parentNode;
  liParentNode.style.textDecoration =
    liParentNode.style.textDecoration === `none` ? "line-through" : `none`;
}
function deleteToDo(event) {
  let iElementTrash = event.target;
  let liParentNode = iElementTrash.parentNode.parentNode;
  liParentNode.remove();
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
todos.forEach((element) => {
  todoAdd(element.task);
});

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let textValue = document.getElementById(`todoInput`);
  todoAdd(textValue.value);
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
