function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  // let todos = [
  //   { task: "Wash the dishes", completed: false },
  //   { task: "Do the shopping", completed: false },
  // ];
  todos.forEach((todo) => {
    let listEl = document.createElement("li");
    let listText = document.createTextNode(todo.task);
    listEl.appendChild(listText);
    listEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    listEl.appendChild(spanEl);
    let checkEl = document.createElement("i");
    checkEl.className = "fa fa-check";
    checkEl.ariaHidden = true;
    spanEl.appendChild(checkEl);
    let trashEl = document.createElement("i");
    trashEl.className = "fa fa-trash";
    trashEl.ariaHidden = true;
    spanEl.appendChild(trashEl);
    list.appendChild(listEl);
    console.log(listEl);
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

  let toDoObj = {
    task: "",
    completed: false,
  };

  let inputEl = document.getElementById("todoInput");
  toDoObj.task = inputEl.value;
  inputEl.value = "New todo...";
  
  let indList = document.getElementById("todo-list");
  let indListEl = document.createElement("li");

  let indListText = document.createTextNode(toDoObj.task);
  indListEl.appendChild(indListText);
  indListEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    let indSpanEl = document.createElement("span");
    indSpanEl.className = "badge bg-primary rounded-pill";
    indListEl.appendChild(indSpanEl);
    let checkEl = document.createElement("i");
    checkEl.className = "fa fa-check";
    checkEl.ariaHidden = true;
    indSpanEl.appendChild(checkEl);
    let trashEl = document.createElement("i");
    trashEl.className = "fa fa-trash";
    trashEl.ariaHidden = true;
    indSpanEl.appendChild(trashEl);
    indList.appendChild(indListEl);
    todos.push(toDoObj);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
