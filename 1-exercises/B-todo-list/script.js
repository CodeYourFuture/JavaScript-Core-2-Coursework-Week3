function todoList(todos) {
  let contentDiv = document.querySelector('#content');
  let ulTag = document.createElement("ul");
  contentDiv.appendChild(ulTag);

  todos.forEach(obj => {
    let liTag = document.createElement("li");
    ulTag.appendChild(liTag);
    liTag.innerText = obj.todo;

    liTag.addEventListener("click", () => {
      if (liTag.style.textDecoration === "") {
        liTag.style.textDecoration = "line-through";
      } else {
        liTag.style = "";
      }
    })
  });



}

const todos = [{
    todo: "wash the dishes"
  },
  {
    todo: "walk the dog"
  },
  {
    todo: "learn javascript"
  },
  {
    todo: "go shopping"
  }
];

todoList(todos);