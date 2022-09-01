function todoList(todos) {
  todos.forEach((item) => {
    let div = document.getElementById("content");
    let ul = document.createElement("ul");
    div.appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = item.todo;
    li.addEventListener("click", () => {
      li.classList.toggle("onClick");
    });
  });

  // todos.forEach((item) => {
  //   let ul = document.createElement("ul");
  //   div.appendChild(ul);
  //   let li = document.createElement("li");
  //   ul.appendChild(li);
  //   li.innerHTML = item.todo;
  // });
  console.log(li);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
