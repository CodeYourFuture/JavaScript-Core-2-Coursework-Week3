function todoList(todos) {
  // Write your code here...
  let displayEl = document.getElementById("content");
  let headingEl = document.createElement("h1");
  headingEl.textContent = "My Todos";
  displayEl.appendChild(headingEl);
  let parEl = document.createElement("p");
  parEl.textContent =
    "Click to strike off tasks, as completed. Click again to undo.";
  displayEl.appendChild(parEl);
  let ulEl = document.createElement("ul");
  displayEl.appendChild(ulEl);

  todos.forEach((el) => {
    let liEl = document.createElement("li");
    let toDoEl = document.createTextNode(el.todo);
    liEl.appendChild(toDoEl);
    ulEl.appendChild(liEl);
    liEl.addEventListener("click", doUndoTask);
  });

  function doUndoTask() {
    this.classList.contains("lineThru")
      ? this.classList.remove("lineThru")
      : (this.className += " lineThru");
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
