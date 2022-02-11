const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

const todoList = (todos) => {
  let mainContent = document.getElementById("content");
  let ulElement = document.createElement("ul");
  mainContent.appendChild(ulElement);
  todos.forEach((work) => {
    let list = document.createElement("li");
    list.textContent = work.todo;

    ulElement.appendChild(list);
    list.addEventListener("click", () => {
      list.style.textDecoration === "line-through"
        ? (list.style.textDecoration = "")
        : (list.style.textDecoration = "line-through");
    });
  });
};
todoList(todos);
