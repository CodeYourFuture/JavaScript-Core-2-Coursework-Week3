//  You should use an `<ul>` for the list and `<li>` tags for the contents.
// - Each todo should have an event listener for when they are clicked.
// - The event listener should add the line-through style to the todo.
// - The event listener should also remove the line-through style conditionally by checking if the style is already applied. Hint: try adding a CSS classe to styles.css for this.
// - All of your HTML should go inside the `<div>` with the id **"content"**.



function todoList(todos) {

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
  { todo: "go shopping" }
];

todoList(todos);