// The function **todoList** takes an array of todo objects:

// We want to render a list of todos on the page. When we click on an item we want a line-through style to be added to it to show that the todo has been completed. If we decide we haven't actually finished the todo yet, then we should be able to click it again to remove the line-through styling.

// ## Exercise
// - You should use an `<ul>` for the list and `<li>` tags for the contents.
// - Each todo should have an event listener for when they are clicked.
// - The event listener should add the line-through style to the todo.
// - The event listener should also remove the line-through style conditionally by checking if the style is already applied. Hint: try adding a CSS classe to styles.css for this.
// - All of your HTML should go inside the `<div>` with the id **"content"**.

function todoList(todos) {
  // Write your code here...
  let ul = document.createElement("ul");
  let content = document.querySelector("#content");

  todos.forEach((elem) => {
    let li = document.createElement("li");
    li.innerText = `${elem.todo}`;

    function addLineThrough() {
      if (li.className == "add-line") {
        li.className = "remove-line";
      } else {
        li.className = "add-line";
      }
    }

    li.addEventListener("click", addLineThrough);
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
