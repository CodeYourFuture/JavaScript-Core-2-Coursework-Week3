function todoList(todos) {
  let txtDirection = document.css;

  let contentDiv = document.getElementById("content");
  let list = document.createElement("ul");
  contentDiv.appendChild(list);

  let listRow = [];
  let todoTxt = [];

  for (i in todos) {
    listRow[i] = document.createElement("li");
    list.appendChild(listRow[i]);

    todoTxt[i] = document.createElement("p");
    listRow[i].appendChild(todoTxt[i]);
    todoTxt[i].innerText = Object.values(todos[i]);
  }

  document.querySelectorAll("li").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("line-through"))
        element.classList.remove("line-through");
      else element.classList.add("line-through");
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
