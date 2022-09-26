function todoList(todos) {
  let content = document.querySelector("#content");
  let unOrderedList = document.createElement("ul");
  content.appendChild(unOrderedList);
  todos.forEach((item) => {
    let list = document.createElement("li");
    list.innerHTML = item.todo;
    unOrderedList.appendChild(list);
    list.addEventListener("click", () => {
      if (list.style.textDecoration === "line-through") {
        list.style.textDecoration = "";
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
