let content = document.querySelector("#content");
let ul = document.createElement("ul");
content.appendChild(ul);

function todoList(todos) {
  todos.forEach(itemInTodoList => {
    let li = document.createElement("li");
    li.innerText = Object.values(itemInTodoList);
    ul.appendChild(li);
    li.addEventListener("click", () => {
      li.classList.toggle("strike-through");
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