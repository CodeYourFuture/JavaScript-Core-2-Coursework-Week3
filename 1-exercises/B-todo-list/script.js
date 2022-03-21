const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

const todoList = (todos) => {
  const content = document.getElementById("content");
  const ul = document.createElement("ul");
  content.appendChild(ul);
  todos.forEach((work) => {
    const list = document.createElement("li");
    list.textContent = work.todo;
    ul.appendChild(list);
    ////////////// This code will insert a line when user clicks
    list.addEventListener("click", () => {
      list.style.textDecoration === "line-through"
        ? (list.style.textDecoration = "")
        : (list.style.textDecoration = "line-through");
    });
  });
};
todoList(todos);
