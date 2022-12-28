function addDateElement() {
  const rightFormEl = document.querySelector(".col-auto");
  const createLabel = document.createElement("label");
  createLabel.htmlFor = "endDate";
  createLabel.textContent = "End Date:";
  const createInput = document.createElement("input");
  createInput.type = "date";
  createInput.id = "endDate";
  createInput.name = "todo-end";
  createInput.min = new Date().toISOString().slice(0, 10);
  const createBtn = document.createElement("button");
  createBtn.type = "button";
  createBtn.classList = "btn-close";
  createBtn.id = "endDateCloseBtn";
  rightFormEl.append(createLabel, createInput, createBtn);
}

addDateElement();

const list = document.getElementById("todo-list");
const endDateEl = document.querySelector("#endDate");
const todoInputEl = document.querySelector("#todoInput");

function populateTodoList(todos) {
  todos.forEach((x) => {
    createToDo(x);
  });
}
function createToDo(todo) {
  const createLi = document.createElement("li");
  createLi.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const createLeftDiv = document.createElement("div");

  const createInputCheckBox = document.createElement("input");
  createInputCheckBox.classList.add("form-check-input", "me-2");
  createInputCheckBox.type = "checkbox";

  const createLabel = document.createElement("label");
  createLabel.classList.add("form-check-label");
  createLabel.textContent = todo.task;

  createLeftDiv.append(createInputCheckBox, createLabel);

  const createRightDiv = document.createElement("div");
  createRightDiv.classList.add("d-flex", "align-items-center");

  const dayLeft = document.createElement("span");
  dayLeft.classList.add("badge", "bg-primary");

  const daysLeft = Math.abs(
    Math.floor((new Date() - new Date(todo.date)) / 24 / 60 / 60 / 1000)
  );
  dayLeft.textContent = todo.date
    ? `${daysLeft} ${daysLeft === 1 ? `day` : `days`} left`
    : "";

  const closeBin = document.createElement("button");
  closeBin.classList.add("btn-close");
  closeBin.setAttribute("id", "taskCloseBtn");
  closeBin.type = "button";
  closeBin.onclick = () => deleteOneTask(createLi);

  createRightDiv.append(dayLeft, closeBin);
  createLi.append(createLeftDiv, createRightDiv);
  list.append(createLi);
  toggleCompleted();
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();

  //---if empty value and only space, will not add todo
  const hasTodoInput = todoInputEl.value.trim();
  if (!hasTodoInput) {
    return;
  }
  const { value: task } = todoInputEl;
  const endDateValue = endDateEl.value || null;
  createToDo({
    task,
    completed: false,
    date: endDateValue,
  });
  todoInputEl.value = null;
  clearDate();
}
const AddTodoBtn = document.querySelector(".btn");
AddTodoBtn.addEventListener("click", addNewTodo);

function toggleCompleted() {
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((x) => {
    x.addEventListener("change", () => {
      if (x.checked) {
        x.nextSibling.style.textDecoration = "line-through";
      } else {
        x.nextSibling.style.textDecoration = null;
      }
    });
  });
}
function deleteOneTask(li) {
  list.removeChild(li);
}

function deleteAllCompletedTodos(e) {
  e.preventDefault();
  const completedTodos = [
    ...document.querySelectorAll(".form-check-label"),
  ].filter((x) => x.style.textDecoration === "line-through");
  completedTodos.forEach((x) => list.removeChild(x.parentNode.parentNode));
}

document.querySelector("#endDateCloseBtn").addEventListener("click", clearDate);
function clearDate() {
  endDateEl.value = null;
}
document
  .querySelector("#remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
