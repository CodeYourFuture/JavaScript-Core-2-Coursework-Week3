function todoList(todos) {
  let contentId = document.querySelector("#content");
  let ulTag = document.createElement("ul");
  contentId.appendChild(ulTag);
  
  for (let i = 0; i < todos.length; i++) {
    todos[i].done = true;
  }
  todos.forEach((e, index) => {
    let liTag = document.createElement("li");
    liTag.innerText = e.todo;
    liTag.id = "i" + index;
    ulTag.appendChild(liTag);

    let button = document.createElement("input");
    button.type = "submit";
    button.value = "done";
    ulTag.appendChild(button);

    button.addEventListener("click", () => {
      let x = document.getElementById("i" + index);

      if (todos[index].done) {
        todos[index].done = !todos[index].done;
        x.style.textDecoration = "line-through";
      } else {
        x.style.textDecoration = "";
        todos[index].done = !todos[index].done;
      }
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
