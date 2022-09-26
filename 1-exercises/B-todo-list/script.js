function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = todos[i].todo;
  }
}
// const completeTodo = (li) => {
//   let list = li.srcElement.style.textDecoration;
//   list === "line-through" ? (li = none) : (li = "line-through");
// };

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
let li = document.querySelectorAll("li");
//completeTodo();
document.querySelectorAll("li").forEach((x) => {
  x.addEventListener("click", (x) => {
    let y = x.srcElement.style;
    y.textDecoration === "line-through"
      ? (y.textDecoration = "none")
      : (y.textDecoration = "line-through");
  });
});
