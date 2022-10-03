function todoList(todos) {
   let content = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  
  todos.forEach((element) => {
    let liElement = document.createElement("li");
    liElement.innerHTML = element.todo;
    ulElement.appendChild(liElement);
    liElement.addEventListener("click", () => {
      if (liElement.style.textDecoration === "line-through") {
        liElement.style.textDecoration = "";
      } else {
        liElement.style.textDecoration = "line-through";
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