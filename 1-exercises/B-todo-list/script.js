function todoList(todos) {
  let contentEl = document.querySelector("#content");
  contentEl.textContent = "To be done:";
  let ulEl = document.createElement("ul");
  contentEl.appendChild(ulEl);

  for (let element of todos) {
    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.innerHTML = `todo: ${element.todo}`;
    liEl.addEventListener("click", (linedThrough) => {
      if (liEl.style.textDecoration === "line-through") {
        liEl.style.textDecoration = "none";
      } else {
        liEl.style.textDecoration = "line-through";
      }
    });
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
