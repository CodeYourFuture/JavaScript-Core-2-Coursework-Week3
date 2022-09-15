function todoList(todos) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let ulEl = document.createElement("ul");
  contentEl.appendChild(ulEl);

  todos.forEach(task => {
    let liEl = document.createElement("li");
    contentEl.appendChild(liEl);
    liEl.textContent = task.todo;
    liEl.style.backgroundColor = "lightblue";
    liEl.addEventListener("click", () => {
      if (liEl.style.textDecoration === "line-through") liEl.style.textDecoration = "none";
      else (liEl.style.textDecoration = "line-through");
    });
  });

}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);