function todoList(todos) {
  // Write your code here...
  let div = document.querySelector("#content");
  let ul = document.createElement("ul");
  div.appendChild(ul);
  for (item of todos) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `${item.todo}`;
    ul.appendChild(li);
    li.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
      li.addEventListener("click", function () {
        li.style.textDecoration = "";
      });
    });
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
