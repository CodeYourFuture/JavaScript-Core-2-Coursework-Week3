function todoList(todos) {
  // Write your code here...
  const mainDiv = document.querySelector("#content");
  const todoList = document.createElement("ul");

  let toDoItems = todos
    .map((todo) => {
      return `
    <li>${todo.todo}</li>
    `;
    })
    .join("");

  todoList.innerHTML = toDoItems;
  mainDiv.append(todoList);

  let items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("strike");
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
