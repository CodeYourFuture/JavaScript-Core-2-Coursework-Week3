function todoList(todos) {
 const content = document.querySelector("#content");
  todos.forEach((toDo) => {
    let unorderedList = document.createElement("ul");
    let listItem = document.createElement("li");
    listItem.innerText = toDo.todo;
    unorderedList.append(listItem);
    content.append(unorderedList);

    listItem.addEventListener("click", () => {
      listItem.style.textDecoration === "line-through"
        ? (listItem.style.textDecoration = "none")
        : (listItem.style.textDecoration = "line-through");
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);