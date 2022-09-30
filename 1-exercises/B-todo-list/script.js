function todoList(todos) {
  // Write your code here...
  const container = document.querySelector("#content");
  todos.forEach((task) => {
    const uList = document.createElement("ul");
    const item = document.createElement("ui");

    item.innerText = task.todo;
    container.append(uList);
    uList.append(item);

    item.addEventListener("click", () => {
      item.style.textDecoration === "line-through"
        ? (item.style.textDecoration = "none")
        : (item.style.textDecoration = "line-through");
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
