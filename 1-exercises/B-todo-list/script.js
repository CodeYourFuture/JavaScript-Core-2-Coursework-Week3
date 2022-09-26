function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.innerText = `${todo.todo}`;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      let text = li.innerText;
      if (text.includes("DONE")) {
        li.innerText = `${todo.todo}`;
        li.className = "notDoneTheme";
      } else {
        li.innerText = `${todo.todo}: DONE`;
        li.className = "doneTheme";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
