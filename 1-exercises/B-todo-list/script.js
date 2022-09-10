function todoList(todos) {
  // Write your code here...
  const h1Element = document.createElement("h1");
  const contentElement = document.querySelector("#content");
  const ulElement = document.createElement("ul");

  h1Element.appendChild(document.createTextNode("To do List"));
  document.querySelector("body").prepend(h1Element);

  todos.forEach((toDoList) => {
    const liElement = document.createElement("li");

    liElement.appendChild(document.createTextNode(toDoList.todo));
    ulElement.appendChild(liElement);
  });
  contentElement.appendChild(ulElement);

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("line-through");
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
