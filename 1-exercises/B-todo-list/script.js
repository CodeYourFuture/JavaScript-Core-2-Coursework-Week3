function todoList(todos) {
  let content = document.querySelector("#content");
  let orderedList = document.createElement("ul");
  content.appendChild(orderedList);
  todos.forEach((item) => {
    let list = document.createElement("li");
    list.innerHTML = item.todo;
    orderedList.appendChild(list);
    list.addEventListener("click", () => {
      if (list.style.textDecoration === "line-through") {
        list.style.textDecoration = "";
      } else {
        list.style.textDecoration = "line-through";
      }
  });
});
}
  
  // Write your code here...

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);