function todoList(todos) {
  // Write your code here...
  const container = document.createElement("div");
  container.id = "content";
  document.body.appendChild(container);

  const todoList = document.createElement("ul");
  container.appendChild(todoList);

  todos.forEach(({ todo }) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = todo;
    todoList.appendChild(listItem);

    listItem.addEventListener("click", () => {
      if (listItem.classList.contains("toggleTodo")) {
        return listItem.classList.remove("toggleTodo");
      }

      listItem.classList.add("toggleTodo");
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
