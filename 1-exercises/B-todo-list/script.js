function todoList(todos) {
  // Write your code here...
  const UL = document.createElement("ul");
  document.getElementById("content").append(UL);
  for (let todo of todos) {
    let li = document.createElement("li");
    li.innerText = `${todo.todo}`;
    li.addEventListener("click", () => {
      if (li.classList.contains("done")) {
        li.classList.remove("done");
      } else {
        li.classList.add("done");
      }
    });
    UL.append(li);
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
