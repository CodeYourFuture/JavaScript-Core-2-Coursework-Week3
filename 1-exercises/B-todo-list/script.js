function todoList(todos) {
  // Write your code here...
  const content = document.querySelector("#content");
  const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  todos.forEach((task) => {
    const list = document.createElement("li");
    list.innerHTML = task.todo;
    unorderedList.appendChild(list);


    list.addEventListener("click", () => {
      if(list.style.textDecoration === "line-through") {
        list.style.textDecoration = "";
      } else {
        list.style.textDecoration = "line-through";
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