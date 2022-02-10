function todoList(toDos) {
  // Write your code here...
  let contentDiv = document.querySelector("#content");
  let todoListContainer = document.createElement("ul");
  contentDiv.appendChild(todoListContainer);
  toDos.forEach((element) => {
    let todoEl = document.createElement("li");
    todoListContainer.appendChild(todoEl);
    todoEl.innerHTML = element.todo;

    todoEl.addEventListener("click", () => {
      if (todoEl.style.textDecoration === "") {
        todoEl.style.textDecoration = "line-through";
      } else {
        todoEl.style = "";
      }
    });
  });
}

const toDos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(toDos);
