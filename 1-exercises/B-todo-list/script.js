function todoList(todos) {
  let content = document.getElementById("content");
  let ulList = document.createElement("ul");
  content.appendChild(ulList);

  todos.forEach((element) => {
    let list = document.createElement("li");
    list.textContent = element.todo;
    ulList.appendChild(list);

    list.addEventListener("click", () => {
      if (list.style.textDecoration === "line-through") {
        list.style.textDecoration = "none";
      } else {
        list.style.textDecoration = "line-through";
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

