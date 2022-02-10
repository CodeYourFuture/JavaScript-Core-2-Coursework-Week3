function todoList(todos) {
  let ul = document.createElement("ul");
  for (let task of todos) {
    let li = document.createElement("li");
    li.textContent = task.todo;
    li.addEventListener("click", function () {
      if (li.classList.contains("done") === false) {
        li.className = "done";
      } else {
        li.classList.remove("done");
      }
    });
    ul.appendChild(li);
  }
  content.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
