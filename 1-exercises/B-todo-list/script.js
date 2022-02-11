function todoList(todos) {
  // Write your code here...
  const content = document.querySelector("#content");
  const uList = document.createElement("ul");
  content.appendChild.apply(uList);
  todos.forEach((task) => {
    let list = document.createElement("li");
    list.innerHTML = task.todo;
    uList.appendChild(list);
    list.addEventListener("click", () => {
      if (list.style.textDecoration === "line-through") {
        list.style.textDecoration = "";
      } else {
        list.style.Decoration = "line-through";
      }
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