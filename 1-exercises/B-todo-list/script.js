function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("#content");
  let uList = document.createElement("UL");
  content.appendChild(uList);

  todos.forEach((task) => {
    let list = document.createElement("li");
    list.innerHTML = task.todo;
    uList.appendChild(list);

    list.addEventListener("click", () => {
      if (list.style.textDecoration === "line-through") {
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