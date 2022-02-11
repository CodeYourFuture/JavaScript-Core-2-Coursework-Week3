function todoList(todos) {
  const content = document.querySelector("#content");
  const ulList = document.createElement("ul");
  todos.forEach((list) => {
    const listItem = document.createElement("li");
    listItem.innerText = list.todo;
    ulList.appendChild(listItem);
    listItem.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    });
  });

  content.appendChild(ulList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
