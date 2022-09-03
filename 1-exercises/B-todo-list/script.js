const h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("ToDo List"));
document.querySelector("body").prepend(h1);

function todoList(todos) {
   const content = document.querySelector("#content");
  const ul = document.createElement("ul");

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(todo.todo));
    ul.appendChild(li);
  });
  content.appendChild(ul);

  document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      li.classList.toggle("line-through")
    })
  });
  
  // Write your code here...
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);