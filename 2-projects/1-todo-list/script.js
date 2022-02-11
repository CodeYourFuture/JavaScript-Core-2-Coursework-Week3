// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

let ulEl = document.getElementById("todo-list");

const populateTodoList = (todos) => {
  todos.forEach((work) => {
    let list = createListElement(work);
    let span = createSpanElement(list);
    createICheckElement(span, work, list);
    createITrashElement(span, work, list);
  });
};

const createListElement = (work) => {
  let list = document.createElement("li");
  list.innerText = work.task;
  list.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  ulEl.appendChild(list);
  return list;
};

const createSpanElement = (list) => {
  let span = document.createElement("span");
  span.classList.add("badge", "bg-primary", "rounded-pill");
  list.appendChild(span);
  return span;
};

const createICheckElement = (span, work, list) => {
  let iElCheck = document.createElement("i");
  iElCheck.classList.add("fa", "fa-check");
  iElCheck.ariaHidden = work.completed;
  //when check sign click
  iElCheck.addEventListener("click", () => {
    list.style.textDecoration === "line-through"
      ? (list.style.textDecoration = "")
      : (list.style.textDecoration = "line-through");
  });
  span.appendChild(iElCheck);
};

const createITrashElement = (span, work, list) => {
  let iElTrash = document.createElement("i");
  iElTrash.classList.add("fa", "fa-trash");
  iElTrash.ariaHidden = work.completed;
  //when delete sign click
  iElTrash.addEventListener("click", () => {
    ulEl.removeChild(list);
  });
  span.appendChild(iElTrash);
};

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
const addNewTodo = (event) => {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let inputEl = document.getElementById("todoInput");
  let taskTitle = inputEl.value;
  let newArrayElement = [{ task: taskTitle, completed: false }];
  console.log(newArrayElement[0]);
  let list = createListElement(newArrayElement[0]);
  let span = createSpanElement(list);
  createICheckElement(span, newArrayElement[0], list);
  createITrashElement(span, newArrayElement[0], list);
  inputEl.textContent = "";
};

//Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
const deleteAllCompletedTodos = (event) => {
  event.preventDefault();
  let list = document.querySelectorAll("li");
  list.forEach((task) => {
    if (task.style.textDecoration === "line-through") ulEl.removeChild(task);
  });
};
