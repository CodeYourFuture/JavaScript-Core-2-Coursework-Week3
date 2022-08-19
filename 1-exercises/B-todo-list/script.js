function todoList(todos) {
  // Write your code here...

    let contents = document.getElementById("content");
    let todoList = document.createElement("ul");
    contents.appendChild(todoList);

    todos.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = item.todo;
      todoList.appendChild(li);
      li.addEventListener("click", () => {
        if (li.style.textDecoration === "line-through") {
          li.style.textDecoration = "";
        } else {
          li.style.textDecoration = "line-through";
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